import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import Message from '../Message';
import Header from '../Header';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Message message="La recherche a donnée 30 resultats" />
      <ReposResults />

    </div>
  );
}

export default App;
