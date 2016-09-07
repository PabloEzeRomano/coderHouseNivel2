var diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

for  (pos in diasDeLaSemana) {
	if (diasDeLaSemana[pos] === diasDeLaSemana[0] || diasDeLaSemana[pos] === diasDeLaSemana[6]) {
		console.log('Hoy es ' + diasDeLaSemana[pos]);
	}
}