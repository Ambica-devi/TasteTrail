// src/PaneerButterMasala.jsx
import React from 'react';
import './App.css';

function PaneerButterMasala() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Paneer Butter Masala Recipe</h1>
      <img src="/paneer.jfif" alt="Paneer Butter Masala" className="recipe-image" />

      <h2>Ingredients of Paneer Butter Masala</h2>
      <ul>
        <li>250 grams paneer (cottage cheese)</li>
        <li>2 tablespoons butter</li>
        <li>1 tablespoon oil</li>
        <li>1 bay leaf</li>
        <li>1/2 inch cinnamon stick</li>
        <li>2 green cardamoms</li>
        <li>3 cloves</li>
        <li>1 cup chopped onions</li>
        <li>1 teaspoon ginger-garlic paste</li>
        <li>1 cup tomato puree</li>
        <li>1/2 teaspoon turmeric powder</li>
        <li>1 teaspoon red chili powder</li>
        <li>1 teaspoon coriander powder</li>
        <li>1/2 teaspoon garam masala</li>
        <li>1/2 teaspoon sugar</li>
        <li>Salt to taste</li>
        <li>1/2 cup fresh cream</li>
        <li>Fresh coriander leaves for garnish</li>
        <li><strong>Optional:</strong> Kasuri methi (dried fenugreek leaves), for flavor</li>
      </ul>

      <h2>Steps</h2>
      <ol>
        <li><strong>Heat butter and spices:</strong> In a pan, heat butter and oil. Add bay leaf, cinnamon, cardamom, and cloves. Sauté for a few seconds.</li>
        <li><strong>Cook onions:</strong> Add chopped onions and cook until golden brown. Add ginger-garlic paste and sauté.</li>
        <li><strong>Tomato base:</strong> Add tomato puree and cook until oil separates. Add turmeric, chili powder, coriander powder, and salt. Cook well.</li>
        <li><strong>Add paneer:</strong> Add cubed paneer pieces and mix gently. Let it simmer for a few minutes.</li>
        <li><strong>Finish with cream:</strong> Add cream, garam masala, and sugar. Mix well and cook on low flame. Garnish with coriander and serve hot.</li>
      </ol>
    </div>
  );
}

export default PaneerButterMasala;