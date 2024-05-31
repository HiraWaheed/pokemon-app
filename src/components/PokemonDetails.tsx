import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../api/pokemon";

const PokemonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useGetPokemonByIdQuery(id || "");

  if (!id) {
    return <div>No ID provided</div>;
  }
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading data</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
};

export default PokemonDetails;
