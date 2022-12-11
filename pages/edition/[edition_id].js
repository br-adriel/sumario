import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import AuthorCard from '../../components/AuthorCard';
import EditionCard from '../../components/EditionCard';
import Header from '../../components/Header';
import fecthEdition from '../../utils/fetchEdition';

const Edicao = ({ data, error }) => {
  const [edicao, setEdicao] = useState();

  useEffect(() => {
    setEdicao(data);
  }, [data]);

  if (error) return <h1>Edição desconhecida</h1>;
  if (!edicao) return <h1>Carregando...</h1>;
  return (
    <>
      <Row>
        <Col xs='12'>
          <Header />
        </Col>
        <div className='pb-5 mb-2 col'>
          <section className='mb-3'>
            <EditionCard edicao={edicao} />
          </section>
          {!edicao.authors ? null : (
            <section>
              <h2>Autores</h2>
              <AuthorsWrapper>
                {edicao.authors.map((author) => (
                  <AuthorCard author={author} key={author.key} />
                ))}
              </AuthorsWrapper>
            </section>
          )}
        </div>
      </Row>
    </>
  );
};

const AuthorsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  const { edition_id } = params;

  try {
    const data = await fecthEdition(
      `https://openlibrary.org/books/${edition_id}.json`
    );
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

export default Edicao;
