import { Badge } from 'react-bootstrap';
import styled from 'styled-components';

const AuthorLinks = ({ links }) => {
  return (
    <div>
      <p>
        {' '}
        <b>Links:</b>
      </p>
      <LinksDiv>
        {links.map((link) => {
          return (
            <Badge key={link.url} bg='primary'>
              <a href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.title}
              </a>
            </Badge>
          );
        })}
      </LinksDiv>
    </div>
  );
};

const LinksDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: white;
  gap: 5px;

  span,
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default AuthorLinks;
