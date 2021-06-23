let btnfarenheit = document.getElementById('farenheit');
let btnkelvin = document.getElementById('kelvin');
let temperatura = document.getElementById('temperatura').value;

let resultado = document.getElementById('resultado');
let resultado2 = document.getElementById('resultado2');

/* temperatura = 23 */

var temp = temperatura

btnfarenheit.addEventListener('click', event => {
let far = temperatura * 9/5 + 32;
resultado.textContent = `el resultado en fahrenheit es: ${far}°f`;  
}) 

btnkelvin.addEventListener('click', event => {
var kel= temperatura + 273.15;
resultado2.textContent = `el resultado en kelvin es: ${kel}°K`;  
})


function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
