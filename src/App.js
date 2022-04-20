import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class = 'column'>
        <div class = 'row1'> 
            <p>
              <img src="https://img.icons8.com/windows/32/000000/settings-system-daydream.png"/>
              <img src="https://img.icons8.com/material-outlined/24/000000/like--v1.png"/>
              Muse
              <img src="https://img.icons8.com/material-outlined/24/000000/high-connection.png"/>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/ask-question.png"/>
              
            </p>
        </div>
        <div class = 'row2'>
            <div class ='songname'>          
              <div class = "choice"></div>
              <div class = "choice"></div>
              <div class = "choice"></div>
              <div class = "choice"></div>
            </div>
        </div>
        <div class = 'row3'>
          <audio controls>
            <source src="http://localhost:3000/ImpactModerato.mp3" type="audio/mp3" />
          </audio><br></br>
          <input type="text"></input><br></br>
          <input type="button"></input> 
          <input type='button'></input>
        </div>
    </div>
  );
}

export default App;
