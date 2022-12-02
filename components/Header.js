import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderTag>
      <Container>
        <h1>Sumário</h1>
      </Container>
    </HeaderTag>
  );
};

const HeaderTag = styled.header`
  width: 100%;
  padding: 5px;

  h1 {
    text-align: center;
    font-family: 'Great Vibes';
    font-weight: bold;
    padding: 10px 20px;
    margin: 0;
  }
`;

export default Header;
