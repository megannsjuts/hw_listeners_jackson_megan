document.addEventListener('submit', function (text) {
	text.preventDefault();
	console.log('The firstName is: ' + firstNameInput.value);
	console.log('The lastName is: ' + lastNameInput.value);
	console.log('The email is: ' + emailInput.value);
	console.log('The message is: ' + messageInput.value);
});

var firstNameInput = document.getElementById('firstName');
var lastNameInput = document.getElementById('lastName');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
