import { useContext } from 'react';
import { useId } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import styled from 'styled-components';
import SelectedBookContext from '../context/SelectedBookContext';

const SearchForm = ({ onSubmit }) => {
  const inputId = useId();
  const { searchValue, setSearchValue } = useContext(SelectedBookContext);
  return (
    <FormTag onSubmit={onSubmit}>
      <label htmlFor={`form${inputId}`} className='visually-hidden'>
        Pesquisar obra:
      </label>
      <InputGroup>
        <Form.Control
          type='search'
          name='busca'
          id={`form${inputId}`}
          className='form-control'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
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
  margin-bottom: 6px;
`;

export default SearchForm;
