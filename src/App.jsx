// APC 440 Weather App, Module 8.
// Uses synthetic sample data from mockWeather.json. No network requests yet.

import { useState } from 'react'
import mockWeather from './data/mockWeather.json'
import CitySelector from './components/CitySelector.jsx'
import CurrentConditions from './components/CurrentConditions.jsx'
import ForecastList from './components/ForecastList.jsx'

export default function App() {
  const locations = mockWeather.locations

  // Store only the selected city's id. Start with the first location.
  const [selectedId, setSelectedId] = useState(locations[0].id)

  // Look up the full location from the data on every render, instead of
  // storing a second copy of it in state that could get out of sync.
  const location = locations.find((loc) => loc.id === selectedId)

  return (
    <main className="app">
      <h1>Weather App</h1>
      <p className="sample-badge">Sample data</p>

      <CitySelector
        locations={locations}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <CurrentConditions
        name={location.name}
        region={location.admin1}
        current={location.forecast.current}
      />

      <ForecastList daily={location.forecast.daily} />
    </main>
  )
}
