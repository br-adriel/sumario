import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function MyApp({ Component, pageProps }) {
  return <Container>
    <Component {...pageProps} />
  </Container>
}