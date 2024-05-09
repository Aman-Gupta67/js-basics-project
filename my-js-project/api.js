const apiKey = "614fdfee8557b80b64cd5ed02656d9b8";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=London";

async function getWeatherDetails(){
    const response = await fetch(apiURL + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
}
getWeatherDetails();