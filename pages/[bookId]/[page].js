import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import useSWR from 'swr';
import Header from '../../components/Header';
import GenericTable from '../../components/GenericTable';
import Link from 'next/link';
import styled from 'styled-components';

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
    { title: 'Idioma' },
  ];

  const renderLines = (edicao, i) => (
    <tr key={edicao.key}>
      <td>{50 * Number(page) - 50 + i + 1}</td>
      <td>{edicao.title}</td>
      <td>{edicao.publish_date ? edicao.publish_date : '-'}</td>
      <td>{edicao.publishers ? edicao.publishers.join(', ') : '-'}</td>
      <td>
        {edicao.languages
          ? edicao.languages.map((l) => l.key.split('/')[2]).join(', ')
          : '-'}
      </td>
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
