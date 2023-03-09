
const WeatherForm = props => {

    return (
        <div className="form_card">
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <box-icon name='search-alt-2'></box-icon>
                    <input type="text" name="city" placeholder="Your City Name" autoFocus />
                </div>
                <div className="form-group">
                    <box-icon name='search-alt-2'></box-icon>
                    <input type="text" name="country" placeholder="Your Country Name" />
                </div>
                <button className="bnt_weather">
                    Get Weather
                </button>
            </form>
        </div>
    )
}

export default WeatherForm