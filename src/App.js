import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import CharacterGrid from './components/Characters/CharacterGrid';
import Search from './components/Search/Search';

const BREAKING_BAD_BASE_URL = "https://www.breakingbadapi.com/api";

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`${BREAKING_BAD_BASE_URL}/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search handleQuery={(val) => setQuery(val)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
