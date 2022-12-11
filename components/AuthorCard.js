import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Star } from 'react-bootstrap-icons';
import AuthorBirthDeathDates from './AuthorBirthDeathDates';
import AuthorLinks from './AuthorLinks';
import CardArrayField from './CardArrayField';
import ImagesCarousel from './ImagesCarousel';

const AuthorCard = ({ author }) => {
  return (
    <Card className='mb-2 mb-md-0 col-md-6'>
      <Row>
        {author.photos ? (
          <Col xs='4'>
            <ImagesCarousel imagens={author.photos} />
          </Col>
        ) : null}
        <Col>
          <Card.Body>
            <h3>{author.name}</h3>
            {!author.alternate_names ? null : (
              <CardArrayField
                title='Outros nomes'
                array={author.alternate_names}
              />
            )}
            {!author.death_date && !author.birth_date ? null : (
              <AuthorBirthDeathDates
                birth={author.birth_date}
                death={author.death_date}
              />
            )}
            {!author.links ? null : <AuthorLinks links={author.links} />}
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default AuthorCard;
