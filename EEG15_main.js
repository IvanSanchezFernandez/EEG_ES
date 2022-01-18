

function checkQ1() {

	if (document.question1.question.value == "c") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡¡Correcto!!<br><br>El EEG mide la diferencia de voltaje entre dos puntos.<br><br>En particular, el voltaje es la diferencia de potencial eléctrico entre dos puntos.<b>No hay un voltaje absoluto en un punto individual.</b>. El voltaje siempre es la diferencia en potencial eléctrico entre puntos.<br><br>En el EEG esto se traduce en el voltaje siendo la diferencia entre dos electrodos contiguos (en un montaje bipolar) o entre el electrodo de interés y algún(os) electrodo(s) de referencia (en el caso de un montaje referencial).";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Piensa en lo que ves en un EEG.<br><br>¿Ves valores de electrodos individuales o ves dos electrodos distintos comparados?<br><br>¿En qué unidades se miden las defleciones verticales en el EEG?";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ2() {

	if (document.getElementById("q2a").checked == true && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == true && document.getElementById("q2d").checked == true && document.getElementById("q2e").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto! <br><br>La nariz, las orejas, o la parte de atrás del cuello son buenas referencias porque típicamente no tienen artefacto muscular o artefacto de movimiento y no capturan actividad cerebral: son relativamente silentes.<br><br>La media de todos los electrodos de la cabeza también son una buena referencia porque cancelan las defleciones en direcciones opuestas de los distintos electrodos y el resultado es una referencia bastante silente.<br><br>Un electrodo precordial captura la actividad eléctrica del corazón (que es de mucho mayor voltaje que el del cerebro) y, por lo tanto, es una referencia 'contaminada'.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "no es correcto";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ3() {

	if (document.question3.question.value == "b") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡¡Correcto!! <br><br>La actividad eléctrica generada en el cerebro es diminuta (del orden de microvoltios). Esto es de varios órdenes de magnitud más pequeño que la actividad eléctrica generada en el corazón o en las máquinas alrededor del paciente (que son del orden de milivoltios).<br><br>Las frecuencias generadas por la actividad eléctrica en el cerebro se solapan con las frecuencias generadas en el corazón o en otro ruido eléctrico alrededor del paciente.<br><br>La pregunta principal es: ¿cómo somos capaces de medir la actividad eléctrica diminuta que viene del cerebro?<br><br>La respuesta está de nuevo relacionada con las diferencias de voltaje. Los electrodos en el cuero cabelludo están cerca del cerebro y hay una diferencia de voltaje entre las distintas regiones cerebrales, incluso cuando esas diferencias de voltaje son diminutas. En contraste, la actividad eléctrica que viene de lejos llega a la cabeza con aproximadamente el mismo voltaje. Por lo tanto, la corriente eléctrica captada por cada electrodo en el cuero cabelludo es la misma y no hay diferencias de voltaje entre los electrodos (el ruido se cancela).";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Piensa en diferencias de voltaje.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ4() {

	if (document.question4.question.value == "b") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡¡Correcto!! <br><br>El modelo superior es una gran simplificación de la realidad. Aparte de los potenciales postsinápticos excitadores hay también potenciales postsinápticos inhibidores. También, las neuronas no siempre están orientadas perpendicularmente a la superficie del cerebro. Además, la superficie del cerebro no siempre es perpendicular a la superficie del cuero cabelludo (hay surcos y fisuras). Y el cerebro definitivamente no es una esfera. En resumen, la conclusión de que la máxima negatividad en el EEG en el cuero cabelludo marca el área del cerebro donde las defleciones se generan es una gran simplificación de la realidad: funciona decentemente muchas veces, así que us una buena norma general, pero recuerda que es simplemente una normal general y falla muchas veces. Si la localización es crucial en tu paciente, necesitas a alguien que haga <a href='https://pubmed.ncbi.nlm.nih.gov/31019487/' target='_blank'>localización del origen (source localization)</a>.<br><br>De todas formas, si piensas que el cerebro es una esfera perfecta y todas las neuronas corticales son perfectamente perpendiculares a la superficie del cerebro, por favor, por favor, crea tu propia teoría de la conspiración, únete a cientos de personas que piensen como tú en internet y organiza manifestaciones frecuentes con mensajes absurdos en carteles bien grandes. Estamos en el siglo XXI y nunca ha habido una época mejor para reirse.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Bueno,...espero que hayas señalado esa respuesta accidentalmente. Si no, por favor, revisa anatomía.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ5() {

	if (document.getElementById("q5a").checked == true && document.getElementById("q5b").checked == true && document.getElementById("q5c").checked == true && document.getElementById("q5d").checked == true && document.getElementById("q5e").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "¡Exáctamente! <br><br>Parece que hay una reversión de fase en P7,..., y en C3,..., y en F8. Si posicionas la apareciencia del campo eléctrico en el cuero cabelludo, aparecería como la figura de abajo:";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG15_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "No parece muy fisiológico. También, fíjate que, en cada reversión de fase, la negatividad sólo afecta unos pocos electrodos alrededor de la reversión de fase (en vez de disminuir progresivamente en un campo más amplio afectando a más electrodos).<br><br>Localizar no sólo te ayuda a localizar la actividad del EEG. También te ayuda a identificar artefactos en el EEG.<br><br>Los campos eléctricos en este segmento del EEG no tienen sentido, lo que te debe hacer pensar de un origen no cerebral de la actividad rítmica. Este paciente está recibiendo fisioterapia en el pecho y las defleciones rítmicas son artefacto, no crisis epilépticas.<br><br>Otras personas pueden ser engañadas por esta actividad y pueden creer que es una crisis epiléptica, pero no en tu caso, porque ya sabes cómo localizar.<br><br>¡Muy bien!";


	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No es correcto.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "";
		document.getElementById("afterQ5_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}



