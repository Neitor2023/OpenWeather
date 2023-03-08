import { useState } from 'react';
// const [fahrenheit, setFahrenheit] = useState(0)
// const [isFahrenheit, setIsFahrenheit] = useState(false)

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

const WeatherInfo = ({ data }) => {
    const [isMetricImperial, setIsMetricImperial] = useState();
    return (
        <div className="card_weather">
            {/* card card-body */}
            {<div>
                <p><span> </span></p><br />
                <p><span> </span></p><br />
                <p><span> </span></p><br />
                <p><span> </span></p><br />
            </div>},
            {data.lat && <div>
                <p className='temp'>{isMetricImperial ? data.current?.temp :((data.current?.temp * 9/5 ) + 32).toFixed(2)}{isMetricImperial ? " °C":" °F"}</p>
                <img src={`./w/${svgNumb[svgNumb.indexOf(data.current?.weather?.[0].description) - 1]}.svg`} alt="" width="50px"/>
                {/* {width: 50px; height: 50px;} */}
                <p><span>Current Weather: </span>{data.current?.weather?.[0].description}</p><br />
                <p><span>Time Latitude: </span>{data.lat}</p><br />
                <p><span>Time Longitude: </span>{data.lon}</p><br />
                <p><span>Current Pressure: </span>{data.current?.pressure}</p><br />
                <p><span>Current Humidity: </span>{data.current?.humidity}</p><br />
                <p><span>Current Wind Speed: </span>{data.current?.wind_speed}</p><br />
            </div>},
            {data.name && <div>
                <img src={`./w/${svgNumb[svgNumb.indexOf(data.weather?.[0].description) - 1]}.svg`} alt="" />
                <p><span>Coutry: </span>{data.name}</p><br />
                <p><span>Temperature: </span> {data.weather?.[0].description} {isMetricImperial ? data.main?.temp :((data.main?.temp * 9/5 ) + 32).toFixed(2)}{isMetricImperial ? " °C":" °F"}</p><br />
                <p><span>Humidity: </span>{data.main?.humidity}</p><br />
                <p><span>Wind Speed: </span>{data.wind?.speed}</p><br />
                <p><span>Time Zone: </span>{data.timezone}</p><br />
            </div>}
            <button onClick={() => setIsMetricImperial(!isMetricImperial)} className="bnt_weather">Switch to °F</button>
            {/* btn btn-success btn-block */}
        </div>
    )
}

export default WeatherInfo

{/* <h3><span>Altura: </span> {  isDecimeters ? 16.4 : 1.64 } { isDecimeters ? "decimeters" : "meters" }</h3>  */ }

{/* <div className="alert alert-danger">{!data && <div><p>Please Enter a City and a Country</p></div>}</div>, */ }

{/* <div className="alert alert-danger">{!data && <div><p>Please Enter a City and a Country</p></div>}</div>,
<div className="card card-body">
    {data && <div>
        <p><span>Coutry: </span>{data.name}</p><br/>
        <p><span>Temperature: </span> {data.weather?.[0].description} C, {data.main?.temp}</p><br />
        <p><span>Humidity: </span>{data.main?.humidity}</p><br />
        <p><span>Wind Speed: </span>{data.wind?.speed}</p><br />
    </div>}
    {!data && <div>
        <p><span> </span></p><br/>
        <p><span> </span></p><br />
        <p><span> </span></p><br />
        <p><span> </span></p><br />
    </div>}
</div> */}

{/* <div className="card card-body">            
{data.name && <div><p><span>Coutry: </span>{data.name}</p><br/></div>}
{data.weather?.[0].description && <div><p><span>Temperature: </span>{data.weather?.[0].description} C, {data.main?.temp}</p><br/></div>}
{data.main?.humidity && <div><p><span>Humidity: </span>{data.main?.humidity}</p><br/></div>}
{data.wind?.speed && <div><p><span>Wind Speed: </span>{data.wind?.speed}</p><br/></div>}

{!data.name && <div><p><span> </span></p><br/></div>}
{!data.weather?.[0].description && <div><p><span> </span></p><br/></div>}
{!data.main?.humidity && <div><p><span> </span></p><br/></div>}
{!data.wind?.speed && <div><p><span> </span></p><br/></div>}

</div> */}
