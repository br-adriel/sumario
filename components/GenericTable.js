import { Col, Table } from 'react-bootstrap';
import SortButton from './SortButton';

const GenericTable = ({
  titulo = undefined,
  cabecalhos = [],
  conteudo,
  generateLines,
}) => {
  return (
    <Col>
      {titulo ? <h3>{titulo}</h3> : null}
      <Table bordered responsive>
        <thead>
          <tr>
            {cabecalhos.map((cab, i) => (
              <th key={i} className='text-center'>
                <span>{cab.title}</span>
                {cab.orderAsc && cab.orderDesc ? (
                  <SortButton
                    className='btn-sm'
                    ascendingFunc={cab.orderAsc}
                    descendingFunc={cab.orderDesc}
                  />
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{conteudo.map(generateLines)}</tbody>
      </Table>
    </Col>
  );
};

export default GenericTable;
