// ReceitasPorIngrediente.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ReceitasPorIngrediente() {
  const { ingredient } = useParams();

  const mockRecipes = [
    {
      name: 'Salada Caesar',
      ingredients: ['Alface', 'Frango', 'Croutons', 'Molho Caesar'],
      instructions: '1. Misture os ingredientes em uma tigela. 2. Sirva.'
    },
    {
      name: 'Macarrão à Carbonara',
      ingredients: ['Macarrão', 'Bacon', 'Ovos', 'Queijo'],
      instructions: '1. Cozinhe o macarrão. 2. Frite o bacon. 3. Misture os ingredientes e sirva.'
    },
    {
      name: 'Salmão Grelhado',
      ingredients: ['Salmão', 'Azeite de Oliva', 'Limão', 'Salsa'],
      instructions: '1. Tempere o salmão. 2. Grelhe o salmão. 3. Sirva.'
    },
    {
      name: 'Frango ao Curry',
      ingredients: ['Frango', 'Curry em pó', 'Creme de Leite', 'Cebola'],
      instructions: '1. Cozinhe o frango. 2. Faça o molho com cebola, curry e creme de leite. 3. Misture e sirva.'
    },
    {
      name: 'Pizza Margherita',
      ingredients: ['Massa de Pizza', 'Tomate', 'Manjericão', 'Queijo'],
      instructions: '1. Abra a massa. 2. Adicione os ingredientes. 3. Asse e sirva.'
    },
    {
      name: 'Sopa de Cenoura',
      ingredients: ['Cenoura', 'Cebola', 'Alho'],
      instructions: '1. Cozinhe a cenoura, cebola e alho. 2. Bata no liquidificador e sirva.'
    },
    {
      name: 'Batata Assada',
      ingredients: ['Batata', 'Azeite de Oliva', 'Sal', 'Pimenta'],
      instructions: '1. Tempere as batatas. 2. Asse no forno. 3. Sirva.'
    },
    {
      name: 'Frango Frito',
      ingredients: ['Frango', 'Farinha de Trigo', 'Óleo', 'Sal', 'Pimenta'],
      instructions: '1. Tempere o frango. 2. Passe na farinha de trigo. 3. Frite em óleo quente. 4. Escorra e sirva.'
    },
    {
      name: 'Lasanha de Carne',
      ingredients: ['Massa de Lasanha', 'Carne Moída', 'Queijo', 'Molho de Tomate'],
      instructions: '1. Cozinhe a massa. 2. Faça camadas de massa, carne, queijo e molho. 3. Asse no forno até dourar.'
    },
    {
      name: 'Torta de Maçã',
      ingredients: ['Maçã', 'Massa de Torta', 'Canela', 'Açúcar'],
      instructions: '1. Descasque e corte as maçãs. 2. Misture com canela e açúcar. 3. Coloque na massa de torta e asse.'
    },
    {
      name: 'Frango Grelhado',
      ingredients: ['Frango', 'Sal', 'Pimenta', 'Azeite de Oliva'],
      instructions: '1. Tempere o frango. 2. Grelhe até que esteja cozido por completo. 3. Sirva quente.'
    },
    {
      name: 'Arroz de Legumes',
      ingredients: ['Arroz', 'Cenoura', 'Ervilhas', 'Milho', 'Cebola'],
      instructions: '1. Cozinhe o arroz. 2. Misture com os legumes cozidos e a cebola refogada. 3. Sirva como acompanhamento.'
    },
    {
      name: 'Bolo de Chocolate',
      ingredients: ['Farinha de Trigo', 'Açúcar', 'Cacau em pó', 'Ovos', 'Leite'],
      instructions: '1. Misture os ingredientes. 2. Asse a massa em uma forma untada. 3. Decore com cobertura de chocolate e sirva.'
    }
  ];

  const filteredRecipes = mockRecipes.filter((recipe) =>
    recipe.ingredients.includes(ingredient)
  );

  return (
    <div>
      <h1>Receitas com {ingredient}</h1>
      <ul>
        {filteredRecipes.map((recipe, index) => (
          <li key={index}>
            <Link to={`/receita/${recipe.name}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReceitasPorIngrediente;
