
/*
const arr = [10, 20, 30];

console.log(arr);

arr.map((i) => console.log(i));

const obj = {
    p1:'aaaa',
    p2:'bbbb'
}

console.log(obj['p2'])

//destructuring


const {p1} = obj;
console.log(p1);


const [a, b, c] = arr;

const [d, ,f] = arr;
*/

//estructura json

const json = '{ "p1": [10, 20, 30], "p2": "cosa"}';

const obj = JSON.parse(json)



console.log(obj.p1);//buscamos los datos obj.p1
console.log(JSON.parse(json));//me colorea los tipos de datos

console.log(JSON.stringify(obj));//estructura tipo json