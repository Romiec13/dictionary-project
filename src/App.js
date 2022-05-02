import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
       📚Dictionary App
      </header>

      <main>
        <Dictionary />
      </main>
      
      <footer className='App-footer'>
        <small>
        Coded by <a href='/'>Romie Castilleja</a>
        </small>
      </footer>
      </div>
    </div>
  );
};
