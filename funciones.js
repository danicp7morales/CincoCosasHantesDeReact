// fn regular
/*
console.log(fRegular(3, 4))//se ejecuta 
console.log(fFlech(5, 6))//no se ejecuta
*/

function fRegular(a, b){
    return a + b;
}
/*
const f = function fRegular(a, b){
    return a + b;
}*/
// fn flecha
/*
const fFlecha = (a, b) => {
    return a + b;
}*/

const fFlech = (a, b) => a + b;

console.log(fRegular(3, 4))
console.log(fFlech(5, 6))
//como ejecutar una funcion anonima
/*( function (a, b) {
    return console.log('anelis, y emma', a + b);
})(10,20);*/

((a, b) => console.log('atenty:', a + b))(10, 20);