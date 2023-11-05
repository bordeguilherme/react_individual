import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import IngredientesList from "./IngredientesList";
import ReceitasList from "./ReceitasList";
import ReceitasPorIngrediente from "./ReceitasPorIngrediente";
import IngredientesDaReceita from "./IngredientesDaReceita";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div className="app-container">
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Ingredientes</Link>
            </li>
            <li className="nav-item">
              <Link to="/receitas">Receitas</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <IngredientesList
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
          <Route path="/receitas" element={<ReceitasList />} />
          <Route
            path="/ingrediente/:ingredient"
            element={<ReceitasPorIngrediente />}
          />
          <Route path="/receita/:recipe" element={<IngredientesDaReceita />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
