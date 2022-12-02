import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import GlobalStyle from '../components/GlobalStyle';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Great+Vibes&family=Outfit:wght@300;400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <GlobalStyle />
      <Header />
      <main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
      <Footer />
    </>
  );
}
