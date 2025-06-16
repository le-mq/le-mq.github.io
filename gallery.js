/*Name this external file gallery.js*/

function upDate(previewPic) {
	let imageDiv = document.getElementById("image");
	imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
	imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
	let imageDiv = document.getElementById("image");
	imageDiv.style.backgroundImage = "";
	imageDiv.innerHTML = "Di chuột qua hình ảnh bên dưới để hiển thị tại đây";
}

function addTabFocus() {
	console.log("Page loaded – addTabFocus triggered");
	let images = document.getElementsByClassName("preview");
	for (let i = 0; i < images.length; i++) {
		images[i].setAttribute("tabindex", "0");
	}
}
