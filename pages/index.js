import { Col, Row } from 'react-bootstrap';
import useSWR from 'swr';
import BooksTable from '../components/BooksTable';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import { useState, useEffect } from 'react';
import BookPreview from '../components/BookPreview';

const Home = () => {
  const [urlQuery, setUrlQuery] = useState('');
  const [booksData, setBooksData] = useState({});

  const { data, error } = useSWR(urlQuery, async (url) => {
    if (url === '' || error) return { docs: [] };
    const res = await fetch(url);
    const json = await res.json();
    return json;
  });

  useEffect(() => {
    setBooksData(data);
  }, [data]);

  const searchFormSubmit = (e) => {
    e.preventDefault();
    const busca = e.target['busca'].value.trim();
    const queryString = `http://openlibrary.org/search.json?q=${busca}&fields=key,author_name,first_publish_year,title,cover_i`;
    setUrlQuery(queryString);
  };

  return (
    <Row>
      <Col xs='12' md='4'>
        <Header />
        <SearchForm onSubmit={searchFormSubmit} />
        <BookPreview />
      </Col>
      <Col xs='12' md='8'>
        <BooksTable books={booksData} />
      </Col>
    </Row>
  );
};

export default Home;
