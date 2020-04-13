var loadFile = function(event) {
	var image = document.getElementById('meme');
	image.src = URL.createObjectURL(event.target.files[0]);
};
