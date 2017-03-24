var mainHeader = document.getElementById('mainHeader');

mainHeader.addEventListener('click', function () {
	var p = document.createElement('p');
	p.innerHTML = 'This is click number ' + i++;
	document.body.appendChild(p);
});
