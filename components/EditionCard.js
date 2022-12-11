import { Card, Col, Row } from 'react-bootstrap';
import getYearFromDateString from '../utils/getYearFromDateString';
import CardArrayField from './CardArrayField';
import ImagesCarousel from './ImagesCarousel';

const EditionCard = ({ edicao }) => {
  return (
    <Card className='mb-2 mb-md-0'>
      <Row>
        {edicao.covers ? (
          <Col sm='4' md='3'>
            <ImagesCarousel imagens={edicao.covers} />
          </Col>
        ) : null}
        <Col>
          <Card.Body>
            <h3>{edicao.title}</h3>
            <CardArrayField
              title='Idioma'
              array={edicao.languages}
              defaultValue='não informado'
            />
            <CardArrayField
              title='Editora'
              array={edicao.publishers}
              defaultValue='desconhecida'
            />
            <CardArrayField
              title='ISBN'
              array={edicao.isbn_10}
              defaultValue='desconhecido'
            />
            <CardArrayField
              title='ISBN 13'
              array={edicao.isbn_13}
              defaultValue='desconhecido'
            />
            {!edicao.number_of_pages ? null : (
              <p>
                <b>Número de páginas:</b>
                {` ${edicao.number_of_pages}`}
              </p>
            )}
            {!edicao.publish_date ? null : (
              <p>
                <b>Ano de publicação:</b>
                {` ${getYearFromDateString(edicao.publish_date)}`}
              </p>
            )}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default EditionCard;
