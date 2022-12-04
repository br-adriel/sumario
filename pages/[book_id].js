import { useRouter } from 'next/router';
import React from 'react';

const BookDeatilsPage = () => {
  const router = useRouter();
  const { book_id } = router.query;
  return <div>Livro {book_id}</div>;
};

export default BookDeatilsPage;
