

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  
	if (ev.target.id == document.getElementById(data).getAttribute('data-div')) {
 		alert("¡Correcto!");
		ev.target.appendChild(document.getElementById(data));
}
	else {
     		alert("Asociación incorrecta. Inténtalo de nuevo.");
  }

}




function checkQ1() {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "La frecuencia de una crisis de ausencia típica es de aproximadamente 3 Hz y su inicio y final son abruptos y claramente diferenciados del resto del EEG. La hiperventilación es el método más eficaz para provocar crisis de ausencia típicas en la epilepsia de ausencias de la infancia (aunque la mayoría de pacientes con epilepsia de ausencias de la infancia no tendrán una crisis de ausencia durante la hiperventilación).<br><br>La epilepsia mioclónica juvenil tiene crisis de ausencia con complejos punta-onda a una frecuencia de aproximadamente 4 Hz a 5 Hz. Las polipuntas son típicas de las ausencias en la epilepsia mioclónica juvenil. El inicio y el fin de esas crisis epilépticas son claramente diferenciadas del resto del EEG. La estimulación luminosa intermitente es el estímulo más típico para las crisis epilépticas en la epilepsia mioclónica juvenil (de todas formas, la mayoría de los pacientes con epilepsia mioclónica juvenil no desarrollarán una crisis epiléptica con estimulación luminosa intermitente).<br><br>Las crisis de ausencia en el síndrome de Lennox-Gastaut son atípicas porque son más lentas (1Hz a 2.5 Hz) y su inicio y final son progresivos, mezclandose con el resto del EEG (que es lento y anormal).";
		document.getElementById("after_submitQ1").style.background = "lightgreen";	
}










function checkQ2() {

	if (document.question2.question.value == "a") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto!<br><br>Para ser totalmente claros desde el inicio: las crisis de ausencia típicas tienen un inicio generalizado.<br><br>De todas formas, raramente, las crisis epilépticas con un inicio focal tienen una apariencia casi indistinguible de una crisis de ausencia típica.<br><br>Si ves un inicio que consistentemente aparece en el mismo lado en varias crisis epilépticas, debes sospechar que esas crisis epilépticas no son crisis de ausencia típicas, sino crisis epilépticas focales que generalizan rápidamente. Si estás interesado en aprender sobre los circuitos neuronales que llevan a la generalización de las crisis epilépticas puedes encontrar información útil <a href='https://pubmed.ncbi.nlm.nih.gov/19524522/' target='_blank'>aquí</a> y <a href='https://pubmed.ncbi.nlm.nih.gov/23506484/' target='_blank'>aquí</a>.<br><br>Los inicios pueden alternar de lado apareciendo algunas veces en el hemisferio derecho y otras en el hemisferio izquierdo y esto no sugiere que la crisis tenga un inicio focal.<br><br>Una crisis de ausencia típica puede no tener ninguna lateralización inicial y tener inicio generalizado.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No.<br><br>¿Cuándo sospecharías de un origen focal para una crisis epiléptica?";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "¡Inténtalo de nuevo!";

}
      
}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == true && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == false && document.getElementById("q3e").checked == false && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto! <br><br> Esta es una crisis epiléptica con un inicio generalizado y una frecuencia que varía, pero que está alrededor de 10-20Hz.<br><br>La correlación clínica más común de las crisis epilépticas generalizadas con polipuntas rápidas son las crisis tónicas generalizadas.<br><br>Hay una evolución en frecuencia y amplitud en esta crisis epiléptica.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG11_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "Incluso si la frecuencia de las puntas en muy rápida en toda las crisis epiléptica, puedes ver algo de evolución con periodos de aceleración y periodos de enlentecimiento. Hay también algo de evolución en la amplitud. Compara el segundo marcado por el primer corchete rojo con el segundo marcado con el segundo corchete rojo. En el primer corchete rojo la frecuencia es alta y la amplitud relativamente baja. En el segundo corchete la frecuencia es baja y la amplitud relativamente alta. La evolución en frecuencia y amplitud son rasgos característicos mayores de las crisis epilépticas.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No es correcto.<br><br>Recuerda que la evolución en frecuencia y amplitud es uno de los rasgos más característicos de las crisis epilépticas.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG11_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkCC1() {

	if (document.CC1.CC1q1.value == "e" && document.CC1.CC1q2.value == "c") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡¡Correcto!! <br><br>Muchas crisis epilépticas no se ajustan perfectamente a las categorías más típicas (crisis the ausencia típicas, crisis epilépticas con polipuntas rápidas, o crisis epilépticas focales con evolución en frecuencia y amplitud).<br><br>Los primeros tres segmentos del EEG muestran complejos de punta-onda de 2.5 Hz a 3 Hz irregulares con evolución en frecuencia y amplitud y desaparición progresiva como ondas lentas difusas. En este paciente, estas crisis epilépticas tuvieron una presentación clínica con mirada perdida con el cuerpo tenso.<br><br>Los dos últimos segmentos del EEG muestran un brote de complejos punta-onda generalizados con predominancia frontal. En este paciente, estas crisis epilépticas tuvieron una presentación clínica de una breve sacudida de todo el cuerpo similar a una crisis epiléptica mioclónica.";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
		document.getElementById("afterCC1_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡No!";
		document.getElementById("after_submitCC1").style.background = "red";
		document.getElementById("afterCC1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}







