import { useContext, useEffect, useState } from 'react';
import sortArray from 'sort-array';
import SelectedBookContext from '../context/SelectedBookContext';
import GenericTable from './GenericTable';

const BooksTable = ({ books }) => {
  const [listedBooks, setListedBooks] = useState([]);
  const { selectedBook, setSelectedBook } = useContext(SelectedBookContext);

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
      <tr
        key={book.key}
        style={{ cursor: 'pointer' }}
        className={
          !!selectedBook.key && selectedBook.key === book.key
            ? 'text-primary table-active'
            : ''
        }
        onClick={() =>
          setSelectedBook((prev) => {
            if (prev.key === book.key) return {};
            return book;
          })
        }
      >
        <td>{book.title ? book.title : '-'}</td>
        <td>{book.author_name ? book.author_name.join(', ') : '-'}</td>
        <td>{book.first_publish_year ? book.first_publish_year : '-'}</td>
      </tr>
    );
  };

  const cabecalhos = [
    {
      title: 'Título',
      orderAsc: () => orderBooks('title'),
      orderDesc: () => orderBooks('title', true),
    },
    {
      title: 'Autor',
      orderAsc: () => orderBooks('author_name'),
      orderDesc: () => orderBooks('author_name', true),
    },
    {
      title: 'Ano',
      orderAsc: () => orderBooks('first_publish_year'),
      orderDesc: () => orderBooks('first_publish_year', true),
    },
  ];

  if (!books || !books.docs) return null;
  if (!books.docs.length) return <h2> Nenhum livro encontrado</h2>;
  return (
    <>
      <h2>
        <b>{books.numFound} </b>
        <small>itens encontrados</small>
      </h2>
      <GenericTable
        cabecalhos={cabecalhos}
        conteudo={listedBooks}
        generateLines={renderTableLines}
      />
    </>
  );
};

export default BooksTable;
