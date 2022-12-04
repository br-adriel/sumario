import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowDown, ArrowDownUp, ArrowUp } from 'react-bootstrap-icons';

export default function SortButton({
  ascendingFunc,
  descendingFunc,
  className = '',
}) {
  const [order, setOrder] = useState('neutral');

  const icons = {
    neutral: <ArrowDownUp />,
    ascending: <ArrowDown />,
    descending: <ArrowUp />,
  };

  const sort = () => {
    if (order === 'neutral' || order === 'descending') {
      setOrder('ascending');
      ascendingFunc();
    } else {
      setOrder('descending');
      descendingFunc();
    }
  };

  return (
    <Button onClick={sort} variant='link' className={className}>
      {icons[order]}
    </Button>
  );
}
