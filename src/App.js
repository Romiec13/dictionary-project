import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1 className="header">Dictionary App</h1>
      <div className='container'>
      <main className="container">
        <Dictionary defaultValue="magic" />
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
