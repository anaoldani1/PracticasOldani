let list = document.querySelector(".characterList");
let characters = "";


fetch('https://rickandmortyapi.com/api/character')

.then(function(response){
    return response.json();
})
.then(function(data){
    for (let i = 0; i<data.results.length; i++){
    let character = data.results[i];
    characters += `
    <article class="personaje">
    <img src="${character.image}" alt='${character.name}'>
    <a href="./detalle.html?id=${character.id}"> 
        <p>Name: ${character.name}</p>
    </a>
    <p>Status: ${character.status} </p>
    </article>
    `;
    }
    list.innerHTML = characters;
    console.log(data);
})
.catch(function(error){
    console.log("Error: " + error);
})
