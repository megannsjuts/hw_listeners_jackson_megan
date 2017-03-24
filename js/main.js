var mainHeader = document.getElementById('mainHeader');

mainHeader.addEventListener('click', function () {
	var p = document.createElement('p');
	p.innerHTML = 'And his name is Ese´!';
	document.getElementById('mainHeader').appendChild(p);
});
