import { Carousel } from 'react-bootstrap';

const ImagesCarousel = ({ imagens }) => {
  return (
    <Carousel indicators={false} controls={false} fade>
      {imagens.map((imagem) => {
        return (
          <Carousel.Item key={imagem}>
            <img
              className='d-block w-100 rounded'
              src={`https://covers.openlibrary.org/b/id/${imagem}-L.jpg`}
              alt=''
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ImagesCarousel;
