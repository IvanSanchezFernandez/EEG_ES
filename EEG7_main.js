function checkQ1() {

	if (document.question1.question.value == "a") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡¡Correcto!! <br><br> La deprivación de sueño es importante antes del EEG. Es probablemente la técnica de activación que más aumenta las probabilidades de ver actividad epileptiforme en el EEG.<br>Puede ser complicado para el paciente encontrar a alguien que los acompañe al hospital, pero merece la pena si uno considera que aumenta considerablemente la probabilidad de capturar actividad epileptiforme (y capturar actividad epileptiforme es una de las principales razones para hacer un EEG). Si vas a hacer un EEG, hazlo bien (y esto incluye deprivación de sueño la noche anterior al EEG).";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "Tras la deprivación de sueño hay un riesgo aumentado de que el paciente tenga una crisis epiléptica. El riesgo es típicamente bajo, pero no es cero. Es mejor que el paciente venga acompañado de un familiar o amigo cuando viene al hospital y que vuelva a casa y recupere el sueño perdido.<br><br>¡Muy bien!";

}

	if (document.question1.question.value == "b") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No. ¡Definitivamente no!<br><br> Conducir tras dormir poco es peligroso. <a href='https://drowsydriving.org/about/facts-and-stats/' target='_blank'> ¡Muy peligroso!</a> <a href='https://oem.bmj.com/content/oemed/57/10/649.full.pdf' target='_blank'> Conducir con deprivación de sueño puede ser tan peligroso como conducir borracho.</a> Mucha gente conduce tras una cantidad inadecuada de sueño, pero eso no lo hace menos peligroso. <a href='https://pubmed.ncbi.nlm.nih.gov/16145022/' target='_blank'>Si piensas que esto no te afecta, mira este estudio.</a>";
		document.getElementById("after_submitQ1").style.background = "red";   
		document.getElementById("afterQ1_picture").innerHTML = "Aparte de los peligros de conducir con deprivación de sueño (tiempo de reacción lento, riesgo de dormirse conduciendo), un paciente con sospecha de tener epilepsia tiene un riesgo aumentado de crisis epilépticas mientras conduce.<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question1.question.value == "c") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No. <br><br> Venir al hospital en transporte público es más seguro que venir al hospital con el paciente conduciendo.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "De todas maneras, hay riesgo de tener una crisis epiléptica en su camino al hospital. En esa situación sería más fácil si hubiera un familiar o amigo con el paciente.<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question1.question.value == "d") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No, esta respuesta no es correcta. <br><br> La deprivación de sueño es parte del EEG de la misma manera que la estimulación luminosa intermitente es parte del EEG.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "Un EEG sin deprivación de sueño es incompleto. La deprivación de sueño puede ser una molestia para el paciente y la familia del paciente, pero merece la pena.<br><br> ¡Inténtalo de nuevo!";

}

}








function checkQ2() {

	if (document.getElementById("q2a").checked == true && document.getElementById("q2b").checked == false && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == false && document.getElementById("q2f").checked == true) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Exactamente. <br><br> Esto es normal y debes facilitar que el paciente siga con la hiperventilación durante un total de 3 aproximadamente 3 minutos.<br><br>La hiperventilación, especialmente en niños, puede provocar ondas lentas muy prominentes, pero no hay límite en la cantidad de enlentecimiento o en la cantidad de alta amplitud: será normal en tanto sea simétrico. El patrón de hiperventilación sólo es anormal si es persistentemente asimétrico. O si hay actividad epileptiforme, claro<br><br> En niños mayores y adultos, el enlentecimiento durante la hiperventilación es menos prominente como se muestra en la figura de abajo (y sí, el paciente en el segmento del EEG de abajo está hiperventilando tanto como el paciente en la figura principal de la pregunta 2, pero el paciente de abajo es simplemente mayor y hay menos enlentecimiento con la hiperventilación):";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG7_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "No hay actividad epileptiforme en este segmento del EEG.<br><br>La hiperventilación puede ser una molestia (causa sensación de mareo y, algunas veces, sensación de hormigueo en los dedos), pero en general es muy segura. <br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No es correcto. <br><br> Asegúrate de que has marcado todas las respuestas correctas y no has marcado ninguna de las respuestas incorrectas.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "";
		document.getElementById("afterQ2_picture").innerHTML = "<br><br>¡Inténtalo de nuevo!";

}


}









