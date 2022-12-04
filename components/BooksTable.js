import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GenericTable from './GenericTable';
import SortButton from './SortButton';
import sortArray from 'sort-array';

const BooksTable = ({ books }) => {
  const [listedBooks, setListedBooks] = useState([]);

  useEffect(() => {
    setListedBooks(books && books.docs ? books.docs : []);
  }, [books]);

  const orderBooks = (by, desc = false) => {
    const currentBooks = [...listedBooks];
    sortArray(currentBooks, { by, order: desc ? 'desc' : 'asc' });
    setListedBooks(currentBooks);
  };

  const renderTableLines = (book) => {
    return (
      <tr key={book.key}>
        <td>{book.title ? book.title : '-'}</td>
        <td>{book.author_name ? book.author_name.join(', ') : '-'}</td>
        <td>{book.first_publish_year ? book.first_publish_year : '-'}</td>
      </tr>
    );
  };

  const cabecalhos = [
    <p>
      <span>Título</span>
      <SortButton
        className='btn-sm'
        ascendingFunc={() => orderBooks('title')}
        descendingFunc={() => orderBooks('title', true)}
      />
    </p>,
    <p>
      <span>Autor</span>
      <SortButton
        className='btn-sm'
        ascendingFunc={() => orderBooks('author_name')}
        descendingFunc={() => orderBooks('author_name', true)}
      />
    </p>,
    <p>
      <span>Ano</span>
      <SortButton
        className='btn-sm'
        ascendingFunc={() => orderBooks('first_publish_year')}
        descendingFunc={() => orderBooks('first_publish_year', true)}
      />
    </p>,
  ];

  if (!books || !books.docs) return null;
  if (!books.docs.length) return <h2> Nenhum livro encontrado</h2>;
  return (
    <GenericTable
      cabecalhos={cabecalhos}
      conteudo={listedBooks}
      generateLines={renderTableLines}
    />
  );
};

export default BooksTable;
