function formdata(){
	var streetAddress = document.getElementById("address").value();
	var country = document.getElementById("country").value();
	findSound();
}

function findSound(){
	var audio = new Audio('sounds/CSLounge.m4a');
	audio.play();
}
