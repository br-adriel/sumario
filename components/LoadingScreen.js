import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const LoadingScreen = () => {
  const reticencias = ['', '.', '..', '...'];
  const [index, setIndex] = useState(0);

  const atualizarTexto = useCallback(() => {
    setIndex((prev) => (prev === 3 ? 0 : prev + 1));
  });

  useEffect(() => {
    const timer = setInterval(atualizarTexto, 700);
    return () => clearInterval(timer);
  }, [atualizarTexto]);

  return (
    <Wrapper>
      <h4>Carregando{reticencias[index]}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 20px;
`;

export default LoadingScreen;
