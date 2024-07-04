

const removeFromArray = (array, element)=>{
 const remover =  array.splice(2,1)
 console.log(remover);
 return array;
}

let array = [1,2,3,4];
let resultado = removeFromArray(array,3);

console.log(resultado);


