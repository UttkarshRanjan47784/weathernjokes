function setElements(info) {

    let locBanner = document.getElementById("location-banner");
    let weatherBanner = document.getElementById("weather-banner");
    let temp = document.getElementById("temp");
    let tempFeels = document.getElementById("temp-feels");
    let weatherDetails = document.getElementById("weather-details");
    let jokeBanner = document.getElementById("joke-banner");
    let joke = document.getElementById("joke");
    let jokeHeading = document.getElementById("joke-heading")

    if (info.city != null){
        locBanner.innerText = `${info.city}, ${info.country}`;
    }
    else {
        locBanner.innerText = `Could not find your location`;
        return;
    }

    if (info.temp != null){
        temp.innerText = `${info.temp}\u00B0C`;
        tempFeels.innerText = `Feels like ${info.tempFeel}\u00B0C`;
        weatherDetails.innerText = `${info.weather}, Humidity : ${info.humidity}% `;
    }
    else {
        weatherBanner.innerText = `Could not retrieve Weather`;
    }

    if (info.joke != null){
        jokeHeading.innerText = `Here's a joke to lighten the mood!`
        joke.innerText = `${info.joke}`
    } else {
        jokeBanner.innerText = `Could not retrieve Joke`;
    }
}

export default setElements;