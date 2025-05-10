// src/ChannaMasala.jsx
import React from 'react';
import './App.css';

function ChannaMasala() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Channa Masala Recipe</h1>
      <img src="/channa.jfif" alt="Channa Masala" className="recipe-image" />

      <h2>Ingredients of Channa Masala</h2>
      <ul>
        <li>1.5 cups chickpeas (soaked overnight or canned)</li>
        <li>2 tablespoons oil</li>
        <li>1 teaspoon cumin seeds</li>
        <li>1 large onion (finely chopped)</li>
        <li>1 tablespoon ginger-garlic paste</li>
        <li>2 tomatoes (pureed or finely chopped)</li>
        <li>1 teaspoon coriander powder</li>
        <li>1/2 teaspoon turmeric powder</li>
        <li>1 teaspoon garam masala</li>
        <li>1 teaspoon red chili powder</li>
        <li>1/2 teaspoon cumin powder</li>
        <li>1/2 teaspoon amchur (dry mango) powder</li>
        <li>Salt to taste</li>
        <li>Fresh coriander leaves (for garnish)</li>
        <li>Water as needed</li>
      </ul>

      <h2>Steps</h2>
      <ol>
        <li><strong>Cook chickpeas:</strong> Pressure cook soaked chickpeas with water and a pinch of salt until soft (or rinse canned chickpeas).</li>
        <li><strong>Heat oil:</strong> In a pan, heat oil and add cumin seeds. Once they splutter, add chopped onions and sauté until golden.</li>
        <li><strong>Add paste and tomatoes:</strong> Add ginger-garlic paste, sauté briefly, then add tomatoes. Cook until oil starts to separate.</li>
        <li><strong>Add spices:</strong> Mix in turmeric, chili powder, coriander powder, cumin powder, and salt. Stir well.</li>
        <li><strong>Combine chickpeas:</strong> Add cooked chickpeas and about 1 cup water. Let it simmer for 15–20 minutes on low heat.</li>
        <li><strong>Finish:</strong> Add garam masala and amchur powder. Mix and cook for 2–3 more minutes. Garnish with chopped coriander leaves.</li>
        <li><strong>Serve:</strong> Serve hot with rice, puri, or roti.</li>
      </ol>
    </div>
  );
}

export default ChannaMasala;