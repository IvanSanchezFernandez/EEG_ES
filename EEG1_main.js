function checkQ1() {

	if (document.question1.question.value == "Wakefulness") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡¡Correcto!! <br><br> Este EEG muestra un ritmo posterior dominante en los canales posteriores.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG1_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "El ritmo posterior dominante se señala dentro de los recuadros rojos. <br><br> ¡Muy bien!";

}

	if (document.question1.question.value == "NREM1") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No. <br><br> Los elementos más característicos del adormecimiento son las ondas del vertex.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG1_img/vertexwaves1.png";
		document.getElementById("afterQ1_picture").innerHTML = "El EEG muestra ondas del vertex señaladas con flechas rojas. ¿Ves esos elementos en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question1.question.value == "NREM2") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No es correcto. <br><br> Los elementos más característicos de la fase II son las ondas del vertex y los husos del sueño.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG1_img/vertexwaves1.png";
		document.getElementById("afterQ1_picture").innerHTML = "El EEG muestra ondas del vertex y husos del sueño señaladas con flechas rojas. ¿Ves esos elementos en el EEG de la pregunta?  <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question1.question.value == "NREM3") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No. <br><br> Los elementos más característicos de la fase III son las ondas lentas que ocupan más del 20% del EEG en esta fase.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG1_img/vertexwaves1.png";
		document.getElementById("afterQ1_picture").innerHTML = "El EEG muestra ondas lentas de alto voltaje señaladas con flechas rojas. ¿Ves esos elementos en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question1.question.value == "") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No has seleccionado ninguna respuesta. <br><br>Selecciona alguna de las respuestas.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";
}


}








function checkQ2() {

	if (document.getElementById("q2DSW").checked == true && document.getElementById("q2PDR").checked == false && document.getElementById("q2S").checked == false && document.getElementById("q2EB").checked == false && document.getElementById("q2VW").checked == false && document.getElementById("q2MA").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Exacto! <br><br> Los elementos más característicos de la fase III son ondas lentas ocupando gran parte del EEG.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG1_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "Las ondas lentas difusas están señaladas con flechas rojas. El rectángulo rojo señala un canal con elementos que pueden confundirse con artefacto muscular, pero esos elementos representan (seguramente) un electrodo artefactado, no artefacto muscular. Este EEG es típico de la fase III del sueño. <br><br> ¡Muy bien!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No. <br><br> Asegúrate de que has señalado todas las respuestas correctas y no has señalado ninguna de las respuestas incorrectas.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}


}









function checkQ3() {

	if (document.question3.question.value == "Wakefulness") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No. Lo siento, tu respuesta no es correcta. <br><br> Los elementos más característicos de la vigilia son el artefacto de parpadeo, el ritmo posterior dominante, y el artefacto muscular.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG1_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "El ritmo posterior dominante se señala con flechas rojas. También fijate en el artefacto de parpadeo y el artefacto muscular. <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "NREM1") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correcto. <br><br> Los elementos más característicos del adormecimiento son las ondas del vertex.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG1_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "El EEG muestra una onda aguda del vertex señalada con flechas rojas. Se puede intuir un ritmo posterior dominante en el rectángulo rojo. Otra de las características del adormecimiento es la progresiva desaparición del ritmo posterior dominante y aparición de ondas del vertex. <br><br> ¡Muy bien!";

}

	if (document.question3.question.value == "NREM2") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No, lo siento. <br><br> Los elementos más característicos de la fase II del sueño son las ondas del vertex y los husos del sueño.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG1_img/spindles1.png";
		document.getElementById("afterQ3_picture").innerHTML = "El EEG muestra husos del sueño señalados con flechas rojas. ¿Ves esos husos del sueño en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "NREM3") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No, tu respuesta no es correcta. <br><br> Los elementos más característicos de la fase III del sueño son ondas lentas ocupando más del 20% del EEG.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG1_img/slowwaves1.png";
		document.getElementById("afterQ3_picture").innerHTML = "El EEG muestra ondas lentas señaladas con flechas rojas. ¿Las ves en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No has seleccionado ninguna respuesta. <br><br>Selecciona alguna de las respuestas.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";
}


}








