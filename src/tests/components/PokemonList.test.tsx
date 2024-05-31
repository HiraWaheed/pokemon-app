import React from "react";
import { render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { useGetPokemonsQuery } from "../../api/pokemon";
import PokemonList from "../../components/PokemonList";
import { PokemonDetail, PokemonListResponse } from "../constants";

jest.mock("../../api/pokemon");
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("PokemonList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state when data is loading", () => {
    (useGetPokemonsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    render(<PokemonList />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders error state when there is an error", () => {
    (useGetPokemonsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: "Error loading data",
      isLoading: false,
    });

    render(<PokemonList />);

    expect(screen.getByText("Error loading data")).toBeInTheDocument();
  });

  it("renders list of pokemons when data is available", () => {
    const mockData = {
      results: PokemonListResponse,
    };

    (useGetPokemonsQuery as jest.Mock).mockReturnValue({
      data: mockData,
      error: undefined,
      isLoading: false,
    });

    render(<PokemonList />);

    expect(screen.getByText("pokemon1")).toBeInTheDocument();
    expect(screen.getByText("pokemon2")).toBeInTheDocument();
    expect(screen.getByText("pokemon3")).toBeInTheDocument();
  });

  it("navigates to the correct pokemon detail page when a pokemon is clicked", () => {
    const mockData = {
      results: PokemonDetail,
    };

    (useGetPokemonsQuery as jest.Mock).mockReturnValue({
      data: mockData,
      error: undefined,
      isLoading: false,
    });

    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<PokemonList />);

    const pokemonItem = screen.getByText("pokemon1");
    pokemonItem.click();

    expect(mockNavigate).toHaveBeenCalledWith("/pokemon/pokemon1");
  });
});
