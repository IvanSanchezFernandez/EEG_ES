

function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == true && document.getElementById("q1c").checked == true && document.getElementById("q1d").checked == false && document.getElementById("q1e").checked == true) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct! <br><br> La presencia de descargas epileptiformes (de cualquier tipo) en el EEG significa que el paciente tiene una predisposición a tener crisis epilépticas. Esto es común a todos los tipos de actividad epileptiforme. <br><br>Hay un beneficio en identificar los tipos de descarga epileptiforme: algunos tipos de actividad epileptiforme son más típicos de algunos tipos de síndromes epilépticos, por lo que identificar el tipo de descarga epileptiforme puede ayudar a identificar algunos síndromes. <br><br>A pesar de que algunos tipos de actividad epileptiforme aparecen más frecuentemente como focales o generalizados (por ejemploe, los complejos punta-onda tienden a ser generalizados, mientras que las ondas agudas tienden a ser focales), cualquier tipo de actividad epileptiforme puede ser focal o generalizada.<br><br>Cómo de puntiaguda es la actividad epileptiforme o el tipo de actividad epileptiforme no determinan el riesgo de epilepsia o su gravedad.<br>";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG5_img/Q1.2.png";
		document.getElementById("answerQ1_picture2").src = "EEG5_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "Tanto la actividad epileptiforme con contornos muy afilados (figura de arriba) y la actividad epileptiforme con contornos menos afilados (figura de abajo) significan una predisposición a tener crisis epilépticas. <br><br>No se pueden extraer conclusiones sobre riesgo o gravedad basándose en cómo de afilada sea la actividad epileptiforme o en el tipo de actividad epileptiforme (aunque el tipo de síndrome epiléptico puede dar información sobre riesgo y gravedad).<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Esto no es correcto. <br><br>Asegúrate de que has marcado todas las respuestas correctas y no has marcado ninguna de las respuestas incorrectas.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "¡Inténtalo de nuevo!";

}


}






function checkQ2() {

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡¡Correcto!! <br><br>Es importante ser preciso en la descripción del EEG, pero medir cada descarga epileptiforme es un desperdicio absurdo de recursos.<br><br>Las descargas epileptiformes más estrechas en este segmento del EEG son puntas y las más anchas son ondas agudas. Por lo tanto, describir un EEG como una combinación de puntas y ondas agudas es apropriado sin detallar cuáles son qué.<br><br>No hay consecuencia práctica en misclasificar una punta como una onda aguda o viceversa. No pongas demasiado esfuerzo en diferenciar entre puntas y ondas agudas.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No. <br><br>En un EEG puede haber cientos o miles de descargas epileptiformes. ¿Cuánto esfuerzo supondría medirlas todas? ¿Cuál sería la ventaja clínica de esta estrategia?.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br>¡Inténtalo de nuevo!";

}

}








function checkCC1() {

	if (document.CC1.CC1q1.value == "a" && document.CC1.CC1q2.value == "c" && document.CC1.CC1q3.value == "e") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡Sí! <br><br>El EEG muestra complejos punta-onda difusos con una frecuencia aproximada de 1-2.5 Hz. Debe decirse que este ejemplo no tiene la mejor morfología de complejos punta-onda, pero entre las opciones en la pregunta, complejos de punta-onda lentos es la mejor opción.<br><br>Los últimos 2 segmentos del EEG muestran un cambio abrupto en el patrón del EEG con atenuación difusa del voltaje y actividad rápida superimpuesta. Esto es la característica principal de las crisis epilépticas generalizadas tónicas..";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
		document.getElementById("answerCC1_picture").src = "EEG5_img/CC1.6.png";
		document.getElementById("answerCC1_picture2").src = "EEG5_img/CC1.7.png";
		document.getElementById("afterCC1_picture").innerHTML = "La combinación de complejos de punta-onda lentos (1-2.5 Hz) y crisis epilépticas generalizadas tónicas es muy sugestiva de <a href='https://pubmed.ncbi.nlm.nih.gov/19081517/' target='_blank'>síndrome de Lennox-Gastaut</a>, uno de las encefalopatías epilépticas en niños.<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡No! <br><br>Mira bien al EEG y, especialmente, a las porciones dentro de los rectángulos rojos";
		document.getElementById("after_submitCC1").style.background = "red";
		document.getElementById("answerCC1_picture").src = "EEG5_img/CC1.6.png";
		document.getElementById("answerCC1_picture2").src = "EEG5_img/CC1.7.png";
		document.getElementById("afterCC1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}



