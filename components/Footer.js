import { Github, Linkedin } from 'react-bootstrap-icons';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterTag>
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
    </FooterTag>
  );
};

const FooterTag = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;

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
