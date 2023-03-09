import { useEffect, useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './keys'
import axios from 'axios'

function App() {
  const [weatherData, setweatherData] = useState({})
  const [isCoords, setIsCoords] = useState(true)
  const [isPais, setIsPais] = useState(false)
  // let coords = true
  // const [isMetricImperial, setIsMetricImperial] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // coords = true
      axios
      .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_KEY}&units=metric`)
      .then((resp) => setweatherData(resp.data))
      .catch((error) => console.error("Msj Error", error));
    })
  }, [])
  // console.error(error)
  const getWeather = e => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value
    const countryValue = country.value
    if (cityValue && countryValue) {
      
      setIsCoords(false)
      setIsPais(true)
      // coords = false
      axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`)
        .then((resp) => setweatherData(resp.data))
        .catch((error) => console.error("Msj Error", error));
    } else {
      // setweatherData()
      // setData2({error:"Please Enter a City and a Country"});
    }
  };

  return (
    <div className='container p-4'>
      <div className='row'>
        <div className="col-md-4 mx-auto">
          <WeatherForm getWeather={getWeather} />
          <WeatherInfo data={weatherData} coordsProps={isCoords} paisProps={isPais}/>
        </div>
      </div>
    </div>
  )
}

export default App