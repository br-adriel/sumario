import { Star, XLg } from 'react-bootstrap-icons';
import styled from 'styled-components';
import getYearFromDateString from '../utils/getYearFromDateString';

const AuthorBirthDeathDates = ({ birth, death }) => {
  return (
    <Wrapper>
      {!birth ? null : (
        <DateDiv>
          <Star title='Ano de nascimento' />
          <span title='Ano de nascimento'>{getYearFromDateString(birth)}</span>
        </DateDiv>
      )}
      {!death ? null : (
        <DateDiv>
          <XLg title='Ano de falecimento' />
          <span title='Ano de falecimento'>{getYearFromDateString(death)}</span>
        </DateDiv>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const DateDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default AuthorBirthDeathDates;