function checkQ4() {

	if (document.getElementById("q4PDR").checked == false && document.getElementById("q4SNOVW").checked == false && document.getElementById("q4S").checked == true && document.getElementById("q4MA").checked == false && document.getElementById("q4VW").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correcto. <br><br> Los elementos más característicos de la fase II del sueño son los husos del sueño.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG1_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Los husos del sueño se señalan dentro de los rectángulos. Las flechas señalan a las ondas del vertex, que también se ven en la fase II del sueño. Este EEG es típico de fase II del sueño. <br><br> ¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No. <br><br> Asegúrate de marcar todas las opciones correctas y no marcar ninguna opción incorrecta.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "";
		document.getElementById("afterQ4_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}


}








function checkQ5() {

	if (document.question5.question.value == "Wakefulness") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No. <br><br> Los elementos más característicos de la vigilia son el artefacto de parpadeo, el ritmo posterior dominante, y el artefacto muscular.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG1_img/wake1.png";
		document.getElementById("afterQ5_picture").innerHTML = "Esta figura muestra Los elementos más característicos de la vigilia: artefacto de parpadeo, ritmo posterior dominante, y artefacto muscular. ¿Ves esos elementos en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question5.question.value == "NREM1") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Correcto. <br><br> Los elementos más característicos del adormecimiento son las ondas del vertex.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG1_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "El EEG muestra una onda aguda del vertex con una flecha roja. Los rectángulos también muestran otro elemento del adormecimiento: los ojos se mueven lentamente de un lado a otro causando que los canales frontales aparezcan más anchos (cuando la córnea se acerca al electrodo en ese lado) o estrechos (cuando la retina se acerca al electrodo en ese lado). <br><br> ¡Muy bien!";

}

	if (document.question5.question.value == "NREM2") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No. <br><br> Los elementos más característicos de la fase II son las ondas del vertex y los husos del sueño.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG1_img/spindles1.png";
		document.getElementById("afterQ5_picture").innerHTML = "El EEG muestra husos del sueño marcadas por flechas rojas. ¿Los ves en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question5.question.value == "NREM3") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Esta respuesta no es correcta. <br><br> Los elementos más característicos de la fase III son las ondas lentas.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG1_img/vertexwaves1.png";
		document.getElementById("afterQ5_picture").innerHTML = "El EEG muestra ondas lentas, dos de las cuales señaladas por flechas rojas. ¿Los ves en el EEG de la pregunta?  <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question5.question.value == "") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No has seleccionado ninguna respuesta. <br><br>Selecciona alguna de las respuestas.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";
}


}








function checkQ6() {

	if (document.question6.question.value == "Wakefulness") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No. <br><br> Los elementos más característicos de la vigilia son el artefacto de parpadeo, el ritmo posterior dominante, y el artefacto muscular.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG1_img/wake1.png";
		document.getElementById("afterQ6_picture").innerHTML = "Esta figura muestra Los elementos más característicos de la vigilia: artefacto de parpadeo, ritmo posterior dominante, y artefacto muscular. ¿Ves esos elementos en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question6.question.value == "NREM1") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "¡No es correcto! <br><br> Los elementos más característicos del adormecimiento son las ondas del vertex.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG1_img/drowsiness1.png";
		document.getElementById("afterQ6_picture").innerHTML = "En el adormecimiento, las ondas del vertex están presentes, pero los husos del sueño no. <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question6.question.value == "NREM2") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No. <br><br> Los elementos más característicos de la fase II del sueño son las ondas del vertex y los husos del sueño.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG1_img/spindles1.png";
		document.getElementById("afterQ6_picture").innerHTML = "El EEG muestra husos del sueño señalados con flechas rojas. ¿Ves esos husos del sueño en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question6.question.value == "NREM3") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Perfecto. <br><br> > Los elementos más característicos de la fase III del sueño son ondas lentas ocupando más del 20% del EEG.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG1_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "El EEG muestra ondas lentas señaladas con flechas rojas. <br><br> ¡Muy bien!";

}

	if (document.question6.question.value == "") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No has seleccionado ninguna respuesta. <br><br>Selecciona alguna de las respuestas.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";
}


}








function checkQ7() {

	if (document.getElementById("q7PDR").checked == true && document.getElementById("q7SNOVW").checked == false && document.getElementById("q7S").checked == false && document.getElementById("q7NREMIII").checked == false && document.getElementById("q7EB").checked == true && document.getElementById("q7W").checked == true && document.getElementById("q7VW").checked == false) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correcto. <br><br> El artefacto de parpadeo y el ritmo posterior dominante están entre los elementos más típicos de la vigilia.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG1_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "El artefacto de parpadeo está señalado con flechas rojas y el ritmo posterior dominante está señalado en los cuadrados. Este EEG es típico de la vigilia. Puede haber algo de artefacto muscular, pero no es prominente. <br><br> ¡Muy bien!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No es correcto. <br><br> Asegúrate de marcar todas las opciones correctas y no marcar ninguna opción incorrecta.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "";
		document.getElementById("afterQ7_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}


}








function checkQ8() {

	if (document.question8.question.value == "Wakefulness") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Correcto. <br><br> Los elementos más característicos de la vigilia son el artefacto de parpadeo, el ritmo posterior dominante, y el artefacto muscular.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "EEG1_img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "Esta figura muestra los elementos característicos de la vigilia: ritmo posterior dominante, artefacto de parpadeo y artefacto muscular. De todas formas, es importante darse cuenta de que estos elementos pueden aparecer asimétricamente. Esta asimetría es normal si es transitoria pero no es normal si persiste. <br><br> ¡Muy bien!";

}

	if (document.question8.question.value == "NREM1") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "No. <br><br> Los elementos más característicos del adormecimiento son las ondas del vertex.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG1_img/drowsiness1.png";
		document.getElementById("afterQ8_picture").innerHTML = "En el adormecimiento las ondas del vertex están presentes, pero los husos del sueño no. <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question8.question.value == "NREM2") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Incorrecto. <br><br> Los elementos más característicos de la fase II del sueño son las ondas del vertex y los husos del sueño.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG1_img/spindles1.png";
		document.getElementById("afterQ8_picture").innerHTML = "El EEG muestra husos del sueño señalados con flechas rojas. ¿Ves esos husos del sueño en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question8.question.value == "NREM3") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Incorrecto. <br><br> Los elementos más característicos de la fase III del sueño son ondas lentas.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG1_img/slowwaves1.png";
		document.getElementById("afterQ8_picture").innerHTML = "El EEG muestra ondas lentas señaladas con flechas rojas. ¿Las ves en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question8.question.value == "") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "No has seleccionado ninguna respuesta. <br><br>Selecciona alguna de las respuestas.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("afterQ8_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";
}


}








function checkQ9() {

	if (document.question9.question.value == "Wakefulness") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No. <br><br> Los elementos más característicos de la vigilia son el artefacto de parpadeo, el ritmo posterior dominante, y el artefacto muscular.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG1_img/wake1.png";
		document.getElementById("afterQ9_picture").innerHTML = "Esta figura muestra los elementos característicos de la vigilia: ritmo posterior dominante, artefacto de parpadeo, y artefacto muscular.<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question9.question.value == "NREM1") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No. <br><br> Los elementos más característicos del adormecimiento son las ondas del vertex.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG1_img/drowsiness1.png";
		document.getElementById("afterQ9_picture").innerHTML = "Durante el adormecimiento, las ondas del vertex están presentes pero los husos del sueño no. <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question9.question.value == "NREM2") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Correcto. <br><br> Los elementos más característicos de la fase II del sueño son las ondas del vertex y los husos del sueño.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "EEG1_img/spindles1.png";
		document.getElementById("afterQ9_picture").innerHTML = "El EEG muestra husos del sueño señalados con flechas rojas. También hay ondas del vertex. <br><br> ¡Muy bien!";

}

	if (document.question9.question.value == "NREM3") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Incorrecto. <br><br> Los elementos más característicos de la fase III del sueño son ondas lentas de alto voltaje.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG1_img/slowwaves1.png";
		document.getElementById("afterQ9_picture").innerHTML = "El EEG muestra ondas lentas señaladas con flechas rojas. ¿Las ves en el EEG de la pregunta? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question9.question.value == "") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No has seleccionado ninguna respuesta. <br><br>Selecciona alguna de las respuestas.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("afterQ9_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";
}


}