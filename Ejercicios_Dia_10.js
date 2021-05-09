//Ejercicio 52
function reducirACero(numero){
    let pasos = 0;
    while (numero>0){
        if (numero%2 === 0){
            numero /= 2;
            pasos++;
        }else{
            numero--;
            pasos++;
        }
    }
    return pasos;
}

console.log(reducirACero(7)) // 5
console.log(reducirACero(123)) // 12
console.log(reducirACero(8)) // 4

//Ejercicio 53
function transcribir(string){
    let string2 = string.split('')
    
    string2.forEach(function(element, i){
        if (element === 'G'){
            string2[i] = 'C'
        }
        else if(element === 'C'){
            string2[i] = 'G'
        }
        else if(element === 'T'){
            string2[i] = 'A'
        }
        else if(element === 'A'){
            string2[i] = 'U'
        }
    });
    ARN=string2.join('');
    return ARN;
}

console.log(transcribir("ACGT")) // UGCA
console.log(transcribir("ACGTGGTCTTAA")) // UGCACCAGAAUU

//Ejercicio 54
function triqui(arr){
    if (arr[0][0]==='O' && arr [0][1] === 'O' && arr [0][2] === 'O'|| arr[0][0]==='X' && arr [0][1] === 'X' && arr [0][2] === 'X'){
      return true
    }
    else if(arr[1][0]==='O' && arr [1][1] === 'O' && arr [1][2] === 'O'|| arr[1][0]==='X' && arr [1][1] === 'X' && arr [1][2] === 'X'){
      return true
    }
    else if(arr[2][0]==='O' && arr [2][1] === 'O' && arr [2][2] === 'O'|| arr[2][0]==='X' && arr [2][1] === 'X' && arr [2][2] === 'X'){
      return true
    }
    else if(arr[0][0]==='O' && arr [1][0] === 'O' && arr [2][0] === 'O'|| arr[0][0]==='X' && arr [1][0] === 'X' && arr [2][0] === 'X'){
      return true
    }
    else if(arr[0][1]==='O' && arr [1][1] === 'O' && arr [2][1] === 'O'|| arr[0][1]==='X' && arr [1][1] === 'X' && arr [2][1] === 'X'){
      return true
    }
    else if(arr[0][2]==='O' && arr [1][2] === 'O' && arr [2][2] === 'O'|| arr[0][2]==='X' && arr [1][2] === 'X' && arr [2][2] === 'X'){
      return true
    }
    else if(arr[0][0]==='O' && arr [1][1] === 'O' && arr [2][2] === 'O'|| arr[0][0]==='X' && arr [1][1] === 'X' && arr [2][2] === 'X'){
      return true
    }
    else if(arr[0][2]==='O' && arr [1][1] === 'O' && arr [2][0] === 'O'|| arr[0][2]==='X' && arr [1][1] === 'X' && arr [2][0] === 'X'){
      return true
    }else{
      return false}
}

const b1 = [
    ["X", "O", "-"],
    ["O", "O", "X"],
    ["-", "O", "X"]
  ]
console.log(triqui(b1)) // true
  
const b2 = [
    ["X", "X", "-"],
    ["O", "O", "X"],
    ["-", "O", "X"]
  ]
console.log(triqui(b2)) // false

//Ejercicio 55
function removerCeros(arr){
    console.log (arr.filter(v => v != 0));
}

removerCeros([1, 0, 2, 0, 3, 0]) // [1, 2, 3]
removerCeros([1, 2, 3]) // [1, 2, 3]
removerCeros([0, 0, 0]) // []

//Ejercicio 56
function ordenar(arr) {
    let newArr = [];
    while (arr.length!=0){
        newArr.push(Math.min(...arr))
        arr.splice(arr.indexOf(Math.min(...arr)),1) 
    }
  return newArr
}

console.log(ordenar([6, 2, 9, 7, 8, 3])) // [2, 3, 6, 7, 8, 9]
console.log(ordenar([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]
console.log(ordenar([1, 2, 3])) // [1, 2, 3]

//Ejercicio 57
function sumarImpares(arr){
    let impares = arr.filter(numero => numero%2 !=0);
    return impares.reduce((acum, valor) => acum+valor,0);
}

console.log(sumarImpares([1, 2, 3, 4, 5])) // 9
console.log(sumarImpares([2, 4])) // 0

//Ejercicio 58
function numDuplicados(string){
    let duplicados = 0;
    while(string.length>1){
        let partes = string.split(string[0]);
        if(partes.length>2) duplicados++
            string = partes.join('');
        }
    return duplicados
}

console.log(numDuplicados("abcaa")) // 1
console.log(numDuplicados("abab")) // 2
console.log(numDuplicados("abc")) // 0

//Ejercicio 59
function escalera(numero){
    let salida = '';
    for (let i = 1; i <= numero; i++) {
        salida+='#'.repeat(i)+'\n';
    }
    return salida;
}

console.log(escalera(2));
console.log(escalera(3));
console.log(escalera(5));

//Ejercicio 60
function max(obj){
    let valorMaximo = 0;
    let aux;
    for(i in obj){
        if (obj[i] > valorMaximo){
            valorMaximo = obj[i];
            aux = i;
        }
    }
    return aux;
}

console.log(max({ a: 1, b: 6, c: 3 })) // b