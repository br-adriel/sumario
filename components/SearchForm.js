import { useId } from 'react';
import { Button, Form, FormGroup, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import styled from 'styled-components';

const SearchForm = ({ onSubmit }) => {
  const inputId = useId();
  return (
    <FormTag onSubmit={onSubmit}>
      <label htmlFor={`form${inputId}`} className='visually-hidden'>
        Pesquisar livro:
      </label>
      <InputGroup>
        <Form.Control
          type='search'
          name='conteudo'
          id={`form${inputId}`}
          className='form-control'
          autoFocus
        />
      </InputGroup>
      <SubmitButton type='submit' title='Pesquisar'>
        <Search />
      </SubmitButton>
    </FormTag>
  );
};

const SubmitButton = styled(Button)`
  display: flex;
  padding: 10px;

  svg {
    font-size: 1rem;
  }
`;

const FormTag = styled.form`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
`;

export default SearchForm;
