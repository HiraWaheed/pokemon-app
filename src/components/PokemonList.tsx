import React from "react";
import { useGetPokemonsQuery } from "../api/pokemon";
import { useNavigate } from "react-router-dom";

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonsQuery();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <ul>
      {data.results.map((pokemon: any) => (
        <li
          key={pokemon.name}
          onClick={() => navigate(`/pokemon/${pokemon.name}`)}
        >
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
