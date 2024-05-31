import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
