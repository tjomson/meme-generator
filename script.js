var loadFile = function(event) {
	var image = document.getElementById('meme');
	image.src = URL.createObjectURL(event.target.files[0]);
	document.getElementById("meme").hidden = false;
	document.getElementById("memeText").hidden = false;
};


function setMemeText() { 
	var memeLabel = document.getElementById("memeText");
	var givenText = document.getElementById("textInput").value + "";
	memeLabel.innerHTML = givenText;
} 

function setTextColor() {
	var memeLabel = document.getElementById("memeText");
	var colorPicker = document.getElementById("colors");
	var color = colorPicker.value;
	memeLabel.style.color = color;
}

function setFontSize() {
	var memeLabel = document.getElementById("memeText");
	var fontSizeInput = document.getElementById("fontSize");
	var fontSize = fontSizeInput.value;
	memeLabel.style.fontSize = fontSize;
}