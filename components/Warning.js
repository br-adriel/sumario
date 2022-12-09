import React from 'react';
import styled from 'styled-components';

const Warning = ({ message }) => {
  return (
    <Wrapper>
      <img src='/assets/img/estante.svg' alt='' />
      <h4>{message}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 20px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 6px;

  img {
    max-width: 400px;
  }

  h4 {
    text-align: center;
  }
`;

export default Warning;
