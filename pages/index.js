import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useSWR from 'swr';
import BookPreview from '../components/BookPreview';
import BooksTable from '../components/BooksTable';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SelectedBookContext from '../context/SelectedBookContext';

const Home = () => {
  const [urlQuery, setUrlQuery] = useState('');
  const [booksData, setBooksData] = useState({});
  const { setSelectedBook } = useContext(SelectedBookContext);

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
    setSelectedBook({});
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
