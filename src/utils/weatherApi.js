export const getWeather = ({latitude , longtitude}, APIkey) => {
   return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&units=imperial&appid=${APIkey}
`)
.then((res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Error: ${res.status}`);
    }
})};

export const filterWeatherData = (data) => {
    const result = {};
    result.city = data.name;
    result.temperature = { F: Math.round(data.main.temp) };
   // result.condition = data.weather[0].main.toLowerCase();
    result.icon = data.weather[0].icon;
    result.isDay = isDay(data.sys, Date.now());
    result.type = getWeatherCondition(result.temperature.F);

    const conditionMap = {
    clear: "clear",
    clouds: "cloudy",
    rain: "rain",
    drizzle: "rain",
    thunderstorm: "storm",
    snow: "snow",
    mist: "fog",
    smoke: "fog",
    haze: "fog",
    dust: "fog",
    fog: "fog",
    sand: "fog",
    ash: "fog",
    squall: "storm",
    tornado: "storm",
  };

  const apiCondition = data.weather[0].main.toLowerCase();
  result.condition = conditionMap[apiCondition] || "clear"; // fallback

    return result;
};

const isDay = ({ sunrise, sunset}, currentTime ) =>{
  
return sunrise*1000 < currentTime && currentTime < sunset*1000 ;

};

export const getWeatherCondition  = (temperature) => {

     if (temperature >= 86) {
   return 'hot';
 } else if (temperature >= 66) {
   return 'warm';
 } else {
   return 'cold';
 }

};