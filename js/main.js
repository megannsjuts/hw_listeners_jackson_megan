document.addEventListener('submit', function () {
	text.preventDefault();
	console.log('The firstName is: ')
	console.log('The lastName is: ')
	console.log('The email is: ')
	console.log('The message is: ')
});

var firstNameInput = document.getElementById('firstName');
var lastNameInput = document.getElementById('lastName');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
