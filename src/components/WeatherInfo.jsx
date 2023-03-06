import { setState } from 'react';
const WeatherInfo = ({ data }) => {
    return (
        <div className="card card-body">
            {data && <div>
                <p><span>Coutry: </span>{data.name}</p><br />
                <p><span>Temperature: </span> {data.weather?.[0].description} C, {data.main?.temp}</p><br />
                <p><span>Humidity: </span>{data.main?.humidity}</p><br />
                <p><span>Wind Speed: </span>{data.wind?.speed}</p><br />
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
