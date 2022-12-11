import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import useSWR from 'swr';
import GenericTable from '../../components/GenericTable';
import Header from '../../components/Header';
import getYearFromDateString from '../../utils/getYearFromDateString';

const Home = () => {
  const router = useRouter();
  const { bookId, page } = router.query;
  const [editionsData, setEditionsData] = useState({});
  const [url, setUrl] = useState('');

  useEffect(
    () => setUrl(`/works/${bookId}/editions.json?offset=${page * 50 - 50}`),
    [bookId, page]
  );

  const { data, error } = useSWR(url, async (url) => {
    if (url === '') return undefined;
    const res = await fetch(`https://openlibrary.org${url}`);
    const json = await res.json();
    return json;
  });

  useEffect(() => {
    setEditionsData((prev) => (data ? data : prev));
  }, [data]);

  const cabecalhos = [
    { title: '#' },
    { title: 'Título' },
    { title: 'Ano de publicação' },
    { title: 'Editora' },
  ];

  const renderLines = (edicao, i) => (
    <tr key={edicao.key}>
      <td>{50 * Number(page) - 50 + i + 1}</td>
      <td>
        <Link href={`/edition/${edicao.key.split('/')[2]}`}>
          {edicao.title}
        </Link>
      </td>
      <td>
        {edicao.publish_date ? getYearFromDateString(edicao.publish_date) : '-'}
      </td>
      <td>{edicao.publishers ? edicao.publishers.join(', ') : '-'}</td>
    </tr>
  );

  if (error || (data && data.error)) return <h1>Um erro ocorreu</h1>;
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

export default Home;
