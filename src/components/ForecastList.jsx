import ForecastCard from './ForecastCard.jsx'

// Shows one ForecastCard per day.
// Props:
//   daily - the "daily" object from an Open-Meteo forecast response.
//
// Open-Meteo sends each field as its own array ("parallel arrays"):
//   time: ['2026-10-26', '2026-10-27', ...]
//   temperature_2m_max: [52, 49, ...]
// Index 0 of every array is the first day, index 1 is the second day, and so on.
// We combine them into one object per day so each card gets everything it needs.
export default function ForecastList({ daily }) {
  const days = daily.time.map((date, i) => ({
    date,
    weatherCode: daily.weather_code[i],
    high: daily.temperature_2m_max[i],
    low: daily.temperature_2m_min[i],
    precipChance: daily.precipitation_probability_max[i],
  }))

  return (
    <section className="forecast" aria-labelledby="forecast-heading">
      <h2 id="forecast-heading">7-day forecast</h2>
      <ul className="forecast-list">
        {days.map((day) => (
          // Each date appears once, so it makes a stable, unique key.
          <li key={day.date}>
            <ForecastCard day={day} />
          </li>
        ))}
      </ul>
    </section>
  )
}
