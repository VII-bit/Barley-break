function shuffle(array) {
  for (let i = array.length - 2; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let winArr = [1,2,3,4,5,6,7,8,''];
let arr = [1,2,3,4,5,6,7,8,''];
shuffle(arr);


let noArr = [td1,td2,td3,td4,td5,td6,td7,td8,td9];

for (let i = 0; i < noArr.length; i++) {
    noArr[i].innerHTML = arr[i];
}

if (noArr == winArr) {
	alert('WIN!!!!!');
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

	alert(targArr[0].innerHTML);

	targNull = '';

	for (let i = 0; i < targArr.length; i++) {
		if (targArr[i]) {
			targNull = targArr[i];
			break;
		}
	}

	alert(targNull);

		//document.getElementById(secondElem).innerHTML = targElem.innerHTML;
		//targElem.innerHTML = '';
		
}




