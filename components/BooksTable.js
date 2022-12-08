import { useContext, useEffect, useRef, useState } from 'react';
import sortArray from 'sort-array';
import SelectedBookContext from '../context/SelectedBookContext';
import joinDocs from '../utils/joinDocs';
import GenericTable from './GenericTable';

const BooksTable = ({ books }) => {
  const query = useRef('');
  const booksCount = useRef(0);
  const firstRender = useRef(true);
  const [listedBooks, setListedBooks] = useState([]);
  const { selectedBook, setSelectedBook } = useContext(SelectedBookContext);

  useEffect(() => {
    if (books) {
      firstRender.current = false;

      if (query.current === books.q) {
        if (books.docs && books.docs.length) {
          setListedBooks((prev) => {
            return joinDocs(prev, books.docs);
          });
        }
      } else {
        query.current = books.q;
        booksCount.current = books.numFound;
        setListedBooks(books.docs ? books.docs : []);
      }
    }
  }, [books]);

  const orderBooks = (by, desc = false) => {
    const currentBooks = [...listedBooks];
    sortArray(currentBooks, { by, order: desc ? 'desc' : 'asc' });
    setListedBooks(currentBooks);
  };

  const renderTableLines = (book, i) => {
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
        <td>{i + 1}</td>
        <td>{book.title ? book.title : '-'}</td>
        <td>{book.author_name ? book.author_name.join(', ') : '-'}</td>
        <td>{book.first_publish_year ? book.first_publish_year : '-'}</td>
      </tr>
    );
  };

  const cabecalhos = [
    { title: '#' },
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

  if (firstRender.current) return null;
  if (!listedBooks.length) return <h2> Nenhum livro encontrado</h2>;
  return (
    <>
      <h2>
        <b>{booksCount.current} </b>
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
