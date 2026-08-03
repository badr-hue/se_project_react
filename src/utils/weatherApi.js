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
    result.temperature = Math.round(data.main.temp);
    result.condition = data.weather[0].main.toLowerCase();
    result.icon = data.weather[0].icon;
    result.type = getWeatherCondition(result.temperature);

    return result;
};

export const getWeatherCondition  = (temparature) => {

     if (temperature >= 86) {
   return 'hot';
 } else if (temperature >= 66) {
   return 'warm';
 } else {
   return 'cold';
 }

}