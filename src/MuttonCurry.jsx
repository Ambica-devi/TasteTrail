// src/MuttonCurry.jsx
import React from 'react';
import './App.css';

function MuttonCurry() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Mutton Curry Recipe</h1>
      <img src="/mutton.jfif" alt="Mutton Curry" className="recipe-image" />

      <h2>Ingredients of Mutton Curry</h2>
      <ul>
        <li>1 kilogram mutton</li>
        <li>1 teaspoon garlic</li>
        <li>1 teaspoon cumin powder</li>
        <li>Salt as required</li>
        <li>1 teaspoon garam masala powder</li>
        <li>1/4 cup ghee</li>
        <li>2 bay leaf</li>
        <li>2 black cardamom</li>
        <li>2 teaspoon turmeric</li>
        <li>1 cup chopped onion</li>
        <li>2 teaspoon ginger</li>
        <li>3 teaspoon coriander powder</li>
        <li>1 teaspoon black pepper</li>
        <li>1/4 cup virgin olive oil</li>
        <li>1 inch cinnamon</li>
        <li>4 cloves</li>
        <li>2 green cardamom</li>
        <li><strong>For Marination:</strong></li>
        <li>1 teaspoon ginger paste</li>
        <li>4 teaspoon yoghurt (curd)</li>
        <li>2 teaspoon virgin olive oil</li>
        <li>1 teaspoon garlic paste</li>
        <li>1 teaspoon salt</li>
        <li>1/2 teaspoon turmeric</li>
      </ul>

      <h2>Steps</h2>
      <ol>
        <li><strong>Wash the mutton and marinate:</strong> Wash the mutton pieces (chopped into cubes)...</li>
        <li><strong>Cook the masala:</strong> Take a heavy-bottomed pan and heat...</li>
        <li><strong>Saute the onions:</strong> Add the chopped onions and cook on low flame...</li>
        <li><strong>Add the marinated meat and cook:</strong> Add the marinated mutton and cook on high flame...</li>
        <li><strong>Cover and cook:</strong> Lower the flame and simmer until done. Add final spices and serve.</li>
      </ol>
    </div>
  );
}

export default MuttonCurry;
