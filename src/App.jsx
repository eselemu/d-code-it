import React, { useState } from 'react';
import './App.css';

let logos = [
  "Adidas",
  "Air Jordan",
  "Alfa_Romeo",
  "Amazon",
  "America Movil",
  "Android",
  "Avis",
  "Barbie",
  "Beats",
  "Bimbo",
  "BMW",
  "Bodega Aurrera",
  "Bose",
  "Burger King",
  "Calvin Klein",
  "Cemex",
  "Claro",
  "Coca Cola",
  "Converse",
  "Corona",
  "Cuidado con el perro",
  "Dodge",
  "Dominos Pizza",
  "Facebook",
  "Foot_Locker",
  "Gamesa",
  "Grupo Modelo",
  "Instagram",
  "Jumex",
  "Levis",
  "Maseca",
  "Mastercard",
  "Mcdonalds",
  "Mercedes",
  "Monster",
  "MTV",
  "NBA",
  "Netflix",
  "Nike",
  "Orbia",
  "Oxxo",
  "Pemex",
  "Pizza Hut",
  "Pringles",
  "Red Bulls",
  "Rolex",
  "Skype",
  "Starbucks",
  "Superman",
  "Telcel",
  "Televisa",
  "Telmex",
  "Tiktok",
  "Tinder",
  "Twitter",
  "Visa",
  "Youtube"
];


function App() {
  const [logoIndex, setLogoIndex] = useState(0);

  function handleClick(event) {
		event.preventDefault();
    setLogoIndex(logoIndex + 1);
	}
  return (
    <div className="App">
      <header className="App-background">
        {/* Background image is set in CSS, no need for img tag here */}
        
        <p>LOGOS HERE</p>
        <div className="card">
          <img src={"/img/" + logos[logoIndex % logos.length] + ".png"} className='cardImg' alt='img' />
        </div>

        <div>
          <button className="buttonpro" onClick={handleClick}>
            <span> NEXT </span>
          </button>
        </div>



      </header>
    </div>
  );
}

export default App;
