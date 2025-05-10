// src/AlooGobi.jsx
import React from 'react';
import './App.css';

function AlooGobi() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Aloo Gobi Recipe</h1>
      <img src="/aloo.jfif" alt="Aloo Gobi" className="recipe-image" />

      <h2>Ingredients of Aloo Gobi</h2>
      <ul>
        <li>2 cups cauliflower florets</li>
        <li>2 medium potatoes (peeled and cubed)</li>
        <li>2 tablespoons oil</li>
        <li>1 teaspoon cumin seeds</li>
        <li>1 chopped onion</li>
        <li>1 teaspoon ginger-garlic paste</li>
        <li>2 chopped tomatoes</li>
        <li>1/2 teaspoon turmeric powder</li>
        <li>1 teaspoon coriander powder</li>
        <li>1/2 teaspoon red chili powder</li>
        <li>1/2 teaspoon garam masala</li>
        <li>Salt to taste</li>
        <li>Fresh coriander leaves for garnish</li>
      </ul>

      <h2>Steps</h2>
      <ol>
        <li><strong>Heat oil:</strong> In a pan, heat oil and add cumin seeds. Let them splutter.</li>
        <li><strong>Sauté onion:</strong> Add chopped onion and sauté until golden. Add ginger-garlic paste and cook for a minute.</li>
        <li><strong>Cook tomatoes and spices:</strong> Add tomatoes, turmeric, chili powder, coriander powder, and salt. Cook until tomatoes turn soft.</li>
        <li><strong>Add potatoes and cauliflower:</strong> Mix in the cubed potatoes and cauliflower. Stir well to coat with masala.</li>
        <li><strong>Cover and cook:</strong> Cover the pan and cook on low heat for 15–20 minutes until vegetables are tender. Stir occasionally.</li>
        <li><strong>Finish:</strong> Sprinkle garam masala, mix well, garnish with coriander leaves, and serve hot with roti or rice.</li>
      </ol>
    </div>
  );
}

export default AlooGobi;