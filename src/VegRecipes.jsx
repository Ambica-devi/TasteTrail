// VegRecipes.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function VegRecipes() {
  return (
    <main className="recipe-grid">

      <div className="card">
        <Link to="/PannerButterMasala">
          <img src="/paneer.jfif" alt="Paneer Butter Masala" />
        </Link>
        <p><em>Paneer Butter Masala</em></p>
        <div className="time"><span>⏱️</span> 30 mins</div>
      </div>

      <div className="card">
        <Link to="/Gulabjamun">
          <img src="/julabjam.jfif" alt="Gulab Jamun" />
        </Link>
        <p><em>Gulab Jamun</em></p>
        <div className="time"><span>⏱️</span> 30 mins</div>
      </div>

      <div className="card">
        <Link to="/FriedRice">
          <img src="/friedrice.jfif" alt="Fried Rice" />
        </Link>
        <p><em>Fried Rice</em></p>
        <div className="time"><span>⏱</span> 35 mins</div>
      </div>

      <div className="card">
        <Link to="/AlooGobi">
          <img src="/aloo.jfif" alt="Aloo Gobi" />
        </Link>
        <p><em>Aloo Gobi</em></p>
        <div className="time"><span>⏱</span> 30 mins</div>
      </div>

      <div className="card">
        <Link to="/ChannaMasala">
          <img src="/channa.jfif" alt="Channa Masala" />
        </Link>
        <p><em>Channa Masala</em></p>
        <div className="time"><span>⏱</span> 30 mins</div>
      </div>

      <div className="card">
        <Link to="/DalMakhni">
          <img src="/dal.jfif" alt="Dal Makhni" />
        </Link>
        <p><em>Dal Makhni</em></p>
        <div className="time"><span>⏱</span> 90 mins</div>
      </div>

      <div className="card">
        <Link to="/IcedTea">
          <img src="/iced.jfif" alt="Iced Tea" />
        </Link>
        <p><em>Iced Tea</em></p>
        <div className="time"><span>⏱️</span> 10 mins</div>
      </div>

    </main>
  );
}

export default VegRecipes;
