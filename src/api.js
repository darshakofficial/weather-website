export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const GEO_API_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '<API_KEY>', //<API_KEY> change with your API key
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};


export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/';
export const WEATHER_API_KEY = '<API_KEY>'; //<API_KEY> change with your API key

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}