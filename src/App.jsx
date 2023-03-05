import { useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './keys'

function App() {
  const [count, setCount] = useState(0)
  const getWeather = e => {
    const { city, country } = e.target.elements;
    const cityValue = city.value
    const countryValue = country.value

    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}`;
    e.preventDefault();
      console.log(API_URL)
  }

  return (
    <div className='container p-4'>
      <div className='row'>
        <div className="col-md-4 mx-auto">
          <WeatherForm getWeather={getWeather}/>
          <WeatherInfo/>
        </div>
      </div>
    </div>
  )
}

export default App