var weekend = ['sabado', 'domingo'];
var input = prompt('Ingrese un día de la semana');
var week = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
var message = 'Usted ingreso un valor no valido';

for(var pos = 0; pos < week.length; pos++) {
    if(input.toLowerCase() === week[pos]) {
        message = 'Es un día hábil';
        break;
    } else if (pos < weekend.length && input.toLowerCase() === weekend[pos]) {
        message = 'Es un día de fin de semana';
        break;
    }
}

alert(message);
