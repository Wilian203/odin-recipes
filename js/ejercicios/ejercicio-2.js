/*

 ===== Paso 2: =====
 Una vez que comprenda el fragmento de código anterior, elimínelo. Luego, siguiendo las siguientes instrucciones, vuelva a crear el fragmento usted mismo en "Su código va aquí".
 
 -------------------------------------------------- -------------
 
 1. Cree 4 variables: nombre, apellido, este año y año de nacimiento.

 2. Cree una quinta variable, saludo, que se construya a partir de las 4 anteriores.
 (debe contener un saludo con el nombre completo de la persona y su edad)

 3. Imprimir saludo con console.log

 4. Presione 'Ejecutar' para asegurarse de que su código funcione.
 
 -------------------------------------------------- -------------

 ===== NOTA =====
 Para que las pruebas pasen, deberá utilizar estos valores exactos. La redacción también debe coincidir exactamente. Si las pruebas fallan, verifique el espaciado, las mayúsculas y la puntuación:
 
 año de nacimiento = 1947
 este año = 1965
 nombre = Carlos
 apellido = Stevenson

 El saludo debe decir: "¡Hola! Mi nombre es Carlos Stevenson y tengo 18 años".

*/

let firstName =  'Wilian';
let lastName =  'Marinez';
let anioActual =  2024;
let anioNacimiento =  1999;
let saludo = `Hola mi nombre es ${firstName} ${lastName} y tengo ${anioActual - anioNacimiento} años de edad`;


console.log(saludo);