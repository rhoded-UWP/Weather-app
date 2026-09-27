import { describeWeather } from '../data/weatherCodes.js'

// Shows one day's forecast.
// Props:
//   day - { date, weatherCode, high, low, precipChance }, built by ForecastList.
// Temperatures are in °F.
export default function ForecastCard({ day }) {
  const { label, icon } = describeWeather(day.weatherCode)

  // "2026-10-26" on its own is read as midnight UTC, which is still the
  // previous day in US time zones. Adding "T00:00" makes it local midnight,
  // so the weekday comes out right.
  const date = new Date(`${day.date}T00:00`)
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' })
  const monthDay = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <article className="forecast-card">
      <h3>
        {weekday} <span className="forecast-date">{monthDay}</span>
      </h3>

      <p className="forecast-condition">
        {/* The icon is decoration, so screen readers skip it and read the label. */}
        <span aria-hidden="true">{icon}</span> {label}
      </p>

      <p className="forecast-temps">
        High {Math.round(day.high)}°F / Low {Math.round(day.low)}°F
      </p>

      <p className="forecast-precip">Chance of precipitation: {day.precipChance}%</p>

      {/* Only render the badge on rainy days. If the left side is false,
          React renders nothing. */}
      {day.precipChance >= 60 && <p className="umbrella-badge">Bring an umbrella</p>}
    </article>
  )
}
