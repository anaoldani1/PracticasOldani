console.log(location.search);

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let characterId = queryStringObj.get('id'); 
console.log(characterId);


fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then (function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let nom = document.querySelector(".nombre");
        nom.innerText = data.name;
        let est = document.querySelector(".estado");
        est.innerText += data.status;
        let imagen = document.querySelector("img");
        imagen.src = data.image;
        let especie = document.querySelector(".especie");
        especie.innerText += data.species;
    })
    .catch (function(err){
        console.log(err);
    })
    