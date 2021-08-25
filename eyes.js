const balls = document.getElementsByClassName("ball");
const animalCanvas = document.getElementById("stackcontainerbottom");
const animalSelection = document.getElementById("animalSelect");
const leftEye = document.getElementById("leftEye");
const rightEye = document.getElementById("rightEye");

document.ontouchmove = (event) => {
	const x = (event.touches[0].clientX * 100) / window.innerWidth + "%";
	const y = (event.touches[0].clientY * 70) / 550 + "%"; //height based on eye spacing from top of window

	for (let i = 0; i < 2; i++) {
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].transform = "translate(-" + x + ",-" + y + ")";
	}
};

document.onmousemove = (event) => {
	const x = (event.clientX * 100) / window.innerWidth + "%";
	const y = (event.clientY * 70) / 550 + "%";

	for (let i = 0; i < 2; i++) {
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].transform = "translate(-" + x + ",-" + y + ")";
	}
};

function switchCharacter() {
	let animalSelection = document.getElementById("animalSelect");
	animalCanvas.innerHTML = eval(animalSelection.value);

	switch (animalSelection.value) {
		case "puppy":
			leftEye.style.left = "142px";
			leftEye.style.top = "47px";
			rightEye.style.left = "280px";
			rightEye.style.top = "47px";
			break;

		case "lion":
			leftEye.style.left = "141px";
			leftEye.style.top = "42px";
			rightEye.style.left = "264px";
			rightEye.style.top = "42px";
			break;

		case "rat":
			leftEye.style.left = "146px";
			leftEye.style.top = "57px";
			rightEye.style.left = "305px";
			rightEye.style.top = "57px";
			break;

		case "cat":
			leftEye.style.left = "140px";
			leftEye.style.top = "30px";
			rightEye.style.left = "294px";
			rightEye.style.top = "30px";
			break;

		case "leopard":
			leftEye.style.left = "138px";
			leftEye.style.top = "45px";
			rightEye.style.left = "300px";
			rightEye.style.top = "45px";
			break;

		case "elephant":
			leftEye.style.left = "156px";
			leftEye.style.top = "75px";
			rightEye.style.left = "319px";
			rightEye.style.top = "75px";
			break;

		case "wolf":
			leftEye.style.left = "153px";
			leftEye.style.top = "55px";
			rightEye.style.left = "302px";
			rightEye.style.top = "55px";
			break;

		case "tiger":
			leftEye.style.left = "138px";
			leftEye.style.top = "45px";
			rightEye.style.left = "300px";
			rightEye.style.top = "45px";
			break;
	}
}

function showPuppy() {
	animalCanvas.innerHTML = puppy;
	leftEye.style.left = "142px";
	leftEye.style.top = "47px";
	rightEye.style.left = "280px";
	rightEye.style.top = "47px";
}

function nameFriend() {
	let renamer = document.getElementById("namePlate");
	let newName = document.getElementById("fname");
	let newNamePlate = "<h1>" + newName.value + "</h1>";

	renamer.innerHTML = newNamePlate;
}

function selectAspect(clicked_id) {
	let thisId = clicked_id;
	console.log(thisId);
	let thisItem = document.getElementById(thisId);
	thisItem.style.fill = document.getElementById("oneColor").value;
	thisItem.style.stroke = document.getElementById("twoColor").value;
}
