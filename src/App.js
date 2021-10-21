import './App.css';
import Grid from "./grid.js";

// All of the game logic is in grid.js
function App() {
  return (
    <div>
      <header>
        <h1 id="page-title">Connect 4</h1>
      </header>
      <div>
        <Grid></Grid>
      </div>
      <div id="instructions">
        <h4>Instructions:</h4>
        <p>One person is red and the other is yellow. When it's your turn (shown by the text under the board), click a grey square to claim it. The first player to form a horizontal or vertical line of four squares of their color wins.</p>
      </div>
    </div>
  );
}

export default App;
