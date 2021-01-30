



function checkQ1() {

	if (document.question1.question.value == "c") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡¡Correcto!! <br><br> No hay rasgos definitivos que permitan la identificación de la actividad epileptiforme siempre. De todas formas, elementos con un perfil afilado que rompen el ritmo, y tienen un campo eléctrico que tiene sentido anatómicamente son probablemente actividad epileptiforme. Cuantos más de esos rasgos, más probable es que sea actividad epileptiforme. Cuantos menos de esos rasgos, menos probable que sea actividad epileptiforme. Puedes encontrar excepciones a todas estas reglas generales, pero estas reglas generales ayudan (un montón) en la gran mayoría de los casos.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = " No hay rasgos definitivos que permitan la identificación de la actividad epileptiforme siempre. De todas formas, elementos con un perfil afilado que rompen el ritmo, y tienen un campo eléctrico que tiene sentido anatómicamente son probablemente actividad epileptiforme. Cuantos más de esos rasgos, más probable es que sea actividad epileptiforme. Cuantos menos de esos rasgos, menos probable que sea actividad epileptiforme. Puedes encontrar excepciones a todas estas reglas generales, pero estas reglas generales ayudan (un montón) en la gran mayoría de los casos.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}

}


