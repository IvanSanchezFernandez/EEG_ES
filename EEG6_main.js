

function checkQ1() {

	if (document.getElementById("q1a").checked == true && document.getElementById("q1b").checked == true && document.getElementById("q1c").checked == true && document.getElementById("q1d").checked == true && document.getElementById("q1e").checked == true) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Correcto! <br><br> Las variantes normales (como los POSTS) se originan en el cerebro, mientras que los artefactos (como el artefacto del ECG) no se originan en el cerebro.<br><br>Los POSTS pueden ser unilaterales o bilaterales y aparecen típicamente en grupos semirrítmicos, pero pueden aparecer de forma aislada. Su polaridad es positiva (señalan hacia abajo en montajes referenciales).<br>";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No es correcto. <br><br> Aseguráte de que has marcado todas las respuestas correctas y no has marcado ninguna de las respuestas incorrectas.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "¡Inténtalo de nuevo!";

}


}






function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == false && document.getElementById("q2c").checked == true && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == true) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto! <br><br> Una parte importante de leer EEG es ser capaz de reconocer la fase del ciclo sueño-vigilia en la que se está. Fíjate en los artefactos de parpadeo (algunos de ellos marcados con flechas rojas) y en el artefacto muscular (algunos marcados con rectángulos rojos). Este segmento del EEG corresponde a la vigilia. Y los POSTS no ocurren durante la vigilia.<br><br>Los POSTS pueden aparecer brevemente en la fase inicial de la fase II del sueño, pero típicamente desaparecen en la fase II del sueño. ¿Qué elementos esperarías en la fase II del sueño? ondas del vertex y husos del sueño. Ninguno de estos elementos aparecen en este segmento del EEG.<br>";
		document.getElementById("answerQ2_picture").src = "EEG6_img/Q2.2.png";		
                document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Los elementos de forma triangular en los canales posteriores son ondas lambda (algunas de ellas marcadas con círculos rojos). Las ondas lambda tienen la misma morfología (triangular) y localización (occipital) que los POSTS, pero ocurren sólo durante la vigilia y aparecen típicamente en un paciente que está mirando algo (leyendo, mirando una pantalla, mirando algún patrón en la pared...). Cuando encuentras ondas lambda en el EEG, mira el video del EEG y frecuentemente encontrarás al paciente leyendo o fijándose en algo con la vista.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No es correcto. <br><br> Aseguráte de que has marcado todas las respuestas correctas y no has marcado ninguna de las respuestas incorrectas.";
		document.getElementById("answerQ2_picture").src = "EEG6_img/Q2.2.png";	
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "¿Qué son los elementos marcados por las flechas rojas? ¿En qué fase del ciclo sueño-vigilia está este segmento del EEG?<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ3() {

	if (document.question3.question.value == "e") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto!<br><br>Estos elementos son artefacto de parpadeo, no actividad epileptiforme.<br><br>Fíjate en ellos: sólo aparecen en los canales frontales y, a pesar de tener alta amplitud, no hay un campo eléctrico en los canales vecinos. Cierto, el artefacto de parpadeo es normalmente bilateral (los dos ojos normalmente se giran hacia arriba a la vez), pero ¿tienen todos los pacientes dos ojos?";
		document.getElementById("answerQ3_picture").src = "EEG6_img/Q3.2.png";	
		document.getElementById("answerQ3_picture2").src = "EEG6_img/Q3.3.png";	
		document.getElementById("answerQ3_picture3").src = "EEG6_img/Q3.4.png";	
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "Las imágenes de arriba (mismo segmento del EEG en distintos montajes) muestran otros ejemplos de artefacto de parpadeo. El artefacto de parpadeo se reconoce por una deflección de alta amplitud que ocurre sólo o predominantemente en los canales frontales. También, el artefacto de parpadeo no tiene inversión de fase (al contrario que la actividad epileptiforme, que normalmente sí la tiene).<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No.<br><br> ¿Por qué piensas que es la respuesta correcta? ¿Puedes encontrar un campo eléctrico que tenga sentido anatómicamente?";
		document.getElementById("answerQ3_picture").src = "EEG6_img/Q3.2.png";	
		document.getElementById("answerQ3_picture2").src = "EEG6_img/Q3.3.png";	
		document.getElementById("answerQ3_picture3").src = "EEG6_img/Q3.4.png";	
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> Las imágenes de arriba (mismo segmento del EEG en distintos montajes) muestran otros ejemplos del mismo elemento. ¿Lo reconoces ahora?<br><br>¡Inténtalo de nuevo!";

}

}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡Correcto! <br><br> Los elementos con contorno afilado en este EEG aparecen aproximadamente 4 veces en aproximadamente medio segundo, lo que les daría una frecuencia aproximada de 8 Hz (lo que haría poco probable que fueran descargas epileptiformes).<br><br>El campo eléctrico sólo afecta a dos electrodos: P7 y T7, sin afectar otros electrodos cercanos, lo que no tiene mucho sentido anatómicamente (esperarías que el campo eléctrico de una descarga epileptiforme afectara los electrodos cercanos como C3 y P3).<br>";
		document.getElementById("answerQ4_picture").src = "EEG6_img/Q4.3.png";	
		document.getElementById("answerQ4_picture2").src = "EEG6_img/Q4.4.png";		
                document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Su morfología es bastante irregular y algunos tienen varios 'picos' de distinto voltaje. A pesar de que eso ocurre en polipuntas, su morfología es bastante inusual para una descarga epileptiforme. Son artefactos, probablemente relacionados con mal contacto de los electrodos P7 y T7 con el cuero cabelludo.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No es correcto. <br><br> Aseguráte de que has marcado todas las respuestas correctas y no has marcado ninguna de las respuestas incorrectas.";
		document.getElementById("answerQ4_picture").src = "EEG6_img/Q4.3.png";	
		document.getElementById("answerQ4_picture2").src = "";	
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "¿Dónde localizarías esos elementos del EEG en el cuero cabelludo?<br><br>¡Inténtalo de nuevo!";

}


}








