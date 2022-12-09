import Link from 'next/link';
import React, { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import SelectedBookContext from '../context/SelectedBookContext';

const BookPreview = () => {
  const { selectedBook } = useContext(SelectedBookContext);
  if (!Object.keys(selectedBook).length) return null;
  return (
    <Card className='mb-2 mb-md-0'>
      <Row>
        {selectedBook.cover_i ? (
          <Col xs='5' md='12'>
            <Card.Img
              src={`https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-M.jpg`}
            />
          </Col>
        ) : null}
        <Col className='col' md='12'>
          <Card.Body>
            <Card.Title>
              {selectedBook.title}{' '}
              {selectedBook['first_publish_year']
                ? `(${selectedBook['first_publish_year']})`
                : null}
            </Card.Title>
            {selectedBook.author_name ? (
              <Card.Text>
                Autor(a): {selectedBook.author_name.join(', ')}
              </Card.Text>
            ) : null}
            <Link
              href={`/${selectedBook.key.split('/')[2]}/1`}
              className='btn btn-primary mt-2'
            >
              Mais informações
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BookPreview;