function checkQ3() {

	if (document.question3.question.value == "a") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No. Lo siento, esta respuesta no es correcta.<br><br> A pesar de que la hiperventilación es muy segura y típicamente sólo causa sensación de mareo y hormigueo, la hiperventilación puede causar efectos adversos serios en algunos pacientes.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "b") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Incorrecto.<br><br> La hiperventilación no causa hipoglicemia.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "De todas formas, con hipoglicemia relativa (por ejemplo, porque el paciente tomó su última comida mucho antes del EEG) hay una probabilidad más alta de que aparezca actividad epileptiforme en el EEG durante la hiperventilación. <br><br> ¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "c") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No. <br><br> La hipertensión no es una contraindicación para la hiperventilación.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "d") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correcto. <br><br> A pesar de que la hiperventilación es muy segura en general, causa hipocarbia y vasoconstricción cerebral.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "No hiperventiles a pacientes con una historia de infarto cerebral o con alto riesgo de tenerlo.<br><br> ¡Inténtalo de nuevo!";

}

	if (document.question3.question.value == "") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No has seleccionado ninguna respuesta. <br><br>Selecciona alguna respuesta.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";
}


}








function checkQ4() {

	if (document.question4.question.value == "c") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Exactamente.<br><br>La hiperventilación es particularmente útil para provocar actividad epileptiforme en epilepsias generalizadas, principalmente en epilepsia de ausencias de la infancia.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "¡Muy bien!";

} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Incorrecto.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "¡Inténtalo de nuevo!";

}


}








function checkQ5() {

	if (document.question5.question.value == "c") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "¡Sí! <br><br> Esto se llama 'fenómeno de arrastre'. Si te fijas, notarás que cuando la estimulación luminosa intermitente comienza, las ondas de la parte posterior del EEG siguen la frecuencia de las luces: 12 Hz en la figura superior y 16 Hz en la figura inferior.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Esto es complementamente normal y se piensa que representa un potencial evocado visual causando esta onda en la corteza occipital.<br><br>Tener el fenómeno de arrastre durante la estimulación luminosa intermitente es normal.<br><br>No tener fenómeno de arrastre durante la estimulación luminosa intermitente también es normal.<br><br>Por lo tanto, no importa si hay fenómeno de arrastre o no. No tiene ninguna consecuencia práctica. Sólo asegúrate de no inyectar ninguna medicación anticonvulsiva o llamar al equipo de respuesta rápida del hospital por esto.<br><br>¡Muy bien!";

} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "No hay necesidad de ninguna medida especial. <br><br> ¡Inténtalo de nuevo!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == false && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == true && document.getElementById("q6d").checked == true && document.getElementById("q6e").checked == false && document.getElementById("q6f").checked == false) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "¡Exáctamente! <br><br> Hay actividad epileptiforme en este segmento del EEG (complejos de punta-onda generalizados para ser precisos) y la presencia de actividad epileptiforme es anormal. El significado de la actividad epileptiforme durante las técnicas de activación es el mismo que cuando la actividad epileptiforme aparece espontáneamente.<br><br>Cuando la estimulación luminosa intermitente causa la aparición de descargas epileptiformes (respuesta fotoparoxística) no hay necesidad de ninguna intervención en particular. <br><br>Abajo hay otro ejemplo de respuesta fotoparoxística:";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG7_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Raramente, la estimulación luminosa intermitente (como cualquier otra técnica de activación) puede causar una crisis epiléptica. La respuesta fotoconvulsiva se refiere al fenómeno en el que la estimulación luminosa intermitente causa una crisis epiléptica.<br><br> ¡Muy bien!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No es correcto. <br><br> Asegúrate de marcar todas las respuestas correctas y no marcar ninguna de las respuestas incorrectas.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "";
		document.getElementById("afterQ6_picture").innerHTML = "¡Inténtalo de nuevo!";

}


}








function checkQ7() {

	if (document.question7.question.value == "a") {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "¡Exáctamente!<br><br>La estimulación luminosa intermitente es particularmente útil para provocar actividad epileptiforme en epilepsias generalizadas, principalmente en la epilepsia mioclónica juvenil.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("afterQ7_picture").innerHTML = "¡Muy bien!";

} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Incorrecto";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("afterQ7_picture").innerHTML = "¡Inténtalo de nuevo!";

}


}




