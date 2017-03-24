// Event Listener #1: When you click on the header once it adds a paragraph element below the h1

var mainHeader = document.getElementById('mainHeader');

mainHeader.addEventListener('click', function () {
	var p = document.createElement('p');
	p.innerHTML = 'And his name is Ese´!';
	document.getElementById('mainHeader').appendChild(p);
});

// Event Listener #2: When you mouseover the header the color changes to green

var mainHeader = document.getElementById('mainHeader');

mainHeader.addEventListener('mouseover', function (event) {
	event.target.style.color = '#CFDBC5';
});

// Event Listener #3: When you...
