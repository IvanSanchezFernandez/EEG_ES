
function checkQ1() {

	if (document.getElementById("q1a").checked == true && document.getElementById("q1b").checked == false && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == true && document.getElementById("q1e").checked == false && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Exáctamente! <br><br> El comienzo de este segmento del EEG tiene dos artefactos de parpadeo y, tras el segundo artefacto de parpadeo, el paciente permanece con los ojos cerrados, por lo que aparece un ritmo posterior dominante.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG8_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "El primer artefacto de parpadeo está marcado con una flecha. El ritmo posterior dominante está marcado con rectángulos rojos.<br><br>El ritmo posterior dominante es ligeramente asimétrico (mayor amplitud en el lado derecho) pero todavía dentro de la normalidad.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No es correcto. <br><br>Trata de identificar los elementos marcados por el rectángulo rojo. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG8_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Asegúrate de que has marcado todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == true && document.getElementById("q2f").checked == true) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto!<br><br> Este EEG contiene ondas del vertex que son simétricas alrededor de la línea media (rectángulo rojo grande) y algunos husos del sueño (pequeños rectángulos rojos).<br><br>Aparte de esa actividad normal que define la fase II del sueño, hay puntas y ondas agudas en C4 (flechas rojas). Esta actividad epileptiforme rompe el ritmo y tiene un contorno afilado.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG8_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No es correcto. <br><br>Trata de identificar los elementos marcados por los rectángulos rojos. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "EEG8_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y de no marcar ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ3() {

	if (document.getElementById("q3a").checked == true && document.getElementById("q3b").checked == true && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == true && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto!<br><br> Este EEG contiene ondas del vertex que son simétricas alrededor de la línea media (rectángulo rojo grande) y algunos husos del sueño (rectángulos rojos pequeños).<br><br>No hay actividad epileptiforme en este segmento del EEG.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG8_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No es correcto. <br><br>Trata de identificar los elementos marcados por rectángulos rojos. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG8_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == true && document.getElementById("q4d").checked == false && document.getElementById("q4e").checked == false && document.getElementById("q4f").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡Correcto!<br><br> Este segmento del EEG contiene principalmente ondas lentas (círculos rojos) de alta amplitud (mira el marcador azul que mide el voltage). Esto es lo que define la fase III del sueño.<br><br>Hay puntas en P7 (flechas rojas), lo que hace este segmento del EEG anormal. Esta actividad epileptiforme rompe el ritmo y tiene contornos puntiagudos.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG8_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No es correcto. <br><br>Intenta identificar los elementos marcados por los círculos rojos. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG8_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == true && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == true && document.getElementById("q5f").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "¡Exacto!<br><br> Las partes marcadas en los rectángulos rojos (y la mayoría de este segmento del EEG) consiste de artefacto muscular. El artefacto muscular rítmico, principalmente en las regiones temporales ocurre mientras se mastica porque los músculos masticatorios se contraen y se relajan rítmicamente. Se llama 'artefacto de masticación' y cuando lo ves una vez no lo podrás no detectar de nuevo: tiene una apariencia muy típica.<br><br>No hay que llamar al equipo de respuesta rápida por esto. No es ninguna emergencia. Si ves el video que corresponde a los segmentos del EEG con artefacto de masticación, lo más probable es que veas al paciente comiendo.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG8_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "El artefacto de masticación aparece durante la vigilia (con la excepción de los bebés, que pueden tomar leche mientras se duermen o ya dormidos).<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No es correcto. <br><br>La clave para identificar este segmento del EEG es darse cuenta de que los elementos en los rectángulos rojos elongados son los mismos elementos que que aparecen en los rectángulos rojos cortos. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG8_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y de no marcar ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == true && document.getElementById("q6f").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Sí. <br><br> Al comienzo de este segmento del EEG hay artefacto muscular. Después hay un ritmo posterior dominante bien formado. Hay incluso pequeños artefactos de parpadeo hacia el final del segmento del EEG. Esos son elementos típicos de la vigilia.<br><br>Hay también ondas agudas en C4 (marcadas por flechas rojas). Esta actividad epileptiforme rompe el ritmo y tiene contornos puntiagudos, a pesar de que el campo eléctrico no se ve particularmente bien en este segmento del EEG.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG8_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No es correcto. <br><br>Intenta identificar los elementos marcados por los rectángulos rojos y los círculos rojos. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG8_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == true && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == true && document.getElementById("q7d").checked == false && document.getElementById("q7e").checked == true && document.getElementById("q7f").checked == false) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "¡Correcto! <br><br> Este es un segmento normal del EEG durante la fase III del sueño, definido por ondas lentas (marcadas por los círculos rojos) que ocupan la mayoría del EEG. Durante la fase III del sueño, todavía se pueden ver algunos husos del sueño (rectángulos rojos).";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG8_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No es correcto. <br><br>Intenta identificar los elementos marcados por los rectángulos rojos. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG8_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ8() {

	if (document.getElementById("q8a").checked == true && document.getElementById("q8b").checked == false && document.getElementById("q8c").checked == true && document.getElementById("q8d").checked == false && document.getElementById("q8e").checked == false && document.getElementById("q8f").checked == false) {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "¡Correcto! <br><br> Este es un EEG normal durante la vigilia, con artefacto de parpadeo (en círculos rojos). Los elementos marcados con rectángulos rojos son otro tipo de artefacto (artefacto de movimiento lateral de los ojos).";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "EEG8_img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "No es correcto. <br><br>Intenta identificar los elementos marcados en los círculos rojos. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG8_img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ9() {

	if (document.getElementById("q9a").checked == true && document.getElementById("q9b").checked == false && document.getElementById("q9c").checked == true && document.getElementById("q9d").checked == false && document.getElementById("q9e").checked == false && document.getElementById("q9f").checked == false) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "¡Correcto! <br><br> Este es un segmento del EEG durante la vigilia, con un ritmo posterior dominante (en rectángulos rojos). ¿Qué es esa cosa en los electrodos frontales? Es parpadeo rápido: si abres el video del EEG verás al paciente moviendo los párpados rápido y rítmicamente. Como con el artefacto de masticación, una vez que los ves, siempre lo reconocerás.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "EEG8_img/Q9.2.png";
		document.getElementById("afterQ9_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No es correcto. <br><br>Intenta identificar los elementos marcados en el rectángulo rojo. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG8_img/Q9.2.png";
		document.getElementById("afterQ9_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}










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
 		alert("¡Correcto! ¡Muy bien!");
		ev.target.appendChild(document.getElementById(data));
}
	else {
     		alert("Esa asociación es incorrecta. ¡Inténtalo de nuevo!");
  }

}




function checkQ10() {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "Vigilia: ritmo posterior dominante, artefacto de parpadeo, y artefacto muscular.<br><br>Somnolencia (fase I del sueño): ondas del vertex, movimientos laterales lentos de los ojos.<br><br>Fase II del sueño: ondas del vertex, husos del sueño.<br><br>Fase III del sueño: ondas lentas difusas, husos del sueño también presentes.";
		document.getElementById("after_submitQ10").style.background = "lightgreen";	
}


 
