import { useContext, useEffect, useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import useSWR from 'swr';
import BookPreview from '../components/BookPreview';
import BooksTable from '../components/BooksTable';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';
import SelectedBookContext from '../context/SelectedBookContext';
import ScrollInfinito from '../components/ScrollInfinito';
import styled from 'styled-components';

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
      <StickyCol xs='12' md='4'>
        <StickyTop>
          <Header />
          <SearchForm onSubmit={searchFormSubmit} />
        </StickyTop>
        <BookPreview />
      </StickyCol>
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

const StickyTop = styled.div`
  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 10;
    background: #fff;
    padding: 5px 0;
  }
`;

const StickyCol = styled(Col)`
  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0;
    overflow-y: auto;,
    overflow-x: hidden;
    scrollbar-width: none;
    height: 100vh;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default Home;
