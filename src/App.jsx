import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MuttonCurry from './MuttonCurry';
import PannerButterMasala from './PannerButterMasala';
import Gulabjamun from './Gulabjamun';
import FriedRice from './FriedRice';
import AlooGobi from './AlooGobi';
import ChannaMasala from './ChannaMasala';
import DalMakhni from './DalMakhni';
import IcedTea from './IcedTea';
import ChickenCurry from './ChickenCurry';

import VegRecipes from './VegRecipes';
// Removed NonVegRecipes import
// import NonVegRecipes from './NonVegRecipes';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      alert('You have been logged out!');
    } else {
      setIsModalOpen(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsModalOpen(false);
    alert('Login successful!');
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header>
        <div className="logo">
          <img src="/logo.jfif" alt="Logo" />
        </div>
        <p className="tagline">Why wait for magic when you can cook it yourself</p>
        <button className="login-btn" onClick={handleLoginClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </header>

      {isModalOpen && (
        <div className="login-modal" onClick={closeModal}>
          <div className="login-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
              <input type="text" placeholder="Username" required /><br />
              <input type="password" placeholder="Password" required /><br />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}

      <nav className="navbar">
        <Link to="/veg">Veg</Link>
        {/* Removed Non-Veg link */}
        {/* <Link to="/non-veg">Non-Veg</Link> */}
        <a href="#">Non-Veg</a>
        <a href="#">Break-fast</a>
        <a href="#">Snacks</a>
        <a href="#">Fruit-Juices</a>
        <a href="#">Milk-Shakes</a>
      </nav>

      <main className="recipe-grid">
        <div className="card">
          <Link to="/mutton-curry">
            <img src="/mutton.jfif" alt="Mutton Curry" />
          </Link>
          <p><em>Mutton curry</em></p>
          <div className="time"><span>⏱️</span> 45 mins</div>
        </div>

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
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mutton-curry" element={<MuttonCurry />} />
      <Route path="/PannerButterMasala" element={<PannerButterMasala />} />
      <Route path="/Gulabjamun" element={<Gulabjamun />} />
      <Route path="/FriedRice" element={<FriedRice />} />
      <Route path="/AlooGobi" element={<AlooGobi />} />
      <Route path="/ChannaMasala" element={<ChannaMasala />} />
      <Route path="/DalMakhni" element={<DalMakhni />} />
      <Route path="/IcedTea" element={<IcedTea />} />
      <Route path="/ChickenCurry" element={<ChickenCurry />} />
      <Route path="/veg" element={<VegRecipes />} />
      {/* Removed Non-Veg route */}
      {/* <Route path="/non-veg" element={<NonVegRecipes />} /> */}
    </Routes>
  );
}

export default App;
