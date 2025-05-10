// src/DalMakhni.jsx
import React from 'react';
import './App.css';

function DalMakhni() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Dal Makhni Recipe</h1>
      <img src="/dal.jfif" alt="Dal Makhni" className="recipe-image" />

      <h2>Ingredients of Dal Makhni</h2>
      <ul>
        <li>1 cup whole black gram (sabut urad dal)</li>
        <li>2 tablespoons red kidney beans (rajma)</li>
        <li>3 cups water (for pressure cooking)</li>
        <li>1 tablespoon butter</li>
        <li>1 tablespoon oil</li>
        <li>1 teaspoon cumin seeds</li>
        <li>1 large onion (finely chopped)</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>2 tomatoes (pureed)</li>
        <li>1/2 teaspoon turmeric powder</li>
        <li>1 teaspoon red chili powder</li>
        <li>1 teaspoon coriander powder</li>
        <li>1/2 teaspoon garam masala</li>
        <li>Salt to taste</li>
        <li>1/2 cup fresh cream</li>
        <li>2 tablespoons butter (for finishing)</li>
        <li>Fresh coriander leaves for garnish</li>
      </ul>

      <h2>Steps</h2>
      <ol>
        <li><strong>Soak and pressure cook:</strong> Soak urad dal and rajma overnight. Pressure cook with water and a pinch of salt until soft (4–5 whistles or more).</li>
        <li><strong>Prepare tadka:</strong> In a pan, heat butter and oil. Add cumin seeds. Then sauté onions until golden brown.</li>
        <li><strong>Add ginger-garlic and tomatoes:</strong> Add ginger-garlic paste and sauté. Add tomato puree, turmeric, chili, and coriander powder. Cook until oil separates.</li>
        <li><strong>Combine dal and masala:</strong> Add cooked dal and rajma to the masala. Mix well and simmer for 30–40 minutes on low heat. Stir occasionally.</li>
        <li><strong>Finish:</strong> Add cream, butter, and garam masala. Stir well. Garnish with coriander and a drizzle of cream.</li>
        <li><strong>Serve:</strong> Serve hot with naan, roti, or rice.</li>
      </ol>
    </div>
  );
}

export default DalMakhni;