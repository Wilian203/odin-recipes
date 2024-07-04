

const sumAll = (num1, num2)=>{
    let sum = 0;
    let expression = '';

    for(let i = num1; i <=num2; i++){
       sum += i;
       expression += i;

       if(i < num2 ){
        expression += " + ";
       }
    }

    expression += " = " + sum;
    return expression;
}
let result = sumAll(1,4)
console.log(result);
