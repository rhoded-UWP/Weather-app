// Shows one button per location so the user can pick a city.
// Props:
//   locations  - the array of locations from mockWeather.json
//   selectedId - the id of the city that is currently shown
//   onSelect   - function to call with a location's id when its button is clicked
// This component does not store which city is selected. App owns that state
// and passes it down, so there is only one source of truth.
export default function CitySelector({ locations, selectedId, onSelect }) {
  return (
    <div className="city-selector" role="group" aria-labelledby="city-selector-label">
      <p id="city-selector-label" className="city-selector-label">
        Choose a city
      </p>
      <div className="city-buttons">
        {locations.map((location) => (
          <button
            key={location.id}
            type="button"
            // aria-pressed tells screen readers which button is "on".
            aria-pressed={location.id === selectedId}
            onClick={() => onSelect(location.id)}
          >
            {location.name}, {location.admin1}
          </button>
        ))}
      </div>
    </div>
  )
}
