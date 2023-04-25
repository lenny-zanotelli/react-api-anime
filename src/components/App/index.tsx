import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Pagination } from '@mui/material';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Header from '../Header';
import './styles.scss';
import { Root } from '../../@types/anime';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [textToSearch, setTextToSearch] = useState('');
  const [animeData, setAnimeData] = useState<Root>({
    data: [],
    pagination: {
      last_visible_page: 0,
      has_next_page: false,
      items: {
        count: 0,
        total: 0,
        per_page: 0,
      },
    },
  });

  const reposNumbers = animeData.pagination.items.total;
  const handleChangeSearch = (search: string) => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${search}`)
      .then((response) => {
        console.log(response.data);
        setAnimeData(response.data);
      });
    console.log(search);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <div className="app">
      <Header />
      <SearchBar onSubmitForm={handleChangeSearch} />
      <Message message={`La recherche a donnée ${reposNumbers} resultats`} />
      <ReposResults data={animeData.data} />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Pagination count={10} onClick={() => setPageNumber(pageNumber + 1)} />
      </Box>

    </div>
  );
}

export default App;
