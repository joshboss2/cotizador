//declaracion de variables

var budget = 2000;
var charge0 = 0;
var charge1 = 0.1;
var charge2 = 0.2;
var charge3 = 0.3;
var charge4 = 0.35;
var charge5 = 0.05;

// ingreso de nombre
var name = prompt('¿Cuál es tu nombre?');
alert('¡Hola ' + name + ', encantado de verte!');

// ingreso de edad
var age = prompt ('¿Cuál es tu edad?');

if (age < 18){
    alert("lamento Informarte que este formulario es para mayores de edad")
} 
    
// ingreso de estado 
var status = prompt ('¿cuál es es tu estado civil?  (soltero/casado)');


if (status == 'casado'){

    // subingreso de datos para pareja

    var partner = prompt ('¿Cuál es el nombre de tu pareja');
    var agepartner = prompt ('que edad tiene tu pareja');
    if (agepartner < 18){
        alert(" por politicas y normas regidas ante la sociedad omitiremos la informacion de tu pareja")
    } 
    
}else if (status == 'soltero'){

    
} else {
    alert('Me temo que no reconozco tu estado civil');
}

// ingreso de datos de hijos

var conditionalguys = prompt ('¿tienes hijos que gustarias asegurar? (si/no)');

if (conditionalguys == 'si' ) {
    var guysamount = prompt('cuantos hijos gustarias agregar a tu seguro');

} else if (conditionalguys == 'no') {

} else { alert('lo Lamento no reconozco la respuesta indicada responde si/no'); }

// ingreso para propiedades

 var conditionalproperties = prompt ('existen prepiedades a tu numbre?')
 if (conditionalproperties == 'si'){ 
    var properties = prompt('cuantas propiedades existen a tu nombre');
    if (properties >= 1 || properties <=999){

  }

     } else if (conditionalproperties == 'no') {

    
} else {alert ('lo Lamento no reconozco la respuesta indicada responde si/no'); }


// ingreso para sueldo

     var salary = prompt ('a cuanto asciende tu salario mensual estimado ');

     if (salary >= 1 || salary <=9999999999){

        alert('perfecto, eso es todo. presiona aceptar para generar tu cotizacion');

}else { 
    alert ('lo lamento no reconozco este comando');

}

// operaciones

// cargo por edad
if (age >17 && age <25){

    var fee_0 = parseFloat (budget) * parseFloat(charge1)

} else if (age >14 && age <50){

    var fee_0 = parseFloat (budget) * parseFloat(charge2)

} else if (age >49){

    var fee_0 = parseFloat (budget) * parseFloat(charge3)

} 

// cargo por pareja (si lo hay)

if (agepartner >17 && agepartner <25){

    var fee_1 = parseFloat (budget) * parseFloat(charge1)

} else if (agepartner >14 && agepartner <50){

    var fee_1 = parseFloat (budget) * parseFloat(charge2)

} else if (agepartner >49){

    var fee_1 = parseFloat (budget) * parseFloat(charge3)

} 

// cargo por hijos

var fee_2 = parseFloat (budget) * parseFloat (charge2) * parseFloat(guysamount)

// cargo por propiedades 

var fee_3 = parseFloat (budget) * parseFloat (charge4) * parseFloat(properties)

// cargo por sueldo

var fee_4 = parseFloat (salary) * parseFloat(charge5)

// salida de datos ***********

document.write('<br>resumen de su cotizacion' + '<br>')
document.write('<br>nombre de quien requiere: ' + name +' edad: ' + age + '<br>');
if (status == 'casado') {
    document.write('<br>conyuge: ' + partner + ' edad: ' + agepartner + '<br>');
}
if (conditionalguys == 'si'){
    document.write('<br>hijos que gusta asegurar: ' + guysamount + '<br>');
}
document.write('<br>propiedades registradas: ' + properties + '<br>');
document.write('<br>sueldo mensual: ' + salary + '<br>');
document.write ('<br>desglose de extra cargos: <br>')
document.write ('cargos extras:<br> ');
document.write ('cargos basados en la edad del asegurado: ' + fee_0 + '<br>');
if (status == 'casado'){
    document.write ('cargos basados en la edad de su pareja: '+ fee_1 + '<br>');
}
if (conditionalguys == 'si'){
    document.write ('cargos basados en la cantidad de hijos a a segurar: '+ fee_2 + '<br>');
}
if (conditionalproperties == 'si') {
    document.write ('cargos en base a cantidad de propiedades (5%): '+ fee_3 + '<br>');
}

document.write ('cargo en base a sueldo (5%): '+ fee_4 + '<br>');
document.write ('precio base de seguro: ' + budget)





