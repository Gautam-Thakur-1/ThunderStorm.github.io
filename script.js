const apiKey = "4256343752e7de8094a75bc39463361f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const submitBox = document.querySelector(".search input");
const submitBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();

	if(response.status==404){
		document.querySelector(".error").style.display="block";
		document.querySelector(".weather").style.display = "none";
	}

	console.log(data);


	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = Math.round((data.wind.speed) * (18 / 5)) + "km/hr";

	if (data.weather[0].main == "Clouds") {
		weatherIcon.src = "clouds.png";
	}
	else if (data.weather[0].main == "Haze") {
		weatherIcon.src = "haze.png";
	}
	else if (data.weather[0].main == "Clear") {
		weatherIcon.src = "clear.png";
	}
	else if (data.weather[0].main == "Rain") {
		weatherIcon.src = "rain.png";
	}
	else if (data.weather[0].main == "Drizzle") {
		weatherIcon.src = "drizzle.png";
	}
	else if (data.weather[0].main == "Snow") {
		weatherIcon.src = "snow.png"
	}
	else if (data.weather[0].main == "Mist") {
		weatherIcon.src = "mist.png"
	}

	document.querySelector(".weather").style.display = "block";
	document.querySelector(".error").style.display="none";


}

submitBtn.addEventListener("click", () => {
	checkWeather(submitBox.value);
})




