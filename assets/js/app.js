var img = document.getElementsByClassName('animal');
var select = document.getElementById('select');

select.onchange = function (){
	if (select.value == "original") {
		classImage("original");
	}
	if (select.value == "blanco-negro") {
		classImage("blanco-negro");
	}
	if (select.value == "invertir-colores") {
		classImage("invertir-colores");
	}
	else if (select.value == "sepia"){
		classImage("sepia");
	}
}
function classImage(addClass){
	for (var i = 0; i < img.length; i++) {
			img[i].classList.remove("blanco-negro");
			img[i].classList.remove("invertir-colores");
			img[i].classList.remove("sepia");
			img[i].classList.remove("original");
			img[i].classList.add(addClass);
		}
}
