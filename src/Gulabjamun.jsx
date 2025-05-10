// src/GulabJamun.jsx
import React from 'react';
import './App.css';

function Gulabjamun(){
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Gulab Jamun Recipe</h1>
      <img src="/julabjam.jfif" alt="Gulab Jamun" className="recipe-image" />

      <h2>Ingredients of Gulab Jamun</h2>
      <ul>
        <li>1 cup milk powder</li>
        <li>1/4 cup all-purpose flour (maida)</li>
        <li>1/8 teaspoon baking soda</li>
        <li>2 tablespoons ghee</li>
        <li>1/4 cup milk (as needed for kneading)</li>
        <li>Oil or ghee (for deep frying)</li>
        <li><strong>For Sugar Syrup:</strong></li>
        <li>1.5 cups sugar</li>
        <li>1.5 cups water</li>
        <li>2-3 green cardamoms</li>
        <li>1/2 teaspoon rose water (optional)</li>
        <li>Saffron strands (optional)</li>
      </ul>

      <h2>Steps</h2>
      <ol>
        <li><strong>Prepare sugar syrup:</strong> Boil sugar, water, and cardamoms together until slightly sticky. Add rose water and saffron if using. Keep warm.</li>
        <li><strong>Make dough:</strong> In a bowl, mix milk powder, flour, baking soda, and ghee. Gradually add milk to form a soft, smooth dough. Let it rest for 10 minutes.</li>
        <li><strong>Shape balls:</strong> Divide dough into small, smooth balls without cracks.</li>
        <li><strong>Fry jamuns:</strong> Heat oil/ghee on low-medium flame. Fry the balls gently until golden brown evenly. Stir continuously for even color.</li>
        <li><strong>Soak in syrup:</strong> Remove and place hot jamuns into warm syrup. Let them soak for at least 1–2 hours before serving.</li>
      </ol>
    </div>
  );
}

export default Gulabjamun;