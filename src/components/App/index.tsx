import { useState } from 'react';
import axios from 'axios';
import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Header from '../Header';
import data from '../../data/repos';
import './styles.scss';
import { Root } from '../../@types/anime';

function App() {
  const [animeData, setAnimeData] = useState<Root>({
    data: [],
  });
  const reposNumbers = data.items.length;
  const handleChangeSearch = (search: string) => {
    axios
      .get(`https://api.jikan.moe/v4/anime?q=${search}`)
      .then((response) => {
        console.log(response.data);
        setAnimeData(response.data);
      });
    console.log(search);
  };
  return (
    <div className="app">
      <Header />
      <SearchBar onSubmitForm={handleChangeSearch} />
      <Message message={`La recherche a donnée ${reposNumbers} resultats`} />
      <ReposResults data={animeData.data} />

    </div>
  );
}

export default App;
