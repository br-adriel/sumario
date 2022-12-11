import Link from 'next/link';

const EditionsTableLine = ({ edition, indice }) => {
  return (
    <tr>
      {indice ? <td>{indice}</td> : null}
      <td>
        <Link href={`/edition/${edition.key.split('/')[2]}`}>
          {edition.title}
        </Link>
      </td>
      <td>{edition.publish_date}</td>
      <td>{edition.publishers ? edition.publishers.join(', ') : '-'}</td>
    </tr>
  );
};

export default EditionsTableLine;
