import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  function getweather() {

    const city = document.getElementById("searchbar").value;
    const apikey = "b4c12552d5790bae353de720d4edaa66";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
      .then(response => response.json())
      .then(data =>{
        const name = data.name;
        const country = data.sys.country;
        const tempe = data.main.temp;  
        const mintemp = data.main.temp_min;
        const maxtemp = data.main.temp_max;

        const weatherbox = data.weather[0];
        const weather = weatherbox.main; 
        const imageElement = document.getElementById("sunimg");
        if (weather === "Clouds"){
          imageElement.src = "clouds.png"
        }
        else if (weather === "Clear"){
          imageElement.src = "sun-solid-full.svg"
        }
        else if (weather === "Rain"){
          imageElement.src ="rain.svg"
        }
      

      document.getElementById("placename").innerHTML=`${name}`;
      document.getElementById("country").innerHTML=`Country : ${country}`;
      document.getElementById("temp").innerHTML= `${tempe}°C`;
      document.getElementById("min").innerHTML=`${mintemp} `;
      document.getElementById("max").innerHTML=`${maxtemp}`;
      
      

      })
      .catch(error =>{
        document.getElementById("placename").innerHTML=`Enter a valid location`
        document.getElementById("country").innerHTML=`country`
        document.getElementById("temp").innerHTML= `°C`;
        document.getElementById("min").innerHTML=``;
        document.getElementById("max").innerHTML=``;
      })
  }

  return (
    <>
      <div className='mainbox'>
        <div className='headimage'>

          <div className='searchbox'>
            <img className='searchicon' src='/search.svg' alt=''/>
            <input id='searchbar' type='text' placeholder='Enter country name' ></input>
            <button onClick={getweather} className='findbutton'>Find</button>
          </div>

        <div className='contentbox'>
          <div className='weather-img'>
            <img id='sunimg' src='' alt=''/>
          </div>
          <div className='weather-box'>
            <h1 id='placename'>Location</h1>
          </div>
          <div className='weather-box'>
            <div className='day'><span id='country'>Country</span> </div> 
          </div>
          <div className='weather-box'>
            <h1 id='temp'>°C</h1>
          </div>
          <p className='weather-box'>Min : <span id='min'></span> | max : <span id='max'></span></p>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default App
