// src/App.js

import React from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import CharacterFilterForm from './components/CharacterFilterForm';
function App() {
  return (
    <div>
      <h1>Lord of the Rings Characters</h1>
      <CharacterList />
      <CharacterDetails />
      <CharacterFilterForm/>
    </div>
  );
}

export default App;
