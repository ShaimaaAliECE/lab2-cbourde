import logo from './logo.svg';
import './App.css';
import Grid from "./grid.js";

function App() {
  return (
    <div>
      <header>
        <h1 id="page-title">Connect 4</h1>
      </header>
      <div>
        <Grid></Grid>
      </div>      
    </div>
  );
}

export default App;
