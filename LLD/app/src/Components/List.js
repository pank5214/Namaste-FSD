import React, { useState, useEffect } from 'react';
import { List } from 'react-virtualized';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1510');
        const data = await response.json();
        setPokemonData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemon();
  }, []);

  const rowRenderer = ({ key, index, style }) => {
    return (
      <div key={key} style={style}>
        {pokemonData[index].name}
      </div>
    );
  };

  return (
    <div className='mt-10 flex justify-center text-lg font-semibold'>
    <List
      width={300}
      height={600}
      rowCount={pokemonData.length}
      rowHeight={50}
      rowRenderer={rowRenderer}
      />
      </div>
  );
};

export default PokemonList;
