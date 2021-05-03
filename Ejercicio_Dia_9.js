//Ejercicio 46

const hola = (name = "Pedro") => `Hola ${name}`;

console.log(hola()) // "Hola Pedro!"
console.log(hola("Maria")) // "Hola Maria!"

//Ejercicio 47

const arr = [1, 2, 3, 4]

const [first, second] = arr;

console.log(first) // 1
console.log(second) // 2

const person = {
    name: "Pedro",
    age: 20
}

const {name,age} = person;

console.log(name) // "Pedro"
console.log(age)

//Ejercicio 48

const auto = {
    velocidad : 0,
    acelerar : function(){
        this.velocidad++;
    },
    frenar : function(){
        this.velocidad--;
    }
}

console.log(auto.velocidad) // 0
auto.acelerar()
console.log(auto.velocidad) // 1
auto.frenar()
console.log(auto.velocidad) // 0

//Ejercicio 49

let obtenerImpares = array => array.filter(v => v % 2 != 0);

console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
console.log(obtenerImpares([64, 35, 27])) // [35, 27]
console.log(obtenerImpares([])) // []

//Ejercicio 50

const max = array => array.sort((a,b) => b-a)[0];

console.log(max([1, 2, 3, 4])) // 4
console.log(max([63, 85, 39, 24, 3])) // 85

//Ejercicio 51

const max = (...args) => args.sort((a,b) => b-a)[0];

console.log(max(1, 2, 3, 4)) // 4
console.log(max(63, 85, 39, 24, 3)) // 85