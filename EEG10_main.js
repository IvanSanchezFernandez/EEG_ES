
function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == true && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == false && document.getElementById("q1e").checked == true && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Exáctamente! <br><br> A pesar de que este caso es más sutil que en las figuras anteriores, este EEG es asimétrico. Hay ondas aproximadamente a 3-5 Hz en la región temporal izquierda que no están presentes en la región temporal derecha:";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG10_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Esto es enlentecimiento focal en la región temporal izquierda, el EEG es asimétrico y anormal.<br><br>Los artefactos de parpadeo y el artefacto muscular nos dicen que este segmento del EEG ocurre durante la vigilia.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No es correcto. <br><br>Compara los canales marcados por los rectángulos rojos. ¿Son simétricos?";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG10_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ2() {

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡¡Correcto!! <br><br>El enlentecimiento focal en el EEG significa una anomalía funcional o estructural focal.<br><br>Las anomalías estructurales incluyen los tumores, las malformaciones de desarrollo cortical, los infartos cerebrales, las hemorragias, etc. Las anomalías funcionales incluyen areas focales de hipoperfusión o areas del cerebro con enlentecimiento focal tras una crisis epiléptica focal en esa area.<br><br>Estas y otras etiologías pueden ser la razón del enlentecimiento focal. Por lo tanto, el enlentecimiento focal es bastante localizador (nos dice dónde está la región disfuncional), pero bastante inespecífica en términos de etiología (no nos dice qué es lo que causa esa disfunción).";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No <br><br>El enlentecimiento focal nos dice que hay algo anormal en esa región del cerebro, pero no nos dice qué es esa anomalía.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ3() {

	if (document.getElementById("q3a").checked == true && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == false && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡¡Correcto!! <br><br> Este EEG es claramente asimétrico con enlentecimiento (aproximadamente 2 Hz) en el hemisferio izquierdo (predominantemente en la región frontotemporal izquierda) que no está presente en el hemisferio derecho.<br><br>También hay ondas agudas en T7/C3 entremezcladas con el enlentecimiento, marcadas con las flechas rojas.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG10_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Las descargas epileptiformes pueden aparecer mezcladas con el enlentecimiento en el EEG. Recuerda que un enlentecimiento focal marca un area disfuncional del cerebro. Las regiones disfuncionales frecuentemente, aunque no siempre, son un foco de crisis epilépticas y descargas epileptiformes.<br><br>Cuando ves enlentecimiento focal, fíjate si hay descargas epileptiformes entremezcladas con el enlentecimiento.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No es correcto. <br><br>¿Son los ritmos en el hemisferio izquierdo (corchete rojo superior) y los ritmos en el hemiferio derecho (corchete rojo inferior) similares o diferentes? Intenta identificar los elementos marcados por las flechas rojas.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG10_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == true && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == false && document.getElementById("q4f").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡Correcto! <br><br> Este segmento del EEG muestra ritmos a aproximadamente 4 Hz.<br><br>El artefacto muscular y el artefacto de parpadeo al final del segmento del EEG muestran que este segmento del EEG pertenece a la vigilia.<br><br>Las ondas generalizadas a aproximadamente 4 Hz serían anormales durante la vigilia...a menos que seas un lactante.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Este es un segmento normal del EEG de un lactante de 4 meses de edad. La razón por la que la primera y tercera respuestas no son correctas es porque este EEG no se puede interpretar sin más información: se necesita la edad del paciente para interpretar este segmento del EEG. Sin saber la edad puede ser anormal (en un adulto o en un niño mayor) o normal (como en este lactante de 4 meses de edad).<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No es correcto. <br><br>¿Es este segmento del EEG normal? ¿Es este segmento del EEG anormal? ¿Puede ser ambos? ¿Hay alguna información que te ayudaría a decidir?";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == true && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == false && document.getElementById("q5f").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "¡Exacto! <br><br> Este segmento del EEG muestra enlentecimiento generalizado aproximadamente a 2-4 Hz.<br><br>Esto puede ser enlentecimiento generalizado anormal (por ejemplo, durante una encefalopatía). ¿Es esto siempre anormal en un adulto? Sería definitivamente anormal durante la vigilia en un adulto, pero ¿ en la fase III del sueño? ¿Y durante la hiperventilación?";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Este es un trazado normal del EEG en un adulto durante la fase III del sueño.<br><br>Los adultos típicamente no muestran tanto enlentecimiento durante la hiperventilación como los niños, pero un adulto durante la hiperventilación puede mostrar (raramente) mucho enlentecimiento como en este segmento del EEG.<br><br>La estimulación lumínica intermitente no debería enlentecimiento generalizado.<br><br>¡Muy bien!";
this 
	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No es correcto. <br><br>¿Está el paciente despierto o dormido? ¿Está el paciente hiperventilando? Asegúrate de saber estas cosas antes de interpretar el EEG.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == true && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == false && document.getElementById("q6f").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "¡Sí! <br><br> Hay ritmos en el rango de 2-3 Hz, lentos para un adulto despierto. De todas formas, hay algo que parece extraño en este enlentecimiento: el enlentecimiento aparece y desaparece abruptamente, y aparece más pronunciado en el lado derecho que en el lado izquierdo, que es inusual para un enlentecimiento generalizado.<br><br>Si miraras el video de este segmento del EEG, verías un paciente intubado que está siendo succionado y tosiendo durante este segmento del EEG.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("afterQ6_picture").innerHTML = "Hay muchos artefactos que pueden parecerse a enlentecimiento generalizado o focal, especialmente en una unidad de cuidados intensivos.<br><br>Siempre mira el video cuando veas algo que parece extraño.<br><br>Siempre mira el video incluso si alguna anomalía no resulta extraña. Los artefactos pueden aparecer como anomalías reales.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No es correcto. <br><br>Hay algo que es extraño en este enlentecimiento. Comienza y termina abruptamente. Aparece y desaparece en la mitad. Es más prominente en el lado derecho a pesar de ser más o menos generalizado.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == true && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == true && document.getElementById("q7d").checked == true && document.getElementById("q7e").checked == false) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "¡Correcto!<br><br> Este segmento del EEG contiene areas con enlentecimiento generalizado a 4-5 Hz y alta amplitud durante la hiperventilación. El enlentecimiento durante la hiperventilación puede aparecer bastante dramático, especialmente en niños pequeños (mira la figura de abajo en el mismo paciente tomada más tarde durante la hiperventilación).";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG10_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "En el enlentecimiento generalizado durante la hiperventilación, busca descargas epileptiformes (no hay ninguna en este paciente) y busca asimetrías persistentes en el enlentecimiento. Si no hay ninguna de esas, el enlentecimiento durante la hiperventilación es totalmente normal.<br><br>Abrir los ojos hace desaparecer el ritmo posterior dominante, pero el enlentecimiento de la hiperventilación persiste con los ojos abiertos. Si el paciente para de hiperventilar, el enlentecimiento desaparece progresivamente en unos pocos segundos o minutos.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No es correcto. <br><br>¿Qué procedimiento de activación puede causar enlentecimiento generalizado de alta amplitud?<br><br>Este procedimiento de activación puede causar un enlentecimiento muy prominente como en el segmento de EEG de abajo.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG10_img/Q7.3.png";
		document.getElementById("afterQ7_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}



