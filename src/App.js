import SearchBar from './components/SearchBar';
import './App.css';
import searchImages from './api';

function App() {

  const handleSubmit = (term) => {
    searchImages(term);
  }

  return (
    <div>
      <form>
      <SearchBar onSubmit={handleSubmit}/>
      </form>
    </div>
    
  );
}

export default App;
