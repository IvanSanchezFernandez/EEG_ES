
function checkQ1() {

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == true && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == false && document.getElementById("q1e").checked == false && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Exactamente!<br><br>Las flechas rojas señalan a ondas lentas posteriores de la juventud, que son una onda lenta que hace al ritmo posterior dominante aparecer como un sinusoide. Es una variante normal.<br><br>Otros dos segmentos del EEG del mismo paciente (el primer segmento tiene algunas ondas lentas posteriores de la juventud marcadas con curvas rojas) se presentan en las figuras de abajo:";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG14_img/Q1.2.png";
		document.getElementById("answerQ1_picture_2").src = "EEG14_img/Q1.3.png";		
                document.getElementById("answerQ1_picture_3").src = "EEG14_img/Q1.4.png";
		document.getElementById("afterQ1_picture").innerHTML = "Las partes señaladas por las flechas moradas corresponden a artefacto muscular. Todos los segmenos de EEG pertenecen a la vigilia.<br><br>De particular interés es que el ritmo posterior dominante es de mayor amplitud en el hemisferio derecho que en el hemisferio izquierdo, pero esta asimetría está todavía en los límites de lo normal (el ritmo posterior dominante en el hemisferio derecho tiene que ser más de tres veces mayor en amplitud en el hemisferio derecho que en el hemisferio izquierdo para ser anormal).<br><br>¡Muy bien!";


	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No es correcto. <br><br>Intenta identificar a qué fase del ritmo sueño-vigilia pertenece el segmento de EEG de abajo: ¿vigilia o sueño? Después intenta pensar en los elementos del EEG que aparecen en esa fase del sueño o de la vigilia.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG14_img/Q1.2.png";
		document.getElementById("answerQ1_picture_2").src = "EEG14_img/Q1.3.png";
		document.getElementById("answerQ1_picture_3").src = "EEG14_img/Q1.4.png";
		document.getElementById("afterQ1_picture").innerHTML = "Arriba hay algunos otros segmentos de EEG del mismo paciente.<br><br>Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}








function checkQ2() {

	if (document.getElementById("q2a").checked == false && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == true && document.getElementById("q2f").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correcto.<br><br>Hay, al menos, dos artefactos del EEG que deberías reconocer fácilmente: artefacto de parpadeo y artefacto de masticación.<br><br>El artefacto de parpadeo aparece frecuentemente (tan frecuentemente como el paciente parpadee) durante la vigilia.<br><br>El artefacto de masticación es simplemente artefacto muscular que afecta predominantemente las regiones temporales (representa la contracción de los músculos temporales durante la masticación).";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "Familiarizate con estos dos artefactos del EEG. Aparecen muy frecuentemente es importante reconocerlos para evitar considerarlos una anomalía erroneamente. Las crisis epilépticas convulsivas pueden tener artefacto muscular y de movimiento asociados con ellas, pero el artefacto de masticación es artefacto muscular rítmico sin cambios del EEG sugestivos de crisis epilépticas.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No es correcto.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}








function checkQ3() {

	if (document.getElementById("q3a").checked == false && document.getElementById("q3b").checked == true && document.getElementById("q3c").checked == false && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == false && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto! Esta pregunta tenía trampa. <br><br>Estos dos segmentos del EEG muestran un patrón rítmico con evolución en frecuencia, amplitud, morfología, y distribución espacial. Además, parece que hay algunos complejos de punta-onda mezclados en el patrón rítmico. ¿Qué más necesitas para reconocer una crisis epiléptica en el EEG?<br><br>A pesar de que una crisis epiléptica es típicamente un patrón rítmico con algo de evolución en frecuencia, amplitud, morfología, y distribución espacial, no todos los patrones rítmicos con evolución en frecuencia, amplitud, morfología, y distribución espacial son crisis epilépticas.<br><br>Una visión más detallada de la morfología de las presuntas descargas epileptiformes muestra que las presuntas puntas no precede a la presunta onda lenta, sino que la presunta punta sigue tras la presunta onda lenta o aparece en el medio de la presunta onda lenta.<br><br>Además, el campo eléctrico no tiene mucho sentido con presuntas puntas de alto voltaje en el canal P4-O2 y sin campo eléctrico en el canal P4-O2 que es el canal vecino.<br><br>Esto no es una crisis epiléptica, pero sin video, este patrón podría hacerte creer que lo es.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "Con video, verías a un niño saltando rítmicamente en la cuna.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No es correcto.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == true && document.getElementById("q4c").checked == true && document.getElementById("q4d").checked == false && document.getElementById("q4e").checked == false && document.getElementById("q4f").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡Correcto!<br><br>Este segmento del EEG no contiene artefacto de parpadeo o ondas lentas posteriores de la juventud (que se ven típicamente entremezcladas con el ritmo posterior dominante).<br><br>Hay un enlentecimiento focal intermitente en las regiones occipitales. Este enlentecimiento rítmico puede ser enlentecimiento intermitente occipital rítmico (OIRDA), que se ve típicamente en epilepsia de ausencia infantil. Esto también puede ser enlentecimiento focal intermitente, lo que significa una lesión funcional o estructural en la región del enlentecimiento. Otros ejemplos del mismo paciente se muestran abajo.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG14_img/Q4.2.png";
		document.getElementById("answerQ4_picture2").src = "EEG14_img/Q4.3.png";
		document.getElementById("afterQ4_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No es correcto.<br><br>Más ejemplos del mismo patrón abajo.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG14_img/Q4.2.png";
		document.getElementById("answerQ4_picture2").src = "EEG14_img/Q4.3.png";
		document.getElementById("afterQ4_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == true && document.getElementById("q5f").checked == false) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "¡Exactamente!<br><br>OIRDA se asocia clásicamente con la epilepsia de ausencias infantiles.<br><br>Hay algunas asociaciones que merecen la pena recordarse:<br>epilepsia del lóbulo temporal y descargas epileptiformes focales temporales y enlentecimiento focal temporal;<br>epilepsias occipitales y descargas epileptiformes focales occipitales;<br>epilepsia mioclónica juvenil y polipuntas generalizadas y respuesta fotoparoxística;<br>síndrome de West e hipsarritmia.<br><br>Obviamente, estas asociaciones son una simplificación de la realidad, pero son útiles de recordar porque te pueden ayudar a diagnosticar alguna enfermedad y responder alguna pregunta en los exámenes.<br><br>El paciente en la pregunta 4 tenía enlentecimiento focal intermitente occipital (que podría ser OIRDA) y también tenía crisis epilépticas de ausencia (como la del segmento de EEG abajo).";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG14_img/Q5.1.png";
		document.getElementById("afterQ5_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "No es correcto.<br><br>Este tipo de epilepsia tiene crisis epilépticas como la del segmento de EEG abajo.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG14_img/Q5.1.png";
		document.getElementById("afterQ5_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}








function checkQ6() {

	if (document.getElementById("q6a").checked == true && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == false && document.getElementById("q6f").checked == true) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "¡Sí!<br><br>Este es un segmento de EEG normal durante la vigilia con un ritmo posterior dominante de 10 Hz.<br><br>Las flechas rojas indican a ondas lentas posteriores de la juventud, una variante normal en la que hay algunas ondas de 1-2 Hz superimpuestas en el ritmo posterior dominante. Esto es completamente normal y ocurre en la juventud.<br><br>Algunas veces, si tienen un contorno afilado, las ondas lentas posteriores de la juventud, pueden aparecer como polipuntas; pero que no te confundan: no rompen el ritmo, son simplemente parte de una variante normal del ritmo posterior dominante.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("afterQ6_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No es correcto.";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("afterQ6_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == true && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == false && document.getElementById("q7d").checked == false && document.getElementById("q7e").checked == false && document.getElementById("q7f").checked == true) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "¡Correcto!<br><br>Este es un segmento de EEG normal durante la vigilia (como indica el ritmo posterior dominante, el artefacto de parpadeo, y el artefacto muscular).<br><br>Es relativamente fácil encontrar elementos que parecen con un contorno afilado en el EEG (de hecho, las flechas rojas están ahí para hacerte creer que señalan a algo anormal). Los lectores de EEG sin experiencia tienden a considerar cualquier elemento con contornos afilados como actividad epileptiforme (frecuentemente con consecuencias clínicas importantes como poner a los pacientes en tratamiento con medicación anticonvulsiva durante varios años). Lo que te hará un mejor lector de EEG es saber lo que parece una descarga epileptiforme, pero no lo es.<br><br>En este caso, los elementos con un contorno afilado marcados por las flechas rojas no rompen el ritmo, no tienen una buena morfología (una morfología típica de cualquiera de las descargas epileptiformes), y no tienen un campo eléctrico. De forma importante, en otros montajes (transverso bipolar y referencial a Cz, ambos mostrados abajo), las supuestas descargas epileptiformes no aparecen con contornos afilados.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG14_img/Q7.3.png";
		document.getElementById("answerQ7_picture2").src = "EEG14_img/Q7.4.png";
		document.getElementById("afterQ7_picture").innerHTML = "Cuando tengas dudas sobre una descarga epileptiforme, no la consideres anormal. Pregúntate: ¿tiene una buena morfología?, ¿tiene un campo eléctrico que tenga sentido?, ¿rompe el ritmo?, y hazte esas mismas preguntas mirando en 2 o 3 montajes distintos. Entonces, las cosas se verán mucho más claras.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No es correcto.<br><br>Aquí tienes detalles, una explicación potencial de lo que ves, y el mismo segmento en un montaje distinto (transverso bipolar y referencial a Cz).";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG14_img/Q7.3.png";
		document.getElementById("answerQ7_picture2").src = "EEG14_img/Q7.4.png";
		document.getElementById("afterQ7_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}








function checkQ8() {

	if (document.getElementById("q8a").checked == false && document.getElementById("q8b").checked == false && document.getElementById("q8c").checked == true && document.getElementById("q8d").checked == false && document.getElementById("q8e").checked == true && document.getElementById("q8f").checked == false) {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "¡Correcto!<br><br>Este segmento corresponde a la vigilia como muestra el artefacto muscular.<br><br>En el hemisferio derecho puedes ver complejos punta-onda en la región centrotemporoparietal derecha. Este paciente también tiene enlentecimiento semirrítmico centrotemporal derecho con algo de evolución en frecuencia y amplitud.";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "EEG14_img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "Los complejos punta-onda centrotemporoparietales son sugestivos de un umbral convulsivo disminuido en la región centrotemporoparietal derecha.<br><br>Enlentecimiento semirrítmico en la región centrotemporoparietal derecha es sugestivo de una lesión funcional o estructural en la región centrotemporoparietal derecha.<br><br>Este paciente tuvo una lesión estructural en la región centrotemporoparietal derecha, más prominente en la región mesial temporal derecha. También tuvo crisis epilépticas electroclínicas con un foco en la región temporal derecha.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "No es correcto. <br><br> Otros hallazgos del mismo paciente abajo (en caso de que ayude).";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG14_img/Q8.2.png";
		document.getElementById("afterQ8_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}








function checkQ9() {

	if (document.getElementById("q9a").checked == false && document.getElementById("q9b").checked == true && document.getElementById("q9c").checked == true && document.getElementById("q9d").checked == true && document.getElementById("q9e").checked == false && document.getElementById("q9f").checked == false) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "¡Correcto!<br><br> Este es un segmento de EEG con un brote de complejos punta-onda generalizados irregulares predominantemente frontales a 3-4 Hz durante aproximadamente 4 segundos. Esto es definitivamente anormal.<br><br>Este patrón puede representar tanto un patrón ictal (crisis epilépticas) o interictal (actividad epileptiforme).<br><br>En esta niña de 3 años en particular, esta era una crisis epiléptica en la que la niña tenía una pérdida de tono con flexión del cuello.<br><br>Algunas crisis epilépticas similares de la misma paciente abajo, algunas de ellas con polipuntas.";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "EEG14_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG14_img/Q9.3.png";
		document.getElementById("afterQ9_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No es correcto.<br><br>¿Los segmentos de abajo del mismo paciente ayudan?";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG14_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG14_img/Q9.3.png";
		document.getElementById("afterQ9_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}








function checkQ10() {

	if (document.getElementById("q10a").checked == false && document.getElementById("q10b").checked == true && document.getElementById("q10c").checked == true && document.getElementById("q10d").checked == true && document.getElementById("q10e").checked == true && document.getElementById("q10f").checked == true) {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "¡Correcto!<br><br> Este segmento de EEG contiene un patrón con evolución en frecuencia, amplitud, morfología, y distribución espacial.<br><br>Los campos eléctricos de este patrón tienen sentido anatómicamente y esto es una crisis epiléptica.<br><br>En particular, una crisis epiléptica focal.";
		document.getElementById("after_submitQ10").style.background = "lightgreen";
		document.getElementById("afterQ10_picture").innerHTML = "¿Cuál es el rasgo definitorio de la mayoría de las crisis epilépticas? Eolución.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "No es correcto.";
		document.getElementById("after_submitQ10").style.background = "red";
		document.getElementById("afterQ10_picture").innerHTML = "Asegúrate de marcar todas las respuestas correctas y ninguna de las respuestas incorrectas.<br><br>!Inténtalo de nuevo!";

}


}







