// src/ChickenCurry.jsx
import React from 'react';
import './App.css';

function ChickenCurry() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Chicken Curry Recipe</h1>
      <img src="/chicken.jfif" alt="Chicken Curry" className="recipe-image" />

      <h2>Ingredients of Chicken Curry</h2>
      <ul>
        <li>500 grams chicken (bone-in or boneless)</li>
        <li>2 tablespoons oil</li>
        <li>1 bay leaf</li>
        <li>1 teaspoon cumin seeds</li>
        <li>1 large onion (finely chopped)</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>2 tomatoes (pureed or finely chopped)</li>
        <li>1/2 teaspoon turmeric powder</li>
        <li>1 teaspoon red chili powder</li>
        <li>1 teaspoon coriander powder</li>
        <li>1/2 teaspoon garam masala</li>
        <li>1/2 teaspoon black pepper</li>
        <li>Salt to taste</li>
        <li>Fresh coriander leaves for garnish</li>
        <li><strong>For Marination:</strong></li>
        <li>1/2 cup yogurt</li>
        <li>1 teaspoon ginger-garlic paste</li>
        <li>1/2 teaspoon turmeric</li>
        <li>1 teaspoon red chili powder</li>
        <li>Salt to taste</li>
      </ul>

      <h2>Steps</h2>
      <ol>
        <li><strong>Marinate chicken:</strong> In a bowl, mix chicken with yogurt, ginger-garlic paste, turmeric, chili powder, and salt. Let it marinate for at least 30 minutes.</li>
        <li><strong>Sauté onions:</strong> Heat oil in a pan, add cumin seeds and bay leaf. Then add onions and cook until golden brown.</li>
        <li><strong>Cook tomatoes:</strong> Add ginger-garlic paste and sauté, then add tomatoes. Cook until soft and oil starts to separate.</li>
        <li><strong>Add spices:</strong> Add turmeric, chili powder, coriander powder, and black pepper. Stir well.</li>
        <li><strong>Add chicken:</strong> Add marinated chicken, mix well with the masala. Cook on high flame for 5 minutes.</li>
        <li><strong>Simmer:</strong> Add water as needed, cover, and cook on low flame until chicken is tender and curry thickens.</li>
        <li><strong>Finish:</strong> Add garam masala and garnish with fresh coriander. Serve hot with rice or roti.</li>
      </ol>
    </div>
  );
}

export default ChickenCurry;