import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="blue">
        <h2>Text inside of the wrapper</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="yellow">
        <h2>Date input</h2>
        <input type="date"></input>
      </Wrapper>
    </div>
  );
}

export default App;
