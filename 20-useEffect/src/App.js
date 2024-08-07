import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [toDo, setToDo] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => setToDo(json));
  }, []);

  console.log('app rendered');

  return <div className="App">{toDo && <h1>{toDo.title}</h1>}</div>;
}

export default App;
