import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Header from '../Header';
import data from '../../data/repos';
import './styles.scss';

function App() {
  const reposNumbers = data.items.length;
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Message message={`La recherche a donnée ${reposNumbers} resultats`} />
      <ReposResults repos={data.items} />

    </div>
  );
}

export default App;
