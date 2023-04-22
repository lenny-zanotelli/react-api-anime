import { Box, Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './styles.scss';

function SearchBar() {
  return (
    <Container
      component="form"
      autoComplete="off"
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white', border: '1px solid white', borderRadius: '10px', my: '1rem', boxShadow: '5px 5px 5px #ecf0f1',
      }}
    >
      <SearchIcon sx={{ fontSize: '40' }} />
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: '100%', backgroundColor: 'white' }}
        margin="normal"
      />
    </Container>
  );
}

export default SearchBar;
