import styles from "./weatherMainInfo.module.css";

export default function WeatherMainInfo({ weather }) {

    return <div className={styles.mainInfo}>
        <div className={styles.city}>{weather?.location.name}</div>
        <div className={styles.country}>{weather?.location.country}</div>
        <div className={styles.row}>
            <div>
                <img
                    src={`http:${weather?.current.condition.icon}`}
                    width="128"
                    alt={weather?.current.condition.text} />
            </div>
            <div className={styles.weatherConditions}>
                <div className={styles.condition}>{weather?.current.condition.text}</div>
                <div className={styles.current}>{weather?.current.temp_c}°</div>

            </div>
            
        </div>
        <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d70798.25036024158!2d${weather?.location.lon}098!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1680566530356!5m2!1sen!2sar`} width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
}