import styled from 'styled-components';

const EmptySelection = () => {
  return (
    <Wrapper>
      <img src='/assets/img/notebook.svg' alt='' />
      <h4>Nenhuma obra selecionada</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 6px;

  h4 {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export default EmptySelection;
