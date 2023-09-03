

import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../api/lotrApi';
import CharacterFilterForm from './CharacterFilterForm';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacters();
        if (Array.isArray(data.docs)) {
          setCharacters(data.docs);
          setFilteredCharacters(data.docs);
        }
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterSubmit = ({ searchName, sortBy, filterGender, limit }) => {
    
    let filtered = characters;

    if (searchName) {
      filtered = filtered.filter((character) =>
        character.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (sortBy) {
      filtered = filtered.sort((a, b) => {
        if (sortBy === 'race') {
          return a.race.localeCompare(b.race);
        } else if (sortBy === 'gender') {
          return a.gender.localeCompare(b.gender);
        }
        return 0;
      });
    }

    if (filterGender) {
      filtered = filtered.filter((character) => character.gender === filterGender);
    }

    if (limit) {
      filtered = filtered.slice(0, limit);
    }

    setFilteredCharacters(filtered);
  };

  return (
    <div>
      <h1>Lord of the Rings Characters</h1>
      
      <CharacterFilterForm onFilterSubmit={handleFilterSubmit} />
      {filteredCharacters.map((character) => (
        <div key={character._id}>
          <p>Name: {character.name}</p>
          <p>Race: {character.race}</p>
          <p>Gender: {character.gender}</p>
         
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
