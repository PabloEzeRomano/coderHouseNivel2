var week = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
var weekend = ['Sabado', 'Domingo'];
var array = [];

function printNameLastName(firstName, lastName) {
    console.log('Hola '+firstName+' '+lastName);
}

function printDays(inputDay) {
    if(inputDay.toLowerCase() === 'no habil') {
    	array = weekend;
    } else {
		array = week;
	}

	for(i=0; i<array.length; i++) {
            console.log(array[i]);
        }
}

printNameLastName(prompt('Ingrese su nombre'), prompt('Ingrese su apellido'))
printDays(prompt('Qué día desea ver? Habiles/No habil'));
