import { useState, setState } from 'react';
// const [fahrenheit, setFahrenheit] = useState(0)
// const [isFahrenheit, setIsFahrenheit] = useState(false)
// const [icono, setIcono] = useState([1,"clear sky",2,"few clouds",3,"scattered clouds",4,"broken clouds",5,"shower rain",6,"rain",9,"thunderstorm",7,"snow",8,"mist"]);
const icoNumb = ["","clear sky","few clouds","scattered clouds","broken clouds","shower rain","rain","snow","mist","thunderstorm"];
let num = 1

console.log("Prueba ",icoNumb.indexOf("thunderstorm"))

const WeatherInfo = ({ data }) => {
    console.log("data Info", data)
    return (
        <div className="card card-body">
            {data && <div>
                <img src={`./public/w/${icoNumb.indexOf(data.current?.weather?.[0].description)}.svg`} alt="" />
                <p><span>Current Weather: </span>{data.current?.weather?.[0].description}</p><br />
                <p><span>Time Latitude: </span>{data.lat}</p><br />
                <p><span>Time Longitude: </span>{data.lon}</p><br />
                <p><span>Current Temperature: </span>{data.current?.temp}</p><br />
                <p><span>Current Pressure: </span>{data.current?.pressure}</p><br />
                <p><span>Current Humidity: </span>{data.current?.humidity}</p><br />
                <p><span>Current Wind Speed: </span>{data.current?.wind_speed}</p><br />

                <p><span>Coutry: </span>{data.name}</p><br />
                <p><span>Temperature: </span> {data.weather?.[0].description} ºC, {data.main?.temp}</p><br />
                <p><span>Humidity: </span>{data.main?.humidity}</p><br />
                <p><span>Wind Speed: </span>{data.wind?.speed}</p><br />
                <p><span>Time Zone: </span>{data.timezone}</p><br />
            </div>}
            {!data && <div>
                <p><span> </span></p><br />
                <p><span> </span></p><br />
                <p><span> </span></p><br />
                <p><span> </span></p><br />
            </div>}
        </div>
    )
}

export default WeatherInfo

{/* <div className="alert alert-danger">{!data && <div><p>Please Enter a City and a Country</p></div>}</div>, */}

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
