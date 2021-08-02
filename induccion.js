
//protocolo iterable
//const connection = Object.freeze({})

/*
function crearIterador(arreglo) {
    var siguienteIndice = 0;

    return {
        next: function () {
            return siguienteIndice < arreglo.length ?
                { value: arreglo[siguienteIndice++], done: false } :
                { done: true };
        }
    }
}

var it = crearIterador(['yo', 'ya']);
console.log(it.next().value());
console.log(it.next().value());
console.log(it.next().done());
*/

//datos aleatorios Random


function crearIterador(valores) {
    var initial = 0;

    return {
        next: function () {
            return initial < valores.length ? { data: valores[initial++], done: false } : { done: true }
        }
    }
}//Array.from(Array(10)).map(x => Math.random() * 100)

const iterator = crearIterador(Array.from(Array(10)).map(x => Math.random() * 100));

let valor = iterator.next()

while (!valor.done) {
    console.log(valor.data)
    valor = iterator.next()
}









