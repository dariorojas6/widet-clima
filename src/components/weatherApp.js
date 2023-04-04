import { useEffect, useState } from "react"
import styles from "./weatherApp.module.css";
import WeatherForm from "./weatherForm.jsx";
import WeatherMainInfo from "./weatherMainInfo.jsx";
import Loading from "./loading";
const { REACT_APP_KEY, REACT_APP_URL } = process.env;

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);

    useEffect(()=>{
        loadInfo();
    }
    , [])

    useEffect(()=>{
    document.title = `Weather | ${weather?.location.name ?? ""}`;
    }, [weather])

    async function loadInfo(city = 'london') {
        try {
            const request = await fetch(`${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`);
            const json = await request.json();
            setTimeout(()=>{
                setWeather(json)
            },2000);
           

           console.log(json)
        } catch (error) {

        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);

    }
    return (
        <div className={styles.weatherContainer}>
            <WeatherForm onChangeCity={handleChangeCity} />
            {weather ? <WeatherMainInfo weather={weather}/> : <Loading/>}
            
        </div>
    );
}