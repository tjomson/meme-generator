//Metode til at loade det valgte billede
function loadFile(event) {
	var image = document.getElementById('meme');
	image.src = URL.createObjectURL(event.target.files[0]);
	//Billede og label vises
	document.getElementById("meme").hidden = false;
	document.getElementById("memeText").hidden = false;
};

//Metode til at sætte teksten på memet
function setMemeText() { 
	var memeLabel = document.getElementById("memeText");
	var givenText = document.getElementById("textInput").value;
	memeLabel.innerHTML = givenText;
} 

//Metode til at sætte farven
function setTextColor() {
	var memeLabel = document.getElementById("memeText");
	var colorPicker = document.getElementById("colors");
	var color = colorPicker.value;
	memeLabel.style.color = color;
}

//Metode til at sætte skriftstørrelsen
function setFontSize() {
	var memeLabel = document.getElementById("memeText");
	var fontSizeInput = document.getElementById("fontSize");
	var fontSize = fontSizeInput.value;
	memeLabel.style.fontSize = fontSize + "px";
}

//Metode til at sætte placeringen af teksten
function setPlacement() {
	var memeLabel = document.getElementById("memeText");
	var x = document.getElementById("xPlacement").value;
	var y = document.getElementById("yPlacement").value;
	//Placeringen er relativ i forhold til billedet, så der benyttes procent
	memeLabel.style.left = x + "%";
	memeLabel.style.top = y + "%";
}