fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=278c83eff592e742d395c3a0cee1c4e0')
    .then(response => response.json())
    .then( data => {
        var body = document.querySelector("body")
        var p = document.createElement("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        p.className = "green"
        console.log(data)
        console.log(data.main)
        console.log(data.weather[2])
    })


fetch('https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=278c83eff592e742d395c3a0cee1c4e0')
   .then(response => response.json())
   .then( data => {
        var body = document.querySelector("body")
        var p = document.createElement("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        console.log(data)
        console.log(data.main)
        console.log(data.weather[2])
        p.className = "red"
   })
  

   var loc1 = 0;
   var loc2 = 0;
navigator.geolocation.getCurrentPosition((position) => {
console.log(position.coords.latitude, position.coords.longitude)
loc1 = position.coords.latitude
loc2 = position.coords.longitude
})

fetch("https://api.openweathermap.org/data/2.5/weather?lat="+loc1+"&lon="+loc2+"&units=metric&appid=278c83eff592e742d395c3a0cee1c4e0")
    .then(response => response.json())
    .then( data => {
        var body = document.querySelector("body")
        var p = document.createElement("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        console.log(data)
        console.log(data.main)
        console.log(data.weather[2])
        p.className = "yellow"
    })

var city = "London";   

function weather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=278c83eff592e742d395c3a0cee1c4e0")
    .then(response => response.json())
    .then( data => {
        var body = document.querySelector("body")
        var p = document.createElement("div")
        var p1 = document.createElement("p")
        var p2 = document.createElement("p")
        var p3 = document.createElement("p")
        body.appendChild(p)
        p.appendChild(p1)
        p.appendChild(p2)
        p.appendChild(p3)
        p1.innerHTML = data.name
        p2.innerHTML = data.main.temp
        p3.innerHTML = data.weather[0].description
        console.log(data)
        console.log(data.main.temp)
        console.log(data.weather[0].description)
        p.className = "blue"
    })
}

weather("Berlin");
weather ("London");
weather("Turin");