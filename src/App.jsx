import React, { useState } from 'react';
import './App.css';

let logos = [
  {
    "name": "Adidas",
    "coded": [108371, 983366]
  },
  {
    "name": "Netflix",
    "coded": [459265, 15452, 729124]
  },
  {
    "name": "Nike",
    "coded": [459265, 825072]
  },
  {
    "name": "Facebook",
    "coded": [375840, 727349, 931202]
  },
  {
    "name": "Levis",
    "coded": [267981, 781762]
  },
  {
    "name": "Mcdonalds",
    "coded": [275956, 317579, 542339]
  },
  {
    "name": "Air Jordan",
    "coded": [655658, 1003511, 170955]
  },
  {
    "name": "Pringles",
    "coded": [491517, 733172, 404188]
  },
  {
    "name": "Youtube",
    "coded": [100960, 699798, 826222]
  },
  {
    "name": "CocaCola",
    "coded": [690618, 266591, 815972]
  },
  {
    "name": "TikTok",
    "coded": [600641, 731325]
  },
  {
    "name": "Amazon",
    "coded": [63231, 661751]
  },
  {
    "name": "Twitter",
    "coded": [242203, 880114, 363530]
  },
  {
    "name": "Sony",
    "coded": [528695, 318491]
  },
  {
    "name": "Burger King",
    "coded": [1, 526184, 496910, 733172]
  },
  {
    "name": "Red Bull",
    "coded": [160905, 640676, 743621]
  },
  {
    "name": "BMW",
    "coded": [1010027]
  },
  {
    "name": "Android",
    "coded": [0, 69311, 207642]
  },
  {
    "name": "Starbucks",
    "coded": [352954, 289707, 495626]
  },
  {
    "name": "Mercedes",
    "coded": [225284, 88837, 445239]
  },
  {
    "name": "Calvin Klein",
    "coded": [658168, 548173, 884862, 966909]
  },
  {
    "name": "Barbie",
    "coded": [557517, 285640]
  },
  {
    "name": "Monster",
    "coded": [537261, 289670, 363530]
  },
  {
    "name": "MTV",
    "coded": [969540]
  },
  {
    "name": "Bimbo",
    "coded": [672744, 7082]
  },
  {
    "name": "Cuidado con el perro",
    "coded": [169670, 84214, 260340, 435659, 513735, 54098]
  },
  {
    "name": "Grupo modelo",
    "coded": [656139, 378369, 978932, 913809]
  },
  {
    "name": "Cemex",
    "coded": [391696, 61018]
  },
  {
    "name": "Maseca",
    "coded": [446797, 862386]
  },
  {
    "name": "America Movil",
    "coded": [225284, 44484, 792190, 415255]
  },
  {
    "name": "Telcel",
    "coded": [446797, 862386]
  },
  {
    "name": "Jumex",
    "coded": [225284, 44484, 792190, 415255]
  },
  {
    "name": "Pemex",
    "coded": [142166, 493460]
  },
  {
    "name": "Claro",
    "coded": [919969, 61018]
  },
  {
    "name": "Corona",
    "coded": [553787, 61018]
  },
  {
    "name": "Telmex",
    "coded": [43270, 1013202]
  },
  {
    "name": "Bodega Aurrera",
    "coded": [583361, 317579]
  },
  {
    "name": "Oxxo",
    "coded": [142166, 61018]
  },
  {
    "name": "Gamesa",
    "coded": [1, 20370, 444429, 827775, 182826]
  },
  {
    "name": "Orbia",
    "coded": [756202, 65927]
  },
  {
    "name": "Televisa",
    "coded": [352495, 47273]
  },
  {
    "name": "Mastercard",
    "coded": [833622, 643670]
  },
  {
    "name": "Visa",
    "coded": [664737, 927931, 918747]
  },
  {
    "name": "Instagram",
    "coded": [537261, 603742, 142389, 392388]
  },
  {
    "name": "Superman",
    "coded": [125087, 918747]
  },
  {
    "name": "Dominos pizza",
    "coded": [83754, 896878, 615982]
  },
  {
    "name": "Beats",
    "coded": [949809, 711636, 285460]
  },
  {
    "name": "Rolex",
    "coded": [786375, 821005, 874135, 502930]
  },
  {
    "name": "NBA",
    "coded": [106489, 706962]
  },
  {
    "name": "Bose",
    "coded": [1013202, 723047]
  },
  {
    "name": "Skype",
    "coded": [837097]
  },
  {
    "name": "Pizza hut",
    "coded": [1, 33913]
  },
  {
    "name": "Tinder",
    "coded": [129996, 706819]
  },
  {
    "name": "Converse",
    "coded": [3540, 502930, 165403]
  },
  {
    "name": "Dodge",
    "coded": [919867, 586664]
  },
  {
    "name": "Foot_locker",
    "coded": [690618, 186736, 576633]
  },
  {
    "name": "Alfa_Romeo",
    "coded": [693060, 267184]
  },
  {
    "name": "Avis",
    "coded": [660815, 682115, 310459, 667721]
  },
  {
    "name": "Nvidia",
    "coded": [836562, 1013202, 338676]
  }
];


function App() {
  const [logoIndex, setLogoIndex] = useState(0);
  const [shText, setText] = useState("")

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
          <img src={"/img/" + logos[logoIndex % logos.length].name + ".png"} className='cardImg' alt='img' />

        </div>
        <div className='txt'>
          <h1>{logos[logoIndex % logos.length].coded.join('')}</h1>
        </div>

        <div>
          <button className="buttonpro" onClick={handleClick}>
            <span> NEXT </span>
          </button>
        </div>

        <div>
          <button className="buttonpro" onClick={handleClick}>
            <span> DECODE </span>
          </button>
        </div>



      </header>
    </div>
  );
}

export default App;
