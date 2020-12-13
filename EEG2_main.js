function checkQ1() {

	if (document.question1.question.value == "b") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡¡Correcto!! <br><br> Este EEG muestra un ritmo posterior dominante reconocible en los canales posteriores del EEG.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG2_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "El ritmo posterior dominante se ve mejor en esta imagen detallada mostrando una frecuencia de 6 Hz.<br><br> Muy bien";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No. <br><br> Asegúrate de contar el ritmo en los canales posteriores del EEG.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG2_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "¡Sigue contando el ritmo en la imagen de arriba e inténtalo de nuevo!";

}

}








function checkQ2() {

	if (document.question2.question.value == "d") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡¡Correcto!! <br><br> Si llamas el ritmo posterior dominante por una de las frecuencias del EEG (por ejemplo, ritmo alfa) y el ritmo posterior dominante del paciente no está en esa frecuencia, entonces es difícil nombrarlo apropiadamente.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Por lo tanto, no llames al ritmo posterior dominante con el nombre de una frecuencia del EEG<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No.<br><br>";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ3() {

	if (document.question3.question.value == "a") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No. Esta respuesta no es correcta. <br><br> Un ritmo posterior dominante de 5 Hz es lento para un adulto, pero ¿es lento para un niño pequeño?";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG2_img/Q3.1.png";
		document.getElementById("afterQ3_picture").innerHTML = "Este EEG tiene un ritmo posterior dominante de 5 Hz y es normal. ¿Por qué?<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "b") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Incorrecto! <br><br> En general, el ritmo posterior dominante es anormal cuando es más lento que lo esperado para la edad, pero el ritmo posterior dominante no es anormal si es 12 Hz or 13 Hz or 14 Hz.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "c") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No. <br><br> Un ritmo posterior dominante de 5 Hz puede ser normal or anormal.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "";
		document.getElementById("afterQ3_picture").innerHTML = "¿Qué otra información necesitas para tomar esa decisión? <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "d") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto! <br><br> La frecuencia del ritmo posterior dominante tiene que ser interpretada considerando la edad del paciente.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG2_img/Q3.1.png";
		document.getElementById("afterQ3_picture").innerHTML = "El EEG muestra un ritmo posterior dominante de aproximadamente 5 Hz. Esta frecuencia es normal en este paciente de 4 meses, pero es un ritmo posterior dominante lento si el paciente fuera un niño mayor o un adulto. <br><br> ¡Muy bien!";

}

}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡Correcto! <br><br> El EEG muestra un ritmo posterior dominante que se ve mejor en el hemisferio derecho.<br>";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG2_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Esta asimetría puede ser normal si solamente ocurre por unos pocos segundos y se compensa globalmente en el EEG. De todas formas, si persiste suficientemente, es anormal <br><br> ¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No es correcto. <br><br> Asegúrate de que has marcado todas las respuestas correctas y ninguna respuesta incorrecta.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "";
		document.getElementById("afterQ4_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == true && document.getElementById("q5c").checked == true && document.getElementById("q5d").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "¡Correcto! <br><br> La amplitud del ritmo posterior dominante tiene que ser aproximadamente simétrica, pero una diferencia de aproximadamente 2 veces en amplitud es normal.<br>";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Esta asimetría es más normal si la amplitud es más alta en el hemisferio derecho porque, normalmente, la amplitud del ritmo posterior dominante es más alta en el hemisferio derecho. Una asimetría puede representar una lesión estructural o una anomalía funcional.<br><br> ¡Muy bien!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No es correcto. <br><br> Asegúrate de que has marcado todas las respuestas correctas y ninguna respuesta incorrecta.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}


}








function checkQ6() {

	if (document.question6.question.value == "a") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No. No es totalmente correcto.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG2_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Este EEG tiene un ritmo posterior dominante de 4 Hz.<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question6.question.value == "b") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Incorrecto. <br><br> Esta no es la frecuencia correcta. Fíjate en la figura.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG2_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question6.question.value == "c") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No. <br><br> Esta no es la frecuencia correcta. Fíjate en la figura.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG2_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question6.question.value == "d") {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Correcto. <br><br> La frecuencia es 4 Hz, pero esta frecuencia tiene que interpretarse sabiendo la edad del paciente.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG2_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "El EEG muestra un ritmo posterior dominante de aproximadamente 5 Hz. Esta frecuencia es normal en un paciente de 4 meses, pero sería lenta si el paciente es un niño mayor o un adulto. <br><br> ¡Muy bien!";

}

}








