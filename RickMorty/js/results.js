let results = document.querySelector(".search-results");

console.log(location.search);
let queryString = location.search;
let queryStringOb = new URLSearchParams(queryString);
let info = queryStringOb.get('q'); 
console.log(info);

fetch (`https://rickandmortyapi.com/api/character/?name=${info}`)
    .then (function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        for (i=0; i<data.results.length; i ++){
          let datos = data.results[i];  
            results.innerHTML += `
            <article class="results">
                <img src="${datos.image}" alt='${datos.name}'>
                <p>Name: ${datos.name}</p>
                <p>Status: ${datos.status}</p>
            </article>`
        }
    })
    .catch (function(err){
        console.log(err);
    })