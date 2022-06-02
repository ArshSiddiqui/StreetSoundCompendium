function formdata(){
	console.log("Ici au moins");
	let town = document.getElementById("town").value;
	console.log(town);
	//var country = document.getElementById("country").value();
	findSound(town);
}

function findSound(town){
	console.log("To play audio");
	var audio = new Audio('sounds/' + town + '.m4a');//CSLounge
	audio.play();
	console.log("Playing audio");
}