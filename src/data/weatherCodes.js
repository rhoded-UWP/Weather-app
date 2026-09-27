// WMO weather interpretation codes used by Open-Meteo (the "weather_code" field).
// Source: Open-Meteo forecast API documentation, "WMO Weather interpretation codes".
// Each entry has a short text label and a decorative icon.
// Always show the label as text; the icon is decoration only.

export const weatherCodes = {
  0: { label: 'Clear sky', icon: '☀️' },
  1: { label: 'Mainly clear', icon: '🌤️' },
  2: { label: 'Partly cloudy', icon: '⛅' },
  3: { label: 'Overcast', icon: '☁️' },
  45: { label: 'Fog', icon: '🌫️' },
  48: { label: 'Freezing fog', icon: '🌫️' },
  51: { label: 'Light drizzle', icon: '🌦️' },
  53: { label: 'Drizzle', icon: '🌦️' },
  55: { label: 'Heavy drizzle', icon: '🌧️' },
  56: { label: 'Light freezing drizzle', icon: '🌧️' },
  57: { label: 'Freezing drizzle', icon: '🌧️' },
  61: { label: 'Light rain', icon: '🌦️' },
  63: { label: 'Rain', icon: '🌧️' },
  65: { label: 'Heavy rain', icon: '🌧️' },
  66: { label: 'Light freezing rain', icon: '🌧️' },
  67: { label: 'Freezing rain', icon: '🌧️' },
  71: { label: 'Light snow', icon: '🌨️' },
  73: { label: 'Snow', icon: '🌨️' },
  75: { label: 'Heavy snow', icon: '❄️' },
  77: { label: 'Snow grains', icon: '🌨️' },
  80: { label: 'Light rain showers', icon: '🌦️' },
  81: { label: 'Rain showers', icon: '🌧️' },
  82: { label: 'Violent rain showers', icon: '⛈️' },
  85: { label: 'Light snow showers', icon: '🌨️' },
  86: { label: 'Heavy snow showers', icon: '❄️' },
  95: { label: 'Thunderstorm', icon: '⛈️' },
  96: { label: 'Thunderstorm with light hail', icon: '⛈️' },
  99: { label: 'Thunderstorm with heavy hail', icon: '⛈️' },
}

// Returns { label, icon } for a code, with a safe fallback for unknown codes.
export function describeWeather(code) {
  return weatherCodes[code] ?? { label: 'Unknown conditions', icon: '🌡️' }
}
