import { Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './styles.scss';
import { useState } from 'react';

interface SearchBarProps {
  onSubmitForm: (search: string) => void;
}

function SearchBar({ onSubmitForm }: SearchBarProps) {
  const [search, setSearch] = useState('');
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('ici');
    onSubmitForm(search);
  };

  return (
    <Container
      component="form"
      autoComplete="off"
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', border: '1px solid white', borderRadius: '10px', my: '1rem', boxShadow: '5px 5px 5px #ecf0f1',
      }}
      onSubmit={handleSubmitForm}
    >
      <SearchIcon sx={{ fontSize: '2rem', marginRight: '0.5rem' }} />
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: '100%', backgroundColor: 'white' }}
        margin="normal"
        onChange={handleChangeSearch}
      />
    </Container>
  );
}

export default SearchBar;
