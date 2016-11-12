// tables script

var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = womensNames.concat(mensNames);
console.log(allNames);

var newName = prompt('wpisz imię');

if (allNames.indexOf(newName) == -1) {
	var x = allNames.push(newName);
}
alert(allNames);
console.log(allNames);
