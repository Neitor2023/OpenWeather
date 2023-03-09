import { useState } from 'react';

const svgNumb = [9, "thunderstorm with light rain",
    9, "thunderstorm with rain",
    9, "thunderstorm with heavy rain",
    9, "light thunderstorm",
    9, "thunderstorm",
    9, "heavy thunderstorm",
    9, "ragged thunderstorm",
    9, "thunderstorm with light drizzle",
    9, "thunderstorm with drizzle",
    9, "thunderstorm with heavy drizzle",
    6, "light intensity drizzle",
    6, "drizzle",
    6, "heavy intensity drizzle",
    6, "light intensity drizzle rain",
    6, "drizzle rain",
    6, "heavy intensity drizzle rain",
    6, "shower rain and drizzle",
    6, "heavy shower rain and drizzle",
    6, "shower drizzle",
    6, "light rain",
    6, "moderate rain",
    5, "heavy intensity rain",
    5, "very heavy rain",
    5, "extreme rain",
    5, "freezing rain",
    5, "light intensity shower rain",
    5, "shower rain",
    5, "heavy intensity shower rain",
    5, "ragged shower rain",
    7, "light snow",
    7, "snow",
    7, "heavy snow",
    7, "sleet",
    7, "light shower sleet",
    7, "shower sleet",
    7, "light rain and snow",
    7, "rain and snow",
    7, "light shower snow",
    7, "shower snow",
    7, "heavy shower snow",
    8, "mist",
    8, "smoke",
    8, "haze",
    8, "sand/dust whirls",
    8, "fog",
    8, "sand",
    8, "dust",
    8, "volcanic ash",
    8, "squalls",
    8, "tornado",
    1, "clear sky",
    2, "few clouds",
    3, "scattered clouds",
    4, "broken clouds",
    4, "overcast clouds"]

const WeatherInfo = ({ data, coordsProps, paisProps }) => {
    const [isMetricImperial, setIsMetricImperial] = useState();
    return (
        <div className="card_weather">
            {coordsProps && <div className='div_temp'>
                <p>{isMetricImperial ? (data.current?.temp).toFixed(0) : ((data.current?.temp * 9 / 5) + 32).toFixed(0)}{isMetricImperial ? " °C" : " °F"}</p>
            </div>}
            {coordsProps && <div className='div_icono'>
                <img className='icono_weather' src={`./w/${svgNumb[svgNumb.indexOf(data.current?.weather?.[0].description) - 1]}.svg`} alt="" />
            </div>}
            {coordsProps && <div className='div_detail'>
                <ul className='ul_detail'>
                    <li><span>Wind: </span>{data.current?.wind_speed}</li>
                    <li><span>Pressure: </span>{data.current?.pressure}</li>
                    <li><span>Humidity: </span>{data.current?.humidity}</li>
                </ul>
            </div>}
            {coordsProps && <div className='div_other'>
                <ul className='ul_detail'>
                    <li><span>Latitude: </span>{(data.lat)}</li>
                    <li><span>Longitude: </span>{(data.lon)}</li>
                </ul>
            </div>}
            {coordsProps && <div className='div_location'>
                <span>{data.timezone}</span>
            </div>}
            {coordsProps && <div className='div_descrip'>
                <span>Clouds: {data.current?.weather?.[0].description}</span>
            </div>}

            {paisProps && <div className='div_temp'>
                <p>{isMetricImperial ? (data.main?.temp).toFixed(0) : ((data.main?.temp * 9 / 5) + 32).toFixed(0)}{isMetricImperial ? " °C" : " °F"}</p>
            </div>}
            {paisProps && <div className='div_icono'>
                <img className='icono_weather' src={`./w/${svgNumb[svgNumb.indexOf(data.weather?.[0].description) - 1]}.svg`} alt="" />
            </div>}
            {paisProps && <div className='div_detail'>
                <ul className='ul_detail'>
                    <li><span>Wind: </span>{data.wind?.speed}</li>
                    <li><span>Wind Speed: </span>{data.wind?.speed}</li>
                    <li><span>Humidity: </span>{data.main?.humidity}</li>
                </ul>
            </div>}
            {paisProps && <div className='div_other'>
                <ul className='ul_detail'>
                    <li><span>Latitude: </span>{(data.coord?.lat)}</li>
                    <li><span>Longitude: </span>{(data.coord?.lon)}</li>
                </ul>
            </div>}
            {paisProps && <div className='div_location'>
                <span>{data.name} {data.sys?.country}</span>
            </div>}
            {paisProps && <div className='div_descrip'>
                <span>{data.weather?.[0].description}</span>
            </div>}
            <button onClick={() => setIsMetricImperial(!isMetricImperial)} className="bnt_weather">Switch to °{isMetricImperial ? "F" : "C"}</button>
        </div>
    )
}

export default WeatherInfo