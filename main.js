function formdata(){
	console.log("Ici au moins");
	let town = document.getElementById("town").value;
	//var country = document.getElementById("country").value();
	findSound(town);
}

function findSound(town){
	console.log("To play audio");
	const audioOptions = ["CSLounge"];
	const options = [];
	if (audioOptions.includes(town)) {
		console.log("There carte blanche");
		var audio = new Audio('sounds/' + town + '.m4a');//CSLounge
		audio.play();
	} else {
		for (let i = 0; i < audioOptions.length; i++) {
			if (audioOptions[i].includes(town)) {
				options.push(audioOptions[i]);
			}
		}
		console.log("OPTIONS: " + options[0] + ".m4a");
		var audio = new Audio('sounds/' + options[0] + '.m4a');//CSLounge
		audio.play();
	}
	console.log("Playing audio");
}