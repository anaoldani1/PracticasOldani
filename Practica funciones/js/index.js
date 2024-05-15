// 1 a 7 //
function rectangulo (altura, ancho){
    let area = altura*ancho
    return area
}
console.log(rectangulo(10,6));


function triangulo (altura, base){
    let area = (base*altura)/2
    return area
}
console.log(triangulo(5,4));


let largo = largodelarray ([1, 2, 3, 4, 5])
function largodelarray (array){
    return array.length
}
console.log(largo);


function cantidaddeletras (parametro){
    return parametro.length
}
console.log(cantidaddeletras("programacion"));


function dolarhoy(precio){
    let preciodeldolar = precio/1000
    return preciodeldolar
}
console.log(dolarhoy(5000))


function preciofinal (precio2){
    let final = precio2 + (precio2*0.21)
    return final
}
console.log(preciofinal(10000))


function mitad (nro){
    let division = nro/2;
    return division;
}
console.log(mitad(4))

// 8 //

function diaSegunNumero (dias, nro3) {
    let fun = dias[nro3];
    return fun;
}

let dia = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
console.log(diaSegunNumero(dia, 3));

// Ejecutando Funciones//

function siguiente(numero) {
    return numero + 1;
}
  
console.log(siguiente(6));

function doble(numero) {
    return 2 * numero;
}
console.log(doble(9));
  
function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
}
console.log(siguienteDelDoble(7));

function anterior (numero){
        return numero - 1;
    }
console.log(anterior(2))

function triple (numero){
    return numero*3;
}
console.log(triple(3));

function anteriorDelTriple (numero){
    let triple = numero*3;
    return triple - 1;
}
console.log(anteriorDelTriple(2));

