import { Container } from 'react-bootstrap';
import { Github, Linkedin } from 'react-bootstrap-icons';
import styled from 'styled-components';
import GlassDiv from './GlassDiv';

const Footer = () => {
  return (
    <FooterTag>
      <Container>
        <GlassDiv>
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
        </GlassDiv>
      </Container>
    </FooterTag>
  );
};

const FooterTag = styled.footer`
  width: 100%;
  margin-top: auto;
  padding-bottom: 6px;
  display: flex;
  gap: 20px;
  position: fixed;
  bottom: 0;
  right: 0;

  & > .container {
    justify-content: flex-end;
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
