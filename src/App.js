import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <h1 className="header">Dictionary App</h1>
    
      <main className="container">
        <Dictionary defaultValue="Book" />
      <footer className='App-footer'>
        <small>
        💻Coded by <a href='https://romiecastilleja.netlify.app/' className="footer-link">Romie Castilleja</a> and is <a href="https://github.com/Romiec13/dictionary-project" className="footer-link">open-sourced</a> on Github.
        </small>
      </footer>
      </main>
      
      </div>
        );
};
