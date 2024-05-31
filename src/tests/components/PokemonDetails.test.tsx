import React from "react";
import { render, screen } from "@testing-library/react";
import { useGetPokemonByIdQuery } from "../../api/pokemon";
import PokemonDetails from "../../components/PokemonDetails";
import { useParams } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

jest.mock("../../api/pokemon", () => ({
  useGetPokemonByIdQuery: jest.fn(),
}));

describe("PokemonDetails", () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: "1" });
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: {
        id: 1,
        name: "Pikachu",
        sprites: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
      },
      isLoading: false,
      isError: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Pokemon details correctly", () => {
    render(<PokemonDetails />);

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByAltText("Pikachu")).toBeInTheDocument();
  });

  it("displays a loading message while fetching data", () => {
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(<PokemonDetails />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays an error message if there is an error fetching data", () => {
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<PokemonDetails />);

    expect(screen.getByText("Error loading data")).toBeInTheDocument();
  });
});
