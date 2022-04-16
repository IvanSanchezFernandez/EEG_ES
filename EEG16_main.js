

function checkQ1() {

	if (document.question1.question.value == "d") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Correcto! <br><br>Este es uno de los artefactos más comunes.<br><br>Se trata de artefacto de masticación y ocurre cada vez que el paciente come algo.<br><br>Puedes reconocer el artefacto como artefacto muscular semirrítmico especialmente prominente en las regiones bitemporales (donde están situados los músculos masticatorios). Cuando haya dudas, abre el video y verás al paciente comiendo.<br><br>Este es uno de los artefactos que debes reconocer inmediatamente: su patrón es muy característico y aparece en la mayoría de los EEG. Abajo hay otro ejemplo de artefacto de masticación.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG16_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¿Qué es lo que puede estar causando este artefacto semirrítmico en las regiones bitemporales? ¿Qué músculos se encuentran allí? ¿Qué puede causar una activación semirrítmica de esos músculos? Puedes ver otro ejemplo del mismo patrón abajo.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG16_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == true) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto! <br><br>Hay un artefacto apareciendo frecuentemente en T8. Este tipo de artefacto se llama a veces artefacto de movimiento del electrodo y se piensa que se debe a la liberación súbita de carga eléctrica estática debida a un pobre contacto del electrodo. Este patrón que a veces se llama 'artefacto en vias de tren' por su similitud a unas vias de tren, puede confundirse con puntas o, incluso, con una crisis epiléptica. El principal rasgo diferencial es su localización estrictamente limitada a un electrodo sin campo eléctrico en los electrodos adjacentes. Su morfología no fisiológica también ayuda a distinguirlo.<br><br> También hay artefacto muscular en T7.<br><br>Abajo puedes encontrar un ejemplo del tipo de artefacto que resulta cuando el contacto del electrodo con el cuero cabelludo es realmente malo: grandes fluctuaciones de amplitud que son abruptas y no fisiológicas y que están limitadas a un solo electrodo (C3 en este caso).";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG16_img/Q2.2.png";
		document.getElementById("answerQ2_picture2").src = "EEG16_img/Q2.3.png";
		document.getElementById("afterQ2_picture").innerHTML = "Aprende este artefacto. Aparece en la mayoría de los EEG. También tiene una aplicación práctica: como sabes que el electrodo afectado tiene un mal contacto con el cuero cabelludo, cualquier deflección sugestiva de una descarga epileptiforme o crisis epiléptica que aparezca después en ese electrodo es probablemente un artefacto, no algo que venga del cerebro.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No es correcto. Ejemplos de una situación similar abajo.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "EEG16_img/Q2.2.png";
		document.getElementById("answerQ2_picture2").src = "EEG16_img/Q2.3.png";
		document.getElementById("afterQ2_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ3() {

	if (document.question3.question.value == "c") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto! <br><br>El patrón de ondas lentas afectando simétricamente los canales frontales sin casi campo eléctrico es muy característico de los movimientos oculares repetitivos. Si abres el video durante uno de esos episodios, verás los ojos del paciente moviéndose repetitivamente en vertical.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Pista: ¿qué órgano sensorial está justo debajo del lóbulo frontal?";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ4() {

	if (document.question4.question.value == "f") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡Correcto! <br><br>:La actividad rítmica sugiere que el generador de la actividad es repetitivo. Hay un comienzo y final abruptos de la actividad. No hay evolución de esta actividad rítmica. En niños pequeños puedes ver en el video a algún cuidador dando palmadas en la espalda al niño. A veces puede ser muy difícil diferenciar de una crisis epiléptica cuando la ritmicidad se acelera y se enlentece: siempre mira el video en esos casos para ver lo que está pasando.<br><br>El comienzo y final abrupto y (en la mayoría de los casos) la falta de evolución en frecuencia, amplitud, o expansión debería hacerte pensar en artefacto de palmadas en la espalda, como en el ejemplo de abajo:";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG16_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Y, por supuesto, siempre mira el video en estos casos. ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Otro ejemplo abajo:";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG16_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == true && document.getElementById("q5e").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "¡Exactamente! <br><br>Varios electrodos en este paciente están desconectados o tienen un mal contacto con el cuero cabelludo. El EEG detecta cambios en voltaje que son artefactuales y no vienen del cerebro: ruido eléctrico, movimientos rápidos de los electrodos en el aire, etc. Es decir, cambios de voltaje no fisiológicos que no vienen del cerebro.<br><br>Cuando varios electrodos se desconectan, los hallazgos del EEG pueden no ser de fiar: las anomalías reales pueden ser oscurecidas en el ruido y algunos hallazgos que parecen reales pueden ser artefactos.<br><br>Fija los electrodos tan pronto como sea posible para obtener un trazado EEG en el que se pueda confiar de nuevo.<br><br>Otros ejemplos de segmentos del EEG con electrodos desconectados se presentan abajo:";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG16_img/Q5.2.png";
		document.getElementById("answerQ5_picture2").src = "EEG16_img/Q5.3.png";
		document.getElementById("afterQ5_picture").innerHTML = "¡Muy bien!";


	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No es correcto.<br><br>Mira otros ejemplos del mismo patrón abajo:";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG16_img/Q5.2.png";
		document.getElementById("answerQ5_picture2").src = "EEG16_img/Q5.3.png";
		document.getElementById("afterQ5_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == true && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "¡Exacto! <br><br>Un artefacto muscular es prominente en este segmento del EEG. También hay artefacto de parpadeo.<br><br>Otro ejemplo se presenta abajo:";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG16_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "¡Muy bien!";


	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No es correcto.<br><br>Mira otro ejemplo del mismo patrón más abajo:";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG16_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ7() {

	if (document.question7.question.value == "e") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "¡Correcto! <br><br>Cuando el músculo recto lateral del ojo se contrae y mueve el ojo lateralmente, la actividad electromiográfica que genera esa contracción puede ser detectada por los electrodes temporales anteriores. Esto aparece en el EEG como artefacto que simula a una punta. La ausencia de un campo eléctrico y la ocurrencia sólo con los movimientos laterales de los ojos ayuda a distinguirlo de una punta.<br><br>Otro ejemplo se presenta abajo:";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG16_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Otro ejemplo se presenta abajo:";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG16_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ8() {

	if (document.question8.question.value == "c") {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "¡Correcto! <br><br>Hay un comienzo y final abruptos de ondas rítmicas con una frecuencia aproximada de 1-2 Hz. El episodio completo dura aproximadamente 5 segundos.<br><br>Este paciente estaba simplemente rascándose la cabeza en el video.<br><br>La mejor manera de reconocer esto como de origen no cerebral y no fisiológico es darse cuenta de que los campos eléctricos son de muy alto voltaje en algunos canales sin casi campo eléctrico en los canales vecinos. Un comienzo y final abruptos también sugieren artefacto.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("afterQ8_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Quizás la ritmicidad y origen y final abruptos te ayuden a reconocer este patrón en el EEG.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("afterQ8_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ9() {

	if (document.getElementById("q9a").checked == false && document.getElementById("q9b").checked == true && document.getElementById("q9c").checked == false && document.getElementById("q9d").checked == false && document.getElementById("q9e").checked == true) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "¡Exactamente! <br><br>Cuando un electrodo está cerca de una arteria en el cuero cabelludo, el pulso es detectado por el electrodo y aparece como un ritmo sinusoidal que tiene la misma frecuencia que el latido del corazón.<br><br>El artefacto cardiobalístico es diferente que el artefacto de electrocardiograma, que se puede ver (a pesar de que no es particularmente prominente) en F7-T7 y T7-P7. El artefacto del electrocardiograma representa la actividad eléctrica del sistema de conducción del corazón que se detecta por los electrodos del cuero cabelludo.<br><br>Cuando el canal del electrocardiograma también está junto los otros canales del EEG, la relación entre los ritmos es más clara:";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "EEG16_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG16_img/Q9.3.png";
		document.getElementById("afterQ9_picture").innerHTML = "¡Muy bien!";


	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No es correcto.<br><br>Compara los ritmos en los canales del EEG y en el canal del electrocardiograma:";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG16_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG16_img/Q9.3.png";
		document.getElementById("afterQ9_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ10() {

	if (document.question10.question.value == "b") {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "¡Correcto! <br><br>Ondas que parecen ondular lentamente, típicamente con una frecuencia de 1 Hz o incluso más lentas, son sugerentes de artefacto de sudoración.<br><br>El sudor causa que los electrolitos formen puentes eléctricos entre los electrodos adyacentes.<br><br>En estos casos, aumenta el filtro de baja frecuencia para reducir el artefacto de sudoración. O mejor aún, reduce la temperatura de forma que tu paciente no sude tanto.<br><br>Algunos ejemplos más de artefacto de sudoración se presentan abajo:";
		document.getElementById("after_submitQ10").style.background = "lightgreen";
		document.getElementById("answerQ10_picture").src = "EEG16_img/Q10.2.png";
		document.getElementById("answerQ10_picture2").src = "EEG16_img/Q10.3.png";
		document.getElementById("answerQ10_picture3").src = "EEG16_img/Q10.4.png";
		document.getElementById("afterQ10_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "No. Algunos ejemplos más abajo:";
		document.getElementById("after_submitQ10").style.background = "red";
		document.getElementById("answerQ10_picture").src = "EEG16_img/Q10.2.png";
		document.getElementById("answerQ10_picture2").src = "EEG16_img/Q10.3.png";
		document.getElementById("answerQ10_picture3").src = "EEG16_img/Q10.4.png";
		document.getElementById("afterQ10_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ11() {

	if (document.question11.question.value == "d") {
		document.getElementById("after_submitQ11").style.visibility = "visible";
		document.getElementById("answerQ11").innerHTML = "¡Correcto!<br><br>Una pequeña cantidad de corriente alterna de los enchufes eléctricos alrededor del paciente pasa por el cuerpo del paciente. En este caso, mira a los canales P4-O2 y P8-O2. Aparecen borrosos, como peludos.<br><br>En los Estados Unidos de América, entre otros países, la corriente alterna tiene una frecuencia de 60 Hz, por lo que este artefacto se llama artefacto de 60 Hz. En muchos otros países, la frecuencia de la corriente alterna es 50 Hz, así que se llama artefacto de 50 Hz. La alta frecuencia (50 Hz o 60 Hz) del artefacto le da su apariencia borrosa (o peluda) al artefacto, como se muestra en un detalle de la figura anterior abajo:";
		document.getElementById("after_submitQ11").style.background = "lightgreen";
		document.getElementById("answerQ11_picture").src = "EEG16_img/Q11.2.png";
		document.getElementById("afterQ11_picture").innerHTML = "¿Por qué este artefacto sólo afecta algunos canales (y no todos los canales)? Todos los electrodos se exponen a aproximadamente la misma cantidad de este ruido eléctrico de 50 Hz o 60 Hz. Si la exposición fuera absolutamente idéntica, el ruido se cancelaría al comparar los distintos electrodos. De todas formas, hay algunas diferencias de impedancia entre los distintos electrodos, lo que lleva al artefacto de 50 Hz o 60 Hz.<br><br>Los electrodos afectados (O2 en este caso) son electrodos que típicamente no están tan bien fijados al cuero cabelludo como los otros electrodos.<br><br>Abajo hay otro ejemplo en el que los canales afectados son Fp2-F4, Fp-F8, y F8-T8:";
		document.getElementById("answerQ11_picture2").src = "EEG16_img/Q11.3.png";
		document.getElementById("afterQ11_picture2").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQ11").style.visibility = "visible";
		document.getElementById("answerQ11").innerHTML = "No. Fíjate en la apariencia borrosa (o peluda) de los canales P4-O2 y P8-O2 en el detalle de la misma figura abajo:";
		document.getElementById("after_submitQ11").style.background = "red";
		document.getElementById("answerQ11_picture").src = "EEG16_img/Q11.2.png";
		document.getElementById("afterQ11_picture").innerHTML = "Abajo hay otro ejemplo en el que los canales afectados son Fp2-F4, Fp-F8, y F8-T8:";
		document.getElementById("answerQ11_picture2").src = "EEG16_img/Q10.3.png";
		document.getElementById("afterQ11_picture2").innerHTML = "¡Inténtalo de nuevo!";

}

}



