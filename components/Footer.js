import { Container } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterTag>
      <Container>
        <p>Adriel Santos, {new Date().getFullYear()}</p>
        <div>
          <a
            href='https://www.github.com/br-adriel'
            target='_blank'
            rel='noopener noreferrer'
            title='Github'
          >
            <Github />
          </a>
          <a
            href='https://www.linkedin.com/in/adriel-fsantos'
            target='_blank'
            rel='noopener noreferrer'
            title='Linkedin'
          >
            <Linkedin />
          </a>
        </div>
      </Container>
    </FooterTag>
  );
};

const FooterTag = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 20px;
  display: flex;
  gap: 20px;

  & > .container {
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    & > .container {
      justify-content: flex-end;
    }
  }

  p {
    margin-top: 5px;
  }

  a {
    font-size: clamp(1rem, 1.2rem, 1.5rem);
  }

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

export default Footer;
