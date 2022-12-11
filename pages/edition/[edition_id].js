import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useSWR from 'swr';
import AuthorCard from '../../components/AuthorCard';
import EditionCard from '../../components/EditionCard';
import Header from '../../components/Header';
import fecthEdition from '../../utils/fetchEdition';

const Edicao = () => {
  const router = useRouter();
  const { edition_id } = router.query;
  const [edicao, setEdicao] = useState();
  const [url, setUrl] = useState('');

  const { data, error } = useSWR(url, async (url) => {
    if (url === '' || !edition_id) return undefined;
    const result = await fecthEdition(url);
    return result;
  });

  useEffect(() => {
    setUrl(`https://openlibrary.org/books/${edition_id}.json`);
  }, [edition_id]);

  useEffect(() => {
    setEdicao(data);
  }, [data]);

  if (!edition_id || !edicao) return <h1>Carregando...</h1>;
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
              <h2>Autoria</h2>
              {edicao.authors.map((author) => (
                <AuthorCard author={author} />
              ))}
            </section>
          )}
        </div>
      </Row>
    </>
  );
};

export default Edicao;
