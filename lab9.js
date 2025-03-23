
latitude = 43.0481;
longitude = -76.1474;

function getWeather() {
    let url = "https://api.open-meteo.com/v1/forecast"
        + "?latitude=43.0481"  
        + "&longitude=-76.1474"
        + "&current=temperature_2m,precipitation,cloud_cover"  
        + "&hourly=temperature_2m"
        + "&temperature_unit=fahrenheit"
        + "&precipitation_unit=inch"
        + "&timezone=auto";

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log("Got weather data:", data);

            
            let temp = data.current.temperature_2m;
            let preci = data.current.precipitation;
            let cloudCover = data.current.cloud_cover;  

            
            document.getElementById("temperatureNow").textContent = temp.toFixed(1);
            document.getElementById("precipitationNow").textContent = preci.toFixed(1);
            document.getElementById("cloudCoverNow").textContent = cloudCover.toFixed(0);

            
            if (cloudCoverNow >= 50) {
                document.getElementById("cloudEmoji").textContent = "☁️";
            } else {
                document.getElementById("cloudEmoji").textContent = "☀️";
            }
        });
}
        
document.addEventListener('DOMContentLoaded', function() {
    console.log("calling getWeather");
    getWeather();
}); 