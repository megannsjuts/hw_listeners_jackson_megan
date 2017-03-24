var mainHeader = document.getElementById('mainHeader');

var i = 1;

mainHeader.addEventListener('click', function () {
	var p = document.createElement('p');
	p.innerHTML = 'This is click number ' + i++;
	document.body.appendChild(p);
});
