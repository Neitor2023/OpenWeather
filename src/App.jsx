import { useEffect, useState } from 'react';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { WEATHER_KEY } from './keys'
import axios from 'axios'

function App() {
  const [weatherData, setweatherData] = useState({})
  // const [isMetricImperial, setIsMetricImperial] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      axios
      .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${WEATHER_KEY}&units=metric`)
      .then((resp) => setweatherData(resp.data))
      .catch((error) => setweatherData());
    })
  }, [])
  // console.error(error)
  const getWeather = e => {
    e.preventDefault();
        const [isMetricImperial, setIsMetricImperial] = useState();

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
          {/* <button onClick={() => setIsMetricImperial(!isMetricImperial)} className="bnt_weather">Switch to °</button> */}
        </div>
      </div>
    </div>
  )
}

export default App