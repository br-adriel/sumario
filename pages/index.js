import { useContext, useEffect, useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import useSWR from 'swr';
import BookPreview from '../components/BookPreview';
import BooksTable from '../components/BooksTable';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SelectedBookContext from '../context/SelectedBookContext';
import ScrollInfinito from '../components/ScrollInfinito';

const Home = () => {
  const [url, setUrl] = useState('');
  const [booksData, setBooksData] = useState({});
  const { setSelectedBook } = useContext(SelectedBookContext);
  const pageNumber = useRef(1);

  const { data, error } = useSWR(url, async (url) => {
    if (url === '' || error) return { docs: [], q: '' };
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
    pageNumber.current = 1;
    const newUrl = `http://openlibrary.org/search.json?q=${busca}&fields=key,author_name,first_publish_year,title,cover_i&page=1`;
    setSelectedBook({});
    setUrl(newUrl);
  };

  return (
    <Row>
      <Col xs='12' md='4'>
        <Header />
        <SearchForm onSubmit={searchFormSubmit} />
        <BookPreview />
      </Col>
      <Col xs='12' md='8'>
        <ScrollInfinito
          onScrollEnd={() => {
            pageNumber.current = pageNumber.current + 1;
            setUrl((prev) => {
              if (prev.indexOf('&page=') !== -1) {
                const base = `${prev.split('&page=')[0]}`;
                return `${base}&page=${pageNumber.current}`;
              }
              return prev;
            });
          }}
        >
          <BooksTable books={booksData} />
        </ScrollInfinito>
      </Col>
    </Row>
  );
};

export default Home;
