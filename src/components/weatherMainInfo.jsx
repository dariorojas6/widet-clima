export default function WeatherMainInfo({ weather }) {
    return <div>
        <div>{weather?.location.name}</div>
        <div>{weather?.location.country}</div>
        <div>
            <div>
                <img
                    src={`http:${weather?.current.condition.icon}`}
                    width="128"
                    alt={weather?.current.condition.text} />
            </div>
            <div>
                <div>{weather?.current.condition.text}</div>
                <div>{weather?.current.temp_c}°</div>

            </div>
            <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d70798.25036024158!2d${weather?.location.lon}098!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1680566530356!5m2!1sen!2sar`} width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
}