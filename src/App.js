import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1 className="header">Dictionary App</h1>
    
      <main className="container">
        <Dictionary defaultValue="Book" />
      <footer className='App-footer'>
        <small>
        💻Coded by <a href='/' className="footer-link">Romie Castilleja</a> and is <a href="/" className="footer-link">open-sourced</a> on Github.
        </small>
      </footer>
      </main>
      
      </div>
        );
};
