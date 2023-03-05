import { useEffect, useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './keys'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const getWeather = async e => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value
    const countryValue = country.value
    
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
    
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log(data)
    console.log(API_URL)
    console.log(state)

    // useState({
        // country: data.sys.country,
        // city: data.main.name
        // temperature: data.main.temp,
        // description: data.weather[0].description,
        // humidity: data.main.humidity,
        // wind_speed: data.wind.speed,
        // error: null
      // });
//     useEffect(() => {
//       axios
//       .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}`)
//       .then((resp) => resp.data)
//       console.log(resp.data)
//       .catch((error) => console.error(error));
//     }, []);
}

  
  return (
    <div className='container p-4'>
      <div className='row'>
        <div className="col-md-4 mx-auto">
          <WeatherForm/>
          <WeatherInfo/>
        </div>
      </div>
    </div>
  )
}

export default App