import { useEffect, useId } from 'react';

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
      <div id={`scrollLoad${htmlId}`} />
    </div>
  );
};

export default ScrollInfinito;
