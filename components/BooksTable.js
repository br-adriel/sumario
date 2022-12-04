import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GenericTable from './GenericTable';
import SortButton from './SortButton';
import sortArray from 'sort-array';

const BooksTable = ({ books }) => {
  const [listedBooks, setListedBooks] = useState([]);

  useEffect(() => {
    setListedBooks(books);
  }, [books]);

  const orderBooks = (by, desc = false) => {
    const currentBooks = [...listedBooks];
    sortArray(currentBooks, { by, order: desc ? 'desc' : 'asc' });
    setListedBooks(currentBooks);
  };

  const renderTableLines = (book) => {
    return (
      <tr key={book.isbn[0]}>
        <td>{book.title}</td>
        <td>{book.author_name[0]}</td>
        <td>{book.first_publish_year}</td>
      </tr>
    );
  };

  const cabecalhos = [
    <>
      <span>Título</span>
      <SortButton
        className='btn-sm'
        ascendingFunc={() => orderBooks('title')}
        descendingFunc={() => orderBooks('title', true)}
      />
    </>,
    <>
      <span>Autor(a)</span>
      <SortButton
        className='btn-sm'
        ascendingFunc={() => orderBooks('author_name')}
        descendingFunc={() => orderBooks('author_name', true)}
      />
    </>,
    <>
      <span>Ano de publicação</span>
      <SortButton
        className='btn-sm'
        ascendingFunc={() => orderBooks('first_publish_year')}
        descendingFunc={() => orderBooks('first_publish_year', true)}
      />
    </>,
  ];

  return (
    <>
      {listedBooks.length ? (
        <GenericTable
          cabecalhos={cabecalhos}
          conteudo={listedBooks}
          generateLines={renderTableLines}
        />
      ) : (
        <h2>Nenhum livro encontrado</h2>
      )}
    </>
  );
};

export default BooksTable;
