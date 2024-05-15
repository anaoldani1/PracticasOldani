//1 y 2//
   let misdatos = {
    nombre : 'Ana ',
    apellido : 'Oldani ',
    dni : 47083424,
    comidasfavoritas : ['sushi', 'pure de papa', 'nuggets'],
    age : 18,
    saludar: function(){
        return 'Hola mi nombre es ' +this.nombre +this.apellido + 'y tengo ' +this.age + ' años. Mi primer comida favorita es ' +this.comidasfavoritas[0];
    }
} 
console.log(misdatos.saludar())

//3//

let auto = {
    marca : `Volkswagen`,
    modelo : `polo`,
    anio : 2023,
    color : `gris`,
    posicion : 0,
    avanzar: function (n) {
        this.posicion = this.posicion + n;
        return this.posicion
    },
    retroceder: function(n) {
        this.posicion = this.posicion - n;
        return  this.posicion;
    }
    }
console.log(auto.avanzar(4)); 
console.log(auto.avanzar(2)); 
console.log(auto.retroceder(3));
console.log(auto.retroceder(6));

//4//

let nuevoAuto = {
    marca : `Volkswagen`,
    modelo : `polo`,
    anio : 2023,
    color : `gris`,
    posicion : 0,
    moverse: function(n){
        this.posicion = this.posicion + n;
        return this.posicion
    }
}
console.log(nuevoAuto.moverse(4));
console.log(nuevoAuto.moverse(6));
console.log(nuevoAuto.moverse(-3));
console.log(nuevoAuto.moverse(-2));

//5//
let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes:  ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(n4){     
        this.energia = this.energia - 10;
        return `Poder elegido de ` + this.nombre + `: ` + this.poderes[n4] + `. Energia restante: ` + this.energia;
    }
}

console.log(ironMan.energia);
console.log(ironMan.getPoder(1));
console.log(ironMan.energia);
console.log(ironMan.getPoder(1));
console.log(ironMan.energia);

let Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes:  ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(n4){     
        this.energia = this.energia - 10;
        return `Poder elegido de ` + this.nombre + `: ` + this.poderes[n4] + `. Energia restante: ` + this.energia;
        //El numero elegido tiene que estar entre 0 y dos porque los numeros que corresponden al contenido del array son 0, 1 y 2//
    }
}

console.log(Hulk.energia);
console.log(Hulk.getPoder(1));
console.log(Hulk.energia);
console.log(Hulk.getPoder(1));
console.log(Hulk.energia);






