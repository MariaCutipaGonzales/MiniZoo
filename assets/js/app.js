var img = document.getElementsByClassName('animal');
var select = document.getElementById('select');

select.onchange = function (){
	if (select.value == "original") {
		removeClass();
	}
	if (select.value == "blanco-negro") {
		removeClass();
		for (var i = 0; i < img.length; i++) {
			img[i].classList.add("blanco-negro");
		}
	}
	if (select.value == "invertir-colores") {
		removeClass();
		for (var i = 0; i < img.length; i++) {
			img[i].classList.add("invertir-colores");
		}
	}
	else if (select.value == "sepia"){
		removeClass();
		for (var i = 0; i < img.length; i++) {
			img[i].classList.add("sepia");
		}
	}
}
function removeClass(){
	for (var i = 0; i < img.length; i++) {
			img[i].classList.remove("blanco-negro");
			img[i].classList.remove("invertir-colores");
			img[i].classList.remove("sepia");
		}
}