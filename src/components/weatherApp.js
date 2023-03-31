import { useState } from "react"
import WeatherForm from "./weatherForm.jsx";
const { REACT_APP_KEY, REACT_APP_URL } = process.env;

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);

    async function loadInfo(city = 'london') {
        try {
            const request = await fetch(`${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`);
            const json = await request.json();

            console.log(json)
        } catch (error) {

        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);

    }
    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            <div>Info</div>
        </div>
    );
}