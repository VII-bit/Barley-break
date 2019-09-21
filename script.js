window.addEventListener('click', func);

function func() {
	//alert( parseInt(event.target.innerHTML));
	if (event.target.innerHTML == '') {
		event.target.innerHTML = 'test';
	}
}

