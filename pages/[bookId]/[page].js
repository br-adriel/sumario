import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import GenericTable from '../../components/GenericTable';
import Header from '../../components/Header';
import getYearFromDateString from '../../utils/getYearFromDateString';

const Home = ({ data, error }) => {
  const router = useRouter();
  const { bookId, page } = router.query;
  const [editionsData, setEditionsData] = useState({});

  useEffect(() => {
    setEditionsData((prev) => (data ? data : prev));
  }, [data]);

  const cabecalhos = [
    { title: '#' },
    { title: 'Título' },
    { title: 'Ano de publicação' },
    { title: 'Editora' },
  ];

  const renderLines = (edicao, i) => {
    const indice = 50 * Number(page) - 50 + i + 1;
    let ano;
    if (edicao.publish_date) {
      ano = getYearFromDateString(edicao.publish_date);
      ano = Number.isNaN(ano) ? edicao.publish_date : ano;
    }
    return (
      <tr key={edicao.key}>
        <td>{indice}</td>
        <td>
          <Link href={`/edition/${edicao.key.split('/')[2]}`}>
            {edicao.title}
          </Link>
        </td>
        <td>{edicao.publish_date ? ano : '-'}</td>
        <td>{edicao.publishers ? edicao.publishers.join(', ') : '-'}</td>
      </tr>
    );
  };

  if (error) return <h1>Obra desconhecida</h1>;
  if (!bookId || !page || !editionsData.entries) return <h1>Carregando...</h1>;
  if (data && data.entries.length === 0)
    return <h1>Nenhuma edição encontrada</h1>;
  return (
    <>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col className='pb-5 mb-2'>
          <h2 style={{ padding: '15px' }}>
            <b>{editionsData.size} </b>
            <small>
              {editionsData.size == 1
                ? 'edição encontrada'
                : 'edições encontradas'}
            </small>
          </h2>
          <GenericTable
            cabecalhos={cabecalhos}
            conteudo={editionsData.entries}
            generateLines={renderLines}
          />
          <BtnGroupWrapper>
            <ButtonGroup>
              {!editionsData.links.prev ? null : (
                <Link
                  href={`/${bookId}/${Number(page) - 1}`}
                  className='btn btn-outline-primary'
                >
                  Anterior
                </Link>
              )}
              {!editionsData.links.next ? null : (
                <Link
                  href={`/${bookId}/${Number(page) + 1}`}
                  className='btn btn-outline-primary'
                >
                  Próximo
                </Link>
              )}
            </ButtonGroup>
          </BtnGroupWrapper>
        </Col>
      </Row>
    </>
  );
};

const BtnGroupWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export async function getStaticPaths() {
  const paths = [
    { params: { bookId: 'OL24457534W', page: '1' } },
    { params: { bookId: 'OL5735360W', page: '1' } },
    { params: { bookId: 'OL17852712W', page: '1' } },
    { params: { bookId: 'OL20651847W', page: '1' } },
    { params: { bookId: 'OL19634654W', page: '1' } },
    { params: { bookId: 'OL5735363W', page: '1' } },
    { params: { bookId: 'OL15413843W', page: '1' } },
    { params: { bookId: 'OL5843614W', page: '1' } },
    { params: { bookId: 'OL103123W', page: '1' } },
    { params: { bookId: 'OL1168007W', page: '1' } },
    { params: { bookId: 'OL1168083W', page: '1' } },
    { params: { bookId: 'OL20716197W', page: '1' } },
  ];
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { bookId, page } = params;
  const offset = page * 50 - 50;
  const res = await fetch(
    `https://openlibrary.org/works/${bookId}/editions.json?offset=${offset}`
  );

  try {
    const data = await res.json();
    return {
      props: {
        data,
        error: data.error ? true : false,
      },
    };
  } catch (err) {
    return {
      props: {
        data: undefined,
        error: true,
      },
    };
  }
}

export default Home;
