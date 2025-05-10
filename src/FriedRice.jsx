// src/FriedRice.jsx
import React from 'react';
import './App.css';

function FriedRice() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Fried Rice Recipe</h1>
      <img src="/friedrice.jfif" alt="Fried Rice" className="recipe-image" />

      <h2>Ingredients of Fried Rice</h2>
      <ul>
        <li>2 cups cooked rice (preferably cold)</li>
        <li>1 tablespoon oil (vegetable or sesame)</li>
        <li>2 garlic cloves (finely chopped)</li>
        <li>1/2 cup chopped carrots</li>
        <li>1/2 cup chopped beans</li>
        <li>1/2 cup chopped capsicum</li>
        <li>1/4 cup spring onions (chopped)</li>
        <li>2 tablespoons soy sauce</li>
        <li>1 tablespoon vinegar</li>
        <li>1/2 teaspoon black pepper</li>
        <li>Salt to taste</li>
        <li>Optional: 1/2 cup scrambled eggs or paneer or tofu (for variation)</li>
      </ul>

      <h2>Steps</h2>
      <ol>
        <li><strong>Heat oil:</strong> In a large pan or wok, heat oil over medium-high heat. Add chopped garlic and sauté for a few seconds.</li>
        <li><strong>Stir-fry vegetables:</strong> Add carrots, beans, capsicum, and other veggies. Stir-fry for 2–3 minutes on high heat until slightly tender yet crunchy.</li>
        <li><strong>Add rice and sauces:</strong> Add the cooked rice, soy sauce, vinegar, black pepper, and salt. Mix well to combine all ingredients evenly.</li>
        <li><strong>Add proteins (optional):</strong> Add scrambled eggs, paneer, or tofu for variation and stir well.</li>
        <li><strong>Finish and serve:</strong> Garnish with spring onions. Serve hot with a side of Manchurian or curry.</li>
      </ol>
    </div>
  );
}

export default FriedRice;