


function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == false && document.getElementById("q1c").checked == true && document.getElementById("q1d").checked == false && document.getElementById("q1e").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Correcto! <br><br> El ritmo posterior dominante desaparece durante la fase I del sueño y la falta de un ritmo posterior dominante es uno de las características definitorias de la fase I. <br><br>Los movimientos oculares característicos de la fase I son movimientos lentos laterales tal y como aparecen dentro de los rectángulos rojos en la figura inferior. <br>";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG3_img/Q1.2.png";
		document.getElementById("answerQ1_picture2").src = "EEG3_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "Los movimientos oculares rápidos son el rasgo característico del sueño con movimientos oculares rápidos. <br><br>Las ondas del vertex aparecen típicamente en la línea media y las regiones parasagitales y son aproximadamente simétricas entre los hemisferios derecho e izquierdo. <br><br>Las ondas lentas de alta amplitud y difusas son las características definitorias de la fase III. La actividad epileptiforme tiende a potenciarse en la somnolencia (fase I) y fase II del sueño.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No es correcto. <br><br> Asegúrate de que has marcado todas las respuestas correctas y no has marcado ninguna de las respuestas incorrectas.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "¡Inténtalo de nuevo!";

}


}








function checkQ2() {

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto! <br><br> La transición de la vigilia al sueño se caracteriza por varios periodos en los que el EEG transiciona de la vigilia a somnolencia y de nuevo a la vigilia varias veces antes de que el paciente entre en fases más profundas del sueño. No es inusual despertarse también brevemente de fases profundas del sueño.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No. <br><br> La transición de la vigilia al sueño se caracteriza por varios periodos en los que el EEG transiciona de la vigilia a somnolencia y de nuevo a la vigilia varias veces antes de que el paciente entre en fases más profundas del sueño. No es inusual despertarse también brevemente de fases profundas del sueño.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}

}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == true && document.getElementById("q3c").checked == true && document.getElementById("q3d").checked == false && document.getElementById("q3e").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto! <br><br> Hay husos del sueño en la línea media y en la región parasagital derecha. Los husos del sueño asimétricos pueden aparecer ocasionalmente y ser normales en pacientes hasta los 2 años de edad si la lateralidad derecha o izquierda se compensa a lo largo de todo el EEG. Antes de los 2 años de edad los husos del sueño son anormales si son consistentemente asimétricos. Después de los 2 años de edad, los husos del sueño que aparecen asimétricos son siempre anormales.<br><br>En pacientes menores de 2 años, los husos del sueño pueden ser muy largos durando varios segundos.<br>";
		document.getElementById("after_submitQ3").style.background = "lightgreen"
		document.getElementById("answerQ3_picture").src = "EEG3_img/Q3.2.png";
		document.getElementById("answerQ3_picture2").src = "EEG3_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "Durante el resto del EEG este paciente tuvo husos del sueño apareciendo predominantemente en el hemisferio derecho (figura principal de la pregunta), apareciendo predominantemente en el hemisferio izquierdo (figura superior) y apareciendo bilateralmente (figura inferior). Por lo tanto, la lateralización de los husos del sueño se compensó y esto es normal en un paciente menor de 2 años.<br><br>Great job!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct. <br><br> Asegúrate de que has marcado todas las respuestas correctas y no has marcado ninguna de las respuestas incorrectas.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG3_img/Q3.2.png";
		document.getElementById("answerQ3_picture2").src = "EEG3_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "¿Y si supieras que durante el resto del EEG este paciente tuvo husos del sueño apareciendo predominantemente en el hemisferio derecho (figura principal de la pregunta), apareciendo predominantemente en el hemisferio izquierdo (figura superior) y apareciendo bilateralmente (figura inferior) que aproximadamente se compensaron en el total del EEG?<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == false && document.getElementById("q4e").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡Correcto! <br><br> Este segmento del EEG corresponde a la fase III del sueño. Contiene más del 20% de ondas delta de alta amplitud.<br>";
		document.getElementById("after_submitQ4").style.background = "lightgreen"
		document.getElementById("answerQ4_picture").src = "EEG3_img/Q4.2.png";
		document.getElementById("answerQ4_picture2").src = "EEG3_img/Q4.3.png";
		document.getElementById("afterQ4_picture").innerHTML = "También hay algunos husos del sueño, que son los rasgos característicos de la fase II del sueño, pero también pueden aparecer en la fase III del sueño (figura superior). La figura inferior muestra fase III sin husos del sueño. Los movimientos laterales lentos de los ojos son típicos de la somnolencia (fase I). El ritmo posterior dominante solamente aparece durante la vigilia, no durante el sueño. Este paciente tiene un año de edad, por lo que los husos del sueño asimétricos son normales siempre que su lateralización se compense entre los hemisferios derecho e izquierdo durante el EEG.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct. <br><br> Asegúrate de que has marcado todas las respuestas correctas y no has marcado ninguna de las respuestas incorrectas.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG3_img/Q4.2.png";
		document.getElementById("answerQ4_picture2").src = "EEG3_img/Q4.3.png";
		document.getElementById("afterQ4_picture").innerHTML = "¡Inténtalo de nuevo!";

}


}








function checkCC1() {

	if (document.CC1.CC1q1.value == "c" && document.CC1.CC1q2.value == "e" && document.CC1.CC1q3.value == "b") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡¡Sí!!<br><br>El EEG muestra periodos frecuentes en los que el voltaje es cero o casi cero y parece como si no hubiera actividad cerebral.<br><br>Esto se llama discontinuidad: la actividad cerebral no siempre aparece continuamente como debería, pero aparece y desaparece.<br><br>La discontinuidad es un marcador inespecífico de encefalopatía moderada a severa de etiología inespecífica que puede ser causada por una lesión craneoencefálica, causas tóxico-metabólicas, medicaciones, etc.<br><br>La discontinuidad nunca es normal y en general indica mal signo pronóstico. De todas formas, si la única causa de la discontinuidad en el EEG es tóxica o metabólica, cuando el tóxico o medicación disminuye su concentración, el EEG se hace progresivamente más continuo.";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
		document.getElementById("afterCC1_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡No!";
		document.getElementById("after_submitCC1").style.background = "red";
		document.getElementById("afterCC1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}



















