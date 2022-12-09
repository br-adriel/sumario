import Link from 'next/link';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderTag>
      <Container>
        <h1>
          <Link href='/'>Sumário</Link>
        </h1>
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

    a {
      color: #000;
      text-decoration: none;
    }
  }
`;

export default Header;
