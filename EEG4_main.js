



function checkQ1() {

	if (document.question1.question.value == "c") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡¡Correcto!! <br><br> No hay rasgos definitivos que permitan la identificación de la actividad epileptiforme siempre. De todas formas, elementos con un perfil afilado que rompen el ritmo, y tienen un campo eléctrico que tiene sentido anatómicamente son probablemente actividad epileptiforme. Cuantos más de esos rasgos, más probable es que sea actividad epileptiforme. Cuantos menos de esos rasgos, menos probable que sea actividad epileptiforme. Puedes encontrar excepciones a todas estas reglas generales, pero estas reglas generales ayudan (un montón) en la gran mayoría de los casos.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = " No hay rasgos definitivos que permitan la identificación de la actividad epileptiforme siempre. De todas formas, elementos con un perfil afilado que rompen el ritmo, y tienen un campo eléctrico que tiene sentido anatómicamente son probablemente actividad epileptiforme. Cuantos más de esos rasgos, más probable es que sea actividad epileptiforme. Cuantos menos de esos rasgos, menos probable que sea actividad epileptiforme. Puedes encontrar excepciones a todas estas reglas generales, pero estas reglas generales ayudan (un montón) en la gran mayoría de los casos.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "<br><br> ¡Inténtalo de nuevo!";

}

}








function checkCC1() {

	if (document.CC1.CC1q1.value == "a" && document.CC1.CC1q2.value == "c" && document.CC1.CC1q3.value == "b" && document.CC1.CC1q4.value == "b") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡Sí!<br><br>Los segmentos del EEG pertenecen a la vigilia porque tienen artefacto muscular, artefacto de parpadeo, y un ritmo posterior dominante.<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>El diagnóstico de epilepsia es un diagnóstico clínico.</a>. Para hacer un diagnóstico de epilepsia tienes que tener al menos 2 crisis epilépticas no provocadas separadas por más de 24 horas. Otra opción para hacer un diagnóstico de epilepsia es tener 1 crisis epiléptica no provocada y una probabilidad futura de crisis epilépticas no provocadas de, al menos, el 60%. Cuando un paciente tiene una crisis epiléptica no provocada, un EEG con actividad epileptiforme que sea consistente con el tipo de crisis epiléptica que el paciente presenta hace un diagnóstico de epilepsia porque la probabilidad de crisis epilépticas en el futuro es más del 60%.<br><br>Muchos pacientes con epilepsia tienen EEGs normales. El diagnóstico de epilepsia es un diagnóstico clínico. Repitámoslo de nuevo. El diagnóstico de epilepsia es un diagnóstico clínico.<br><br>Algunos elementos en el ritmo posterior dominante aparecen algo afilados en su contorno, pero no tienen un campo eléctrico y no rompen el ritmo (su ritmo es predecible como se muestra abajo). No son descargas epileptiformes.";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
                document.getElementById("answerCC1_picture").src = "EEG4_img/CC1.3.png";
		document.getElementById("answerCC1_picture2").src = "EEG4_img/CC1.4.png";
		document.getElementById("afterCC1_picture").innerHTML = "¿Y el paciente? ¿Tiene epilepsia? Depende del resto de la historia clínica. Necesitaríamos más detalles de los episodios para saber si tiene epilepsia o no.<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡No!<br><br>¿Cómo se hace un diagnóstico de epilepsia?<a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>El diagnóstico de epilepsia es un diagnóstico clínico</a>.<br><br>¿Ves elementos que rompan el ritmo?";
		document.getElementById("after_submitCC1").style.background = "red";
                document.getElementById("answerCC1_picture").src = "EEG4_img/CC1.3.png";
		document.getElementById("answerCC1_picture2").src = "EEG4_img/CC1.4.png";
		document.getElementById("afterCC1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}
