// src/IcedTea.jsx
import React from 'react';
import './App.css';

function IcedTea() {
  return (
    <div className="recipe-container">
      <h1 className="recipe-title">Iced Tea Recipe</h1>
      <img src="/iced.jfif" alt="Iced Tea" className="recipe-image" />

      <h2>Ingredients of Iced Tea</h2>
      <ul>
        <li>4 cups water</li>
        <li>3–4 black tea bags (or green tea bags)</li>
        <li>1/4 cup sugar (adjust to taste)</li>
        <li>1 tablespoon lemon juice</li>
        <li>Ice cubes (as needed)</li>
        <li>Mint leaves (for garnish)</li>
        <li>Lemon slices (for garnish)</li>
      </ul>

      <h2>Steps</h2>
      <ol>
        <li><strong>Boil water:</strong> In a saucepan, bring 4 cups of water to a boil.</li>
        <li><strong>Steep tea:</strong> Turn off the heat, add tea bags, and let them steep for 5–7 minutes (longer for stronger flavor).</li>
        <li><strong>Sweeten:</strong> Remove tea bags, add sugar while the tea is hot, and stir until dissolved. Let it cool to room temperature.</li>
        <li><strong>Add lemon:</strong> Stir in lemon juice and refrigerate the tea for 1–2 hours.</li>
        <li><strong>Serve:</strong> Pour over a glass filled with ice cubes. Garnish with mint leaves and lemon slices.</li>
      </ol>
    </div>
  );
}

export default IcedTea;