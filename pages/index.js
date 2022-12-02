import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <Row>
      <Col xs='12' md='4'>
        <Header />
        <SearchForm onSubmit={() => {}} />
      </Col>
      <Col xs='12' md='8'></Col>
    </Row>
  );
};

export default Home;