function checkQ7() {

	if (document.question6.question.value == "a") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG2_img/Q7.2.png";
                document.getElementById("answerQ7_picture2").src = "EEG2_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "Este EEG tiene un ritmo posterior dominante ligeramente asimétrico.<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question7.question.value == "b") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "¡Correcto! <br><br> Este EEG tiene un ritmo posterior dominante ligeramente asimétrico.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG2_img/Q7.2.png";
                document.getElementById("answerQ7_picture2").src = "EEG2_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "El voltaje es algo más alto en el hemisferio derecho (45 microvoltios versus 33 microvoltios). En esos casos el ritmo posterior dominante es anormal si su voltaje es más de 3 veces más alto en la derecha que en la izquierda. En el caso de que el voltaje más alto esté en el hemisferio izquierdo, entonces es anormal si el ritmo posterior dominante es más de 2 veces más alto en la izquierda que en la derecha. En todo caso esto tiene que evaluarse en todo el EEG, no solamente en una parte del EEG. <br><br> ¡Muy bien!";

}

	if (document.question6.question.value == "c") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No. <br><br> Este EEG tiene un ritmo posterior dominante ligeramente asimétrico, pero esto es frecuentemente normal.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG2_img/Q7.2.png";
                document.getElementById("answerQ7_picture2").src = "EEG2_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question7.question.value == "d") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "¡Incorrecto! <br><br> Hay un ritmo posterior dominante en los hemisferios derecho e izquierdo.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG2_img/Q7.2.png";
                document.getElementById("answerQ7_picture2").src = "EEG2_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "<br><br>¡Inténtalo de nuevo!";

}

}








function checkQ8() {

	if (document.question8.question.value == "a") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "No.<br><br>";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "";
		document.getElementById("afterQ8_picture").innerHTML = "¿Dónde y cuándo se encuentra un ritmo posterior dominante en el EEG?<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question8.question.value == "b") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Incorrecto. <br><br>";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "";
		document.getElementById("afterQ8_picture").innerHTML = "¿Dónde y cuándo se encuentra un ritmo posterior dominante en el EEG?<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question8.question.value == "c") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Incorrecto. <br><br>";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "";
		document.getElementById("afterQ8_picture").innerHTML = "¿Dónde y cuándo se encuentra un ritmo posterior dominante en el EEG?<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question6.question.value == "d") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "¡Correcto! <br><br> Este EEG muestra ondas agudas del vertex y husos del sueño, pertenece a la fase II del sueño y no se puede encontrar un ritmo posterior dominante aquí.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "";
		document.getElementById("afterQ8_picture").innerHTML = "El ritmo posterior dominante aparece en un paciente en despierto con los ojos cerrados o que no está fijando la vista. No busques un ritmo posterior dominante durante el sueño, en  un paciente en coma, o en un paciente despierto pero on relajado. <br><br> ¡Muy bien!";

}

}








function checkQ9() {

	if (document.question9.question.value == "a") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "¡Correcto!<br><br>";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "";
		document.getElementById("afterQ9_picture").innerHTML = "Exáctamente. El ritmo posterior dominante aparece durante la vigilia cuando el paciente está relajado, con los ojos cerrados o no fijándose en nada. Por lo tanto, incluso durante la vigilia el ritmo posterior dominante puede no aparecer si no se dan esas condiciones.<br><br> ¡Muy bien!";

}

	if (document.question9.question.value == "b") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Incorrecto. <br><br>";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "";
		document.getElementById("afterQ9_picture").innerHTML = "A pesar de que el ritmo posterior dominante aparece en la mayoría de EEGs (en gran parte gracias a los técnicos que le piden al paciente que cierre los ojos y se relaje), puede que no aparezca y esto no hace el EEG anormal necesariamente.<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question9.question.value == "c") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Incorrecto. <br><br>";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "";
		document.getElementById("afterQ9_picture").innerHTML = "No. El ritmo posterior dominante no aparece durante el sueño.<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question9.question.value == "d") {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No. <br><br>";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "";
		document.getElementById("afterQ9_picture").innerHTML = "El ritmo posterior dominante no aparece en ningún momento en particular después del comienzo de la vigilia. Al contrario que algunas fases del sueño (que aparecen cierto tiempo después de dormirse), el ritmo posterior dominante puede aparecer en cualquier momento durante la vigilia. <br><br> ¡Inténtalo de nuevo!";

}

}











