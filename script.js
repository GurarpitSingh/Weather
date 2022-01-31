let weather = {
    'apiKey': 'd1e8433f4892a67ec864f4cabc9bdddd',
    fetchWeather: function(city){
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
        
 },

    displayWeather: function(data){
        const { cod } = data;
        if(cod == "404"){
            alert("City not Found !");
            location.reload();
        }
        else{
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name, temp, icon, humidity, description, speed);
        
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°C ";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".windspeed").innerText =  "Wind Speed: " + speed + " km/h";
        
        document.body.style.backgroundImage = `url('https://source.unsplash.com/random/1920x1080/?${name}')`;
        }
        
        
    },
    search: function() {
        
        this.fetchWeather(document.querySelector("#mysearchid").value);

    },
};


document.querySelector(".searchbutton").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".mysearch").addEventListener("keyup", function(event){
    if(event.key =="Enter"){
        weather.search();
    }
});





