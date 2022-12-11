import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import GlobalStyle from '../components/GlobalStyle';
import Head from 'next/head';
import Footer from '../components/Footer';
import SelectedBookContext from '../context/SelectedBookContext';
import { useState } from 'react';
import BooksDataContext from '../context/BooksDataContext';

export default function MyApp({ Component, pageProps }) {
  const [selectedBook, setSelectedBook] = useState({});
  const [booksData, setBooksData] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [booksFetchUrl, setBooksFetchUrl] = useState('');
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
      </Head>
      <GlobalStyle />
      <main>
        <SelectedBookContext.Provider
          value={{ selectedBook, setSelectedBook, searchValue, setSearchValue }}
        >
          <BooksDataContext.Provider
            value={{ booksData, setBooksData, booksFetchUrl, setBooksFetchUrl }}
          >
            <Container>
              <Component {...pageProps} />
            </Container>
          </BooksDataContext.Provider>
        </SelectedBookContext.Provider>
      </main>
      <Footer />
    </>
  );
}
