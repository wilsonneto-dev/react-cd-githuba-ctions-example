import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React + CI/CD + Github Actions + Azure Blob Storage:<br />
          Bora fazer um pipeline de deploy com GH Actions?
        </p>
        <p>
          Deploy automático rolando!! v2
        </p>
      </header>
    </div>
  );
}

export default App;
