import { Col, Table } from 'react-bootstrap';

const GenericTable = ({
  titulo = undefined,
  cabecalhos,
  conteudo,
  generateLines,
}) => {
  return (
    <Col>
      {titulo ? <h3>{titulo}</h3> : null}
      <Table striped bordered responsive>
        <thead>
          <tr>
            {cabecalhos.map((cab, i) => (
              <th key={i}>{cab}</th>
            ))}
          </tr>
        </thead>
        <tbody>{conteudo.map(generateLines)}</tbody>
      </Table>
    </Col>
  );
};

export default GenericTable;
