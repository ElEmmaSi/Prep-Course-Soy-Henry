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

  if( numero < 2) return false;
  if(numero === 2) return true;
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
  return true;
}

function esVerdadero(valor){

    if (valor === true || valor === 1 || valor === ' ' || valor === [] || valor === {}){
        return 'soy verdadero';}
    if (valor === false || valor === 0 || valor === undefined || valor === null || valor === '')
        return 'Soy falso';

}

function tablaDelSeis(){
  
  let arrayTablaDel6 = []
  for (let i = 0; i < 11; i++) {
        arrayTablaDel6.push(6 * i)
  }
  return arrayTablaDel6
  
}

function tieneTresDigitos(numero){
  
  if (numero < 1000 && numero > 99){
    return true;}
  return false;
  
}

function doWhile(numero) {
  var a = numero;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  }
  while(i < 8);
  return a;
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
