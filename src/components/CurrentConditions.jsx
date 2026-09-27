import { describeWeather } from '../data/weatherCodes.js'

// Shows the current weather for one location.
// Props:
//   name    - city name, e.g. "Platteville"
//   region  - state name (admin1), e.g. "Wisconsin"
//   current - the "current" object from an Open-Meteo forecast response
// Values arrive in Imperial units (°F, mph), which is what we display for now.
export default function CurrentConditions({ name, region, current }) {
  const { label, icon } = describeWeather(current.weather_code)

  return (
    <section className="current-conditions" aria-labelledby="current-heading">
      <h2 id="current-heading">
        Current conditions in {name}, {region}
      </h2>

      <p className="current-temp">{Math.round(current.temperature_2m)}°F</p>

      <p className="current-condition">
        {/* The icon is decoration, so screen readers skip it and read the label. */}
        <span aria-hidden="true">{icon}</span> {label}
      </p>

      <dl className="current-details">
        <div>
          <dt>Feels like</dt>
          <dd>{Math.round(current.apparent_temperature)}°F</dd>
        </div>
        <div>
          <dt>Humidity</dt>
          <dd>{current.relative_humidity_2m}%</dd>
        </div>
        <div>
          <dt>Wind</dt>
          <dd>{Math.round(current.wind_speed_10m)} mph</dd>
        </div>
      </dl>
    </section>
  )
}
