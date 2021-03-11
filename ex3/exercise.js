fetch('https://www.omdbapi.com/?s=harry potter&apikey=b2d979a1')
    .then(response => response.json())
    .then( data => {
        console.log(data)
            data.Search.forEach(function(item) {   
            var body = document.querySelector("body")
            var p = document.createElement("div")
            var p1 = document.createElement("p")
            var p2 = document.createElement("p")
            var image = document.createElement("img")
            p1.innerHTML = item.Title
            p2.innerHTML = item.Year
            image.setAttribute("src", item.Poster)
            body.appendChild(p)
            p.appendChild(p1)
            p.appendChild(p2)
            p.appendChild(image)
         })
    
    })


 var searchBox = document.querySelector("#text") 

function change() {
    
    var inputText = document.querySelector("#text").value
    console.log(inputText)
    fetch("https://www.omdbapi.com/?s="+ inputText +"&apikey=b2d979a1")
    .then(response => response.json())
    .then( data => {
        console.log(data)
        if (data.Search) {
            var div = document.querySelectorAll("div")
            div.forEach( function (item){
                item.remove();
                console.log("text")
            })
            data.Search.forEach(function(item) {   
            var body = document.querySelector("body")
            var p = document.createElement("div")
            var p1 = document.createElement("p")
            var p2 = document.createElement("p")
            var image = document.createElement("img")
            p1.innerHTML = item.Title
            p2.innerHTML = item.Year
            image.setAttribute("src", item.Poster)
            body.appendChild(p)
            p.appendChild(p1)
            p.appendChild(p2)
            p.appendChild(image)
            console.log(item.Title)
        })} 
    
    })
} 
  
searchBox.addEventListener("keyup",change)
