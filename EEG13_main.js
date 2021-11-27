
function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == false && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == true && document.getElementById("q1e").checked == true && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Correcto!<br><br> Aunque no hay artefacto de parpadeo o artefacto muscular (el paciente no esta parpadeando o moviéndose durante este segmento del EEG), hay un ritmo posterior dominante que puede ser identificado en ambos hemisferios.<br><br>También, intermitentemente, frecuencias de 2-3 Hz pueden ser identificadas en los canales posteriores (especialmente en P7-O1): esto es enlentecimiento intermitente focal. Esto puede ser más fácil de identificar en los siguientos segmentos del mismo paciente:";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG13_img/Q1.2.png";
		document.getElementById("answerQ1_picture_2").src = "EEG13_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "Compara las regiones posteriores derecha e izquierda. ¿Ves la diferencia?<br><br>El enlentecimiento focal significa una lesión funcional o estructural en el área con frecuencias lentas. En épocas anteriores a la neuroimagen moderna, el EEG era una de las herramientas principales para localizar lesiones cerebrales.<br><br>Este paciente tiene una lesión estructural en el contexto de un síndrome de encefalopatía posterior reversible (PRES por sus siglas en inglés), como se muestra en la resonancia magnética de abajo.<br><br>¡Muy bien!";
		document.getElementById("answerQ1_picture_3").src = "EEG13_img/Q1.4.png";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "La respuesta no es correcta.<br><br>Intenta comparar las regiones posteriores derecha e izquierda en el EEG. ¿Son similares o distintas? Los segmentos del EEG abajo son del mismo paciente.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG13_img/Q1.2.png";
		document.getElementById("answerQ1_picture_2").src = "EEG13_img/Q1.3.png";
		document.getElementById("afterQ1_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == true && document.getElementById("q2e").checked == false && document.getElementById("q2f").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto!<br><br>Hay un enlentecimiento focal intermitente en las regiones posteriores, en particular en las regiones occipitales.<br><br>Esta actividad delta occipital rítmica intermitente (OIRDA por sus siglas en inglés) es un rasgo típico de la epilepsia de ausencia de la infancia. Si ves OIRDA, no te sorprendas si aparece una (o más de una) crisis de ausencia típica en el EEG.<br><br>De hecho, lo siguiente apareció en el EEG de este paciente:";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG13_img/Q2.3.png";
		document.getElementById("afterQ2_picture").innerHTML = "¡Una crisis de ausencia típica!<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Respuesta incorrecta.<br><br>Esta pregunta es bastante específica. Intenta encontrar qué es OIRDA, su apariencia en el EEG, y en qué síndrome epiléptico aparece.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == false && document.getElementById("q3e").checked == false && document.getElementById("q3f").checked == true) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto!<br><br>Hay puntas que son más prominentes en los canales P4-O2 y P8-O2.<br><br>Como O2 es "final de la cadena" (es el último electrodo en la cadena Fp2-F4-C4-P4-O2 y en la cadena Fp2-F8-T8-P8-O2), es difícil ver un reverso de fase. Mirando a un montaje transverso en donde O2 no es el electrodo final de la cadena, es fácil ver el reverso de fase negativo:";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG13_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Respuesta incorrecta.<br><br>Quizás aparezca más claro en un montaje transverso:";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG13_img/Q3.2.png";
		document.getElementById("afterQ3_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == true && document.getElementById("q4f").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡Exacto!<br><br>Este segmento del EEG muestra artefacto de parpadeo y un ritmo posterior dominante de aproximadamente 10 Hz, que hace que el EEG se pueda considerar normal durante la vigilia (esto no es fase II del sueño).<br><br>Las ondas lentas posteriores de la juventud son los ritmos ondulatorios que aparecen con el ritmo posterior dominante superimpuesto sobre ellas. Como su nombre sugiere, ocurren fundamentalmente en jóvenes (adolescentes, adultos jóvenes).";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG13_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No es correcto.<br><br>¿Qué son los elementos marcados en rojo?";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG13_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == true && document.getElementById("q5e").checked == true && document.getElementById("q5f").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "¡Exacto!<br><br>Esto es actividad epileptiforme desencadenada por estimulación luminosa intermitente, que se llama respuesta fotoparoxística.<br><br>No hay que llamar al equipo de respuesta rápida del hospital porque se trata de una respuesta epileptiforme, no de una crisis epiléptica.<br><br>El efecto de la estimulación luminosa intermitente usada durante el EEG no se evita cerrando los ojos porque se suficientemente potente para llegar a los ojos incluso con los párpados cerrados (lo que está muy bien porque la mayoría de los pacientes cierran sus ojos durante la estimulación luminosa intermitente).";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Incorrecto.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == true && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == true && document.getElementById("q6e").checked == true && document.getElementById("q6f").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "¡Exacto!<br><br>En algunos pacientes la respuesta fotoparoxística puede disminuir o incluso desaparecer con filtros de colores.<br><br>Cuando encuentres una respuesta fotoparoxística, el primer paso es repetirla para asegurarte que el hallazgo es consistente y no simplemente actividad epileptiforme que ocurre al mismo tiempo que la estimulación luminosa intermitente por casualidad.<br><br>Entonces, el segundo paso es evaluar la respuesta con filtros de colores y ver si la respuesta fotoparoxística desaparece. Los pacientes con respuesta fotoparoxística tienen una predisposición a las crisis epilépticas cuando se exponen a luces repetitivas. En esos pacientes (no en todos los pacientes con epilepsia o en cada paciente con respuesta fotoparoxística) el uso de gafas con filtros de colores puede ayudar a reducir el riesgo de crisis epilépticas.<br><br>No todos los pacientes con respuesta fotoparoxística mejoran con filtros de colores y la sensibilidad a distintos colores es diferente en distintos pacientes.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("afterQ6_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Incorrecto.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == true && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == false && document.getElementById("q7d").checked == false && document.getElementById("q7e").checked == false && document.getElementById("q7f").checked == true) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "¡Correcto!<br><br>Este es un segmento normal del EEG. El enlentecimiento que se ve en este segmento es una hipersincronía, que se ve frecuentemente durante la somnolencia en niños pequeños (este paciente tenía 7 años de edad).<br><br>Hay un par de elementos que pueden parecer sospechosos y pueden parecer complejos de punta-onda (flechas rojas en la figura de abajo). De todas formas, son seguramente la superimposición de elementos normales (flecha roja a la izquierda) sobre el enlentecimiento. Una pista para reconocer que esto es una superimposición de elementos normales dando la apariencia de un complejo punta-onda es que la pseudopunta no aparece siempre antes de la onda lenta, pero a veces en el medio de la onda lenta (como una joroba).";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG13_img/Q7.2.png";
		document.getElementById("answerQ7_picture2").src = "EEG13_img/Q7.3.png";
		document.getElementById("answerQ7_picture3").src = "EEG13_img/Q7.4.png";
		document.getElementById("afterQ7_picture").innerHTML = "<br><br>No hay un campo eléctrico del complejo punta-onda. Cuando tengas dudas, mira al mismo segmento en un montaje diferente. Aquí, si miras al mismo segmento en un montaje con referencia a las orejas, el elemento sospechoso de ser un complejo punta-onda desaparece.<br><br>No hay ondas del vertex o husos del sueño en este segmento del EEG.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No es correcto.<br><br>Aquí tienes detalles, una explicación potencial de lo que ves, y el mismo segmento del EEG con un montaje con referencia a las orejas.";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG13_img/Q7.2.png";
		document.getElementById("answerQ7_picture2").src = "EEG13_img/Q7.3.png";
		document.getElementById("answerQ7_picture3").src = "EEG13_img/Q7.4.png";
		document.getElementById("afterQ7_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ8() {

	if (document.getElementById("q8a").checked == false && document.getElementById("q8b").checked == false && document.getElementById("q8c").checked == true && document.getElementById("q8d").checked == false && document.getElementById("q8e").checked == true && document.getElementById("q8f").checked == false) {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "¡Correcto!<br><br>Este segmento del EEG pertenece a la vigilia como muestra el artefacto muscular en los canales frontales. Nota: el estado de vigilia puede no tener artefacto de parpadeo, no tener ritmo posterior dominante, y no tener artefacto muscular (al menos, por algún tiempo: algunos segmentos del EEG en la vida real pueden ser más complicados de identificar que los casos típicos que los casos que ves mientras aprendes EEG; de todas formas, los reconocerás como estado de vigilia porque no aparecen aislados, pero entre otros segmentos del EEG en vigilia).<br><br>En el hemisferio derecho puedes ver ondas agudas con una reversión de fase negative en C4 y T8, lo que significa que son centro-temporales. Algunos otros ejemplos del mismo paciente se pueden ver abajo (señalados con flechas rojas).";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "EEG13_img/Q8.2.png";
		document.getElementById("answerQ8_picture2").src = "EEG13_img/Q8.3.png";
		document.getElementById("afterQ8_picture").innerHTML = "Esas son ondas agudas centrotemporales. Aparecen en las regiones centrotemporales derecha e izquierda. Se potencian con el sueño (lo cual no se muestra en los segmentos del EEG de arriba). Deberías estar pensando en...epilepsia rolándica (epilepsia benigna con puntas centrotemporales, actualmente llamada epilepsia de la niñez con puntas centrotemporales).<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Not correct. <br><br> Algunos ejemplos más (señalados con flechas rojas) del mismo paciente en caso de que ayude a reconocer qué son.";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG13_img/Q8.2.png";
		document.getElementById("answerQ8_picture2").src = "EEG13_img/Q8.3.png";
		document.getElementById("afterQ8_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ9() {

	if (document.getElementById("q9a").checked == true && document.getElementById("q9b").checked == false && document.getElementById("q9c").checked == true && document.getElementById("q9d").checked == false && document.getElementById("q9e").checked == false && document.getElementById("q9f").checked == false) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "¡Exacto!<br><br>Este es un segmento del EEG normal durante la vigilia.<br><br>Los elementos en las regiones frontales son artefactos de parpadeo.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("afterQ9_picture").innerHTML = "A veces, algunas personas parpadean muy frecuentemente, pero eso es normal.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No es correcto.";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("afterQ9_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ10() {

	if (document.getElementById("q10a").checked == false && document.getElementById("q10b").checked == true && document.getElementById("q10c").checked == true && document.getElementById("q10d").checked == false && document.getElementById("q10e").checked == true && document.getElementById("q10f").checked == false) {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "¡Correcto!<br><br>Este EEG pertenece a la vigilia como muestra el artefacto muscular en los canales temporales.<br><br>Los ritmos en este EEG son más lentos que lo esperado de un niño de 9 años durante la vigilia.<br><br>En particular, hay enlentecimiento continuo generalizado en el rango theta/delta y enlentecimiento continuo bitemporal en el rango delta como en los segmentos abajo que pertenecen al mismo paciente.";
		document.getElementById("after_submitQ10").style.background = "lightgreen";
		document.getElementById("answerQ10_picture").src = "EEG13_img/Q10.2.png";
		document.getElementById("answerQ10_picture2").src = "EEG13_img/Q10.3.png";
		document.getElementById("answerQ10_picture3").src = "EEG13_img/Q10.4.png";
		document.getElementById("afterQ10_picture").innerHTML = "Esos hallazgos son sugestivos de una encefalopatía difusa sin especificar etiología y de una lesión funcional o estructural en las regiones temporales.<br><br>El paciente tenía una encefalitis bitemporal como muestra la resonancia magnética cerebral.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "Respuesta incorrecta.<br><br>Algunos ejemplos más y la resonancia magnética del mismo paciente en caso de que te ayude a responder.";
		document.getElementById("after_submitQ10").style.background = "red";
		document.getElementById("answerQ10_picture").src = "EEG13_img/Q10.2.png";
		document.getElementById("answerQ10_picture2").src = "EEG13_img/Q10.3.png";
		document.getElementById("answerQ10_picture3").src = "EEG13_img/Q10.4.png";
		document.getElementById("afterQ10_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}







