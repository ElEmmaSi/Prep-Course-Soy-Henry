// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
   if (x > y){
    return x;}
      if (y > x){
        return y;}
          if (y = x)
            return x;
}

function mayoriaDeEdad(edad) {
  if (edad <= 17){
    return 'Not allowed';}
  if (edad > 17) 
    return 'Allowed';
}
  
function conection(status) {
  
    if (status === 1){
        return 'Online';}
    if (status === 2){
        return 'Away';}
            return 'Offline';

}

function saludo(idioma) {
  if (idioma === 'aleman'){
    return 'Guten Tag!';}
if (idioma === 'mandarin'){
    return 'Ni Hao!';}
if (idioma === 'ingles'){
    return 'Hello';}
return 'Hola!';
}

function colors(color) {
  switch(color){
    case 'blue': return 'This is blue'
    case 'red': return 'This is red'
    case 'green': return 'This is green'
    case 'orange': return 'This is orange'}
    return 'Color not found';
}

function esDiezOCinco(numero) {
  if (numero === 10 || numero === 5){
    return true;}
    return false;
}

function estaEnRango(numero) {
  if (numero < 50 && numero > 20){
    return true;}
        return false;
}

function esEntero(numero) {
  if (numero - Math.floor(numero) === 0){
    return true;}
return false;
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 !== 0){
    return 'fizz';}
if (numero % 5 === 0 && numero % 3 !== 0){
    return 'buzz';}
if (numero % 3 === 0 && numero % 5 === 0){
    return 'fizzbuzz'}
return (numero);
}

function operadoresLogicos(num1, num2, num3) {
  if (num1 > num2 && num1 > num3 && num1 > 0){
    return 'Número 1 es mayor y positivo';}
if (num1 < 0 || num2 < 0 || num3 < 0){
    return 'Hay negativos';}
if (num3 > num1 && num3 > num2){
    return num3 + 1;}
if (num1 === 0 || num2 === 0 || num3 === 0){
    return 'Error';}
return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
}

function esVerdadero(valor){

    if (valor === true || valor === 1 || valor === ' ' || valor === [] || valor === {}){
        return 'soy verdadero';}
    if (valor === false || valor === 0 || valor === undefined || valor === null || valor === '')
        return 'Soy falso';

}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  
}

function tieneTresDigitos(numero){
  
  if (numero < 1000 && numero > 99){
    return true;}
  return false;
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
