import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function IngredientesList({ searchTerm, setSearchTerm }) {
  const mockIngredients = [
    "Cenoura",
    "Batata",
    "Tomate",
    "Alface",
    "Brócolis",
    "Abobrinha",
    "Pepino",
    "Frango",
    "Carne de Vaca",
    "Peixe",
    "Camarão",
    "Linguiça",
    "Bacon",
    "Ovos",
    "Macarrão",
    "Arroz",
    "Pão",
    "Queijo",
    "Molho de Tomate",
    "Molho de Pimenta",
    "Cebola",
    "Alho",
    "Salsa",
    "Manjericão",
    "Limão",
    "Laranja",
    "Maçã",
    "Banana",
    "Morango",
    "Abacaxi",
    "Kiwi",
    "Coco",
    "Café",
    "Chá",
    "Leite",
    "Iogurte",
    "Azeite de Oliva",
    "Manteiga",
    "Mel",
    "Açúcar",
    "Sal",
    "Pimenta",
    "Canela",
    "Farinha de Trigo",
    "Óleo",
    "Massa de Lasanha",
    "Massa de Torta",
    "Sal",
    "Pimenta",
    "Cacau em pó",
  ];

  const filteredIngredients = mockIngredients.filter((ingredient) =>
    ingredient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ingredient-list-container">
      <h1>Ingredientes</h1>
      <input
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquisar ingredientes"
      />
      <div>
        <h2>Ingredientes Variados</h2>
        <ul className="ingredient-ul">
          {filteredIngredients.map((ingredient, index) => (
            <li key={index} className="ingredient-li">
              <Link
                to={`/ingrediente/${ingredient}`}
                className="ingredient-link"
              >
                {ingredient}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default IngredientesList;
