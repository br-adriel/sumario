import { Button, Container, ToggleButton } from 'react-bootstrap';
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

  h1 {
    font-family: 'Great Vibes';
    font-weight: bold;
    padding: 10px 20px;
  }
`;

export default Header;
