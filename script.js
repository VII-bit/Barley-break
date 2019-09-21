function shuffle(array) {
  for (let i = array.length - 2; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let winArr = ['1','2','3','4','5','6','7','8',''];
let arr = [1,2,3,4,5,6,7,8,''];
shuffle(arr);

let noArr = [td1,td2,td3,td4,td5,td6,td7,td8,td9];

for (let i = 0; i < noArr.length; i++) {
    noArr[i].innerHTML = arr[i];
}

window.addEventListener('click', func);

function func() {

	let targElem = event.target;

	let targArr = [
		"td" + (parseInt(targElem.id.slice(2)) + 1),
		"td" + (parseInt(targElem.id.slice(2)) + 3),
		"td" + (parseInt(targElem.id.slice(2)) - 1),
		"td" + (parseInt(targElem.id.slice(2)) - 3)
	]

	let result = targArr.filter(td => parseInt(td.slice(2)) <= 9 &&
		parseInt(td.slice(2)) >= 0); //убирает несуществующие поля


	if (result == '') {
		return;
	}

	targNull = '';

	for (let i = 0; i < result.length; i++) {
		if (document.getElementById(result[i]) === null) return;
		else if (document.getElementById(result[i]).innerHTML == '') {
			targNull = document.getElementById(result[i]).id;
			break;
		}
	}

	if (targNull == '') {
		return;
	}

	let temp = targElem.innerHTML;
	targElem.innerHTML = document.getElementById(targNull).innerHTML;
	document.getElementById(targNull).innerHTML = temp;

	let finArr = [];

	for (let i = 0; i < noArr.length; i++) {
		finArr[i] = noArr[i].innerHTML;
	}

	if (finArr == winArr) { //don't work
		alert('WIN!!!!!');
	}
}