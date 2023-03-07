import { useEffect, useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './keys'
import axios from 'axios'

function App() {
  const [weatherData, setweatherData] = useState({})
  const [latit, setLatit] = useState(0)
  const [longi, setLongi] = useState(0)
  

  useEffect(() => {
    console.log("Bandera")
    navigator.geolocation.getCurrentPosition((position) => {
      setLatit(position.coords.latitude)
      setLongi(position.coords.longitude)

      // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
      axios
      .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latit}&lon=${longi}&appid=${WEATHER_KEY}&units=metric`)
      .then((resp) => setweatherData(resp.data))
      .catch((error) => setweatherData());
    })
  }, [])

  const getWeather = e => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value
    const countryValue = country.value
    if (cityValue && countryValue) {
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`)
        .then((resp) => setweatherData(resp.data))
        .catch((error) => setweatherData());
    } else {
      setweatherData()
      // setData2({error:"Please Enter a City and a Country"});
    }
  };

  return (
    <div className='container p-4'>
      <div className='row'>
        <div className="col-md-4 mx-auto">
          <WeatherForm getWeather={getWeather} />
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    </div>
  )
}

export default App