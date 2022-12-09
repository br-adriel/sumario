import { useEffect, useId } from 'react';
import styled from 'styled-components';

const ScrollInfinito = ({ children, onScrollEnd }) => {
  const htmlId = useId();

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) onScrollEnd();
    }, {});

    obs.observe(document.getElementById(`scrollLoad${htmlId}`));
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      {children}
      <EndingDiv id={`scrollLoad${htmlId}`} />
    </div>
  );
};

const EndingDiv = styled.div`
  width: 100%;
  height: 2px;
`;

export default ScrollInfinito;