function checkCC1() {

	if (document.CC1.CC1q1.value == "b" && document.CC1.CC1q2.value == "d") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡Correcto!<br><br>Este segmento del EEG esta grabado durante el sueño. Los elementos con bordes afilados apuntan hacia abajo en un montaje referencial, por lo que son positivos en la superficie del cuero cabelludo.<br><br>Las descargas epileptiformes son generalmente negativas en superficie. La presencia de descargas positivas en la superficie del cuero cabelludo debe hacerte pensar en algo distinto a las descargas epileptiformes.<br><br>Otra regla general es que si la frecuencia de las descargas es igual o mayor de 6 Hz y no evoluciona, es probablemente alguna variante normal.<br><br>En particular, los elementos en este caso son 14 y 6, una variante normal caracterizada for tener su máximo en la región temporal posterior, tener una amplitud pequeña con morfología afilada, y una frecuencia de o 14 Hz o 6 Hz.<br><br>Otro ejemplo de 14 y 6 se presenta abajo:";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
		document.getElementById("answerCC1_picture").src = "EEG6_img/CC1.3.png";
		document.getElementById("answerCC1_picture2").src = "EEG6_img/CC1.4.png";
		document.getElementById("afterCC1_picture").innerHTML = "Desafortunadamente, muchas veces 14 y 6 se misclasifican como descargas epileptiformes y los pacientes se tratan (incorrectamente) con medicaciones para las crisis epilépticas.<br><br>En gran parte, ser un buen lector de EEG es reconocer las variantes normales.<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡No! <br><br>Otro ejemplo del mismo patrón se presenta abajo:";
		document.getElementById("after_submitCC1").style.background = "red";
		document.getElementById("answerCC1_picture").src = "EEG6_img/CC1.3.png";
		document.getElementById("answerCC1_picture2").src = "EEG6_img/CC1.4.png";
		document.getElementById("afterCC1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}

