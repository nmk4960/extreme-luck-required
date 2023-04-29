let trys = 0;
function luck() {
	let res;
	res = dice();
	if(res === 50) {
		document.querySelector('button').disabled = true;
		document.querySelector('button').innerText = "Refresh the page.";
		res = "Yes!";
		var audio = document.getElementById("myAudio");
		audio.play();
	}
	else res = "No! Total tries:";
	trys++;
	document.getElementById("res").innerHTML = res;
	document.getElementById("trys").innerHTML = trys;
}

function dice() {
	const random_number1 = Math.floor(Math.random() * 100);
	const random_number2 = Math.floor(Math.random() * 100);
	let res = 0, i = 0;;

	while(i < 50) {
		if(random_number1 == random_number2) res++;
		console.log(res);
		i++;
	}
	return res;
}
