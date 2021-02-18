import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBird, incrementBird } from '../src/store/birds/Birds';
import './App.css';

function App() {
  const [birdName, setBird] = useState('');
  const birds = [...useSelector(state => state.birds)].sort((a,b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  const dispatch = useDispatch();

//{useSelector} hook accesses the elements inside the components
// displaying a <ul> by looping over the birds array with map()
// returning a new <li> item for each, and using bird.name as a key

const handleSubmit = event => {
  event.preventDefault();
  dispatch(addBird(birdName))
  setBird('');
};

  return (
    <div className="wrapper">
      <h1>🐦Bird List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            Add New 🐦
          </p>
          <input 
          type="text"
          onChange={e => setBird(e.target.value)}
          value={birdName}
          />
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {birds.map(bird => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
              <div>
                Views: {bird.views}
                <button onClick={() => dispatch(incrementBird(bird.name))}><span role="img" aria-label="add">➕</span></button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;