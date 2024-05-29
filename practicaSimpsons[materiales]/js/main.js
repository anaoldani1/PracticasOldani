// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');
 
    let saludo = document.querySelector('#saludo');
 
    let span = document.querySelector("span");

    let bienvenida = document.querySelector(".bienvenida")

    let personajes = document.querySelector(".personajes")

    let bart = document.querySelector('#bart')

    let lisa = document.querySelector('#lisa')

    let homero = document.querySelector('#homero')

    let marge = document.querySelector('#marge')

    let maggie = document.querySelector('#maggie')

    let milhouse = document.querySelector('#milhouse')

    let burns = document.querySelector('#burns')

    let bobPatinio = document.querySelector('#bobPatinio')

    let flanders = document.querySelector('#flanders')

    let duffman = document.querySelector('#duffman')

    let gorgory = document.querySelector('#gorgory')

    let nelson = document.querySelector('#nelson')
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    titulo.addEventListener("mouseover", function(){
        let nombre = prompt("Como te llamas?");
        if (nombre == null){
            saludo.innerText = "BIENVENID@";
        } else {
            saludo.innerText = `BIENVENID@` + nombre;
            saludo.style.textTransform = 'uppercase';
        }
        titulo.style.display = 'none';
        span.style.display = 'block';
        span.addEventListener("click", function(){
        bienvenida.style.display = 'none';
        personajes.style.display = 'flex';
        })
    })

    bart.addEventListener("click", function(){
        this.style.backgroundColor = "yellow"
    })
    lisa.addEventListener("dblclick", function(){
        this.style.backgroundColor = "yellow"
    })
    homero.addEventListener("click", function(){
        this.style.backgroundColor = "yellow"
    })
    marge.addEventListener("mouseover", function(){
        this.style.backgroundColor = "yellow"
    })
    maggie.addEventListener("mouseout", function(){
        this.style.backgroundColor = "yellow"
    })
    milhouse.addEventListener("click", function(){
        this.style.backgroundColor = "yellow"
    })
    burns.addEventListener("mouseover", function(){
        this.style.backgroundColor = "yellow"
    })
    bobPatinio.addEventListener("dblclick", function(){
        this.style.backgroundColor = "yellow"
    })
    flanders.addEventListener("mouseover", function(){
        this.style.backgroundColor = "yellow"
    })
    duffman.addEventListener("dblclick", function(){
        this.style.backgroundColor = "yellow"
    })
    gorgory.addEventListener("mouseover", function(){
        this.style.backgroundColor = "yellow"
    })
    nelson.addEventListener("click", function(){
        this.style.backgroundColor = "yellow"
    })

    /* Asignarle evento a la variable boton */
   let boton = document.querySelector(".boton");
   boton.addEventListener("click", function(){

   })
    
 
 }) 

//Los ultimos dos puntos lucas dijo que no los haga, pero los hice como se me ocurrio//