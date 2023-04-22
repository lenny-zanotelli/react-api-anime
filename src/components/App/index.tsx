import ReposResults from '../ReposResults';
import SearchBar from '../SearchBar';
import Message from '../Message';
import logo from '../../assets/logo-github.png';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <img className="app__banner" src={logo} alt="logo github" />
      </header>
      <SearchBar />
      <Message />
      <ReposResults />

    </div>
  );
}

export default App;
