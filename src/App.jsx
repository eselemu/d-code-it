import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-background">
        {/* Background image is set in CSS, no need for img tag here */}
        
        <p>LOGOS HERE</p>
        <div className="card">
          <img src={"/img/Adidas.png"} className='cardImg' alt='img' />

        </div>

        <div>
          <button className="buttonpro">
            <span> NEXT </span>
          </button>
        </div>



      </header>
    </div>
  );
}

export default App;
