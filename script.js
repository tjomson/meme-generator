var loadFile = function(event) {
	var image = document.getElementById('meme');
	image.src = URL.createObjectURL(event.target.files[0]);
};


function setMemeText() { 
	var memeLabel = document.getElementById("memeText");
	var givenText = document.getElementById("textInput").value + "";
	memeLabel.innerHTML = givenText;

} 