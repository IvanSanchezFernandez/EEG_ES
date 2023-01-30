
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








function checkCC1() {

	if (document.CC1.CC1q1.value == "e" && document.CC1.CC1q2.value == "c" && document.CC1.CC1q3.value == "b" && document.CC1.CC1q4.value == "d") {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡¡Correcto!! <br><br>El EEG presenta ondas agudas centrotemporales izquierdas con una morfología trifásica (con tres fases) clásica. Estas ondas agudas en las regiones centrotemporales son típicas de la epilepsia de la infancia con puntas centrotemporales. La epilepsia de la infancia con puntas centrotemporales es el síndrome epiléptico más común en la infancia, así que es importante familiarizarse con él.<br><br>En el EEG las ondas agudas son típicamente centrotemporales y pueden ser bilaterales síncronas (en la derecha y la izquierda al mismo tiempo), bilaterales asíncronas (en la derecha y en la izquierda en distintos momentos), o, más raramente, unilaterales (sólo en la derecha o sólo en la izquierda). Las descargas epileptiformes en la epilepsia de la infancia con puntas centrotemporales típicamente están potenciadas durante el sueño.<br><br>La semiología típica de las crisis epilépticas en la epilepsia de la infancia con puntas centrotemporales es la de un niño o niña que se despierta por la noche con un lado de la cara temblando. El niño puede hacer ruidos guturales porque la garganta puede estar también temblando y el niño intenta hablar sin ser capaz de hablar. Algunas veces, la crisis epiléptica evoluciona causando convulsiones en un lado del cuerpo e incluso en los dos lados del cuerpo. La semiología explicada por esta familia es consistente en general con los hallazgos en el EEG (recuerda que lo que la familia describe no es necesariamente perfectamente exacto, pero la descripción en este caso es en general consistente con la semiología típica de epilepsia de la infancia con puntas centrotemporales, quizás la desviación ocular no es tan típica, pero puede ocurrir).<br><br>Es extremadamente importante preguntarse: ¿son los hallazgos del EEG hallazgos que se encuentran típicamente en pacientes con esa semiología? Las anomalías en el EEG pueden ser un hallazgo incidental que realmente no explica el evento y simplemente guia en la dirección equivocada. Esto es particularmente cierto con las puntas centrotemporales, que son tan comunes en la infancia (<a href='https://pubmed.ncbi.nlm.nih.gov/17638587/' target='_blank'>1%</a>-<a href='https://pubmed.ncbi.nlm.nih.gov/6766393/' target='_blank'>3%</a> de la población general) que pueden encontrarse como un hallazgo incidental.<br><br><a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>Una crisis epiléptica no provocada y descargas epileptiformes consistentes con la semiología de la crisis epiléptica son suficientes para diagnosticar epilepsia</a>. La epilepsia de la infancia con puntas centrotemporales típicamente tiene crisis epilépticas infrecuentes y se resuelve con la edad. Por lo tanto, muchas familias deciden incluso no tratar con ninguna medicación antiepiléptica.<br><br>De forma importante, cuando las descargas epileptiformes son exclusivamente unilaterales debe pasarte por la cabeza que esto puede ser una epilepsia focal estructural que imita las características de la epilepsia de la infancia con puntas centrotemporales. En estos casos debes recomendar una resonancia magnética cerebral para evaluar la posibilidad de una lesión estructural en la región centrotemporal izquierda. Esto es especialmente importante cuando el paciente también tiene un enlentecimiento focal en la misma región. Este paciente tiene, además de las descargas epileptiformes, enlentecimiento con frecuencia delta en la región centrotemporal izquierda, lo que sugiere una lesión estructural o funcional en esa área. Haz una resonancia magnética cerebral para evaluar la posibilidad de una lesión estructural en la región centrotemporal izquierda.";
		document.getElementById("after_submitCC1").style.background = "lightgreen";
		document.getElementById("answerCC1_picture").src = "EEG10_img/CC1.5.png";
		document.getElementById("answerCC1_picture2").src = "EEG10_img/CC1.6.png";
		document.getElementById("afterCC1_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitCC1").style.visibility = "visible";
		document.getElementById("answerCC1").innerHTML = "¡No! <br><br>Mira bien al EEG. ¿Hay algo más que las descargas epileptiformes?";
		document.getElementById("after_submitCC1").style.background = "red";
		document.getElementById("answerCC1_picture").src = "EEG10_img/CC1.5.png";
		document.getElementById("answerCC1_picture2").src = "EEG10_img/CC1.6.png";
		document.getElementById("afterCC1_picture").innerHTML = "¡Inténtalo de nuevo!";

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








function checkCC2() {

	if (document.CC2.CC2q1.value == "a" && document.CC2.CC2q2.value == "b") {
		document.getElementById("after_submitCC2").style.visibility = "visible";
		document.getElementById("answerCC2").innerHTML = "¡Correcto!<br><br>Este segmento del EEG muestra elementos con contornos afilados en el lóbulo temporal (en el lóbulo temporal izquierdo en el primer segmento del EEG y en el lóbulo temporal derecho en el segundo segmento del EEG). La morfología no es típica de ondas agudas y no rompe el ritmo. Es realmente un ritmo de 6 Hz o más que no evoluciona, lo cual es muy consistente con una variante normal. Muy probablemente este patrón representa puntas en forma de palo (wicket spikes, una variante normal) o brotes de actividad theta temporal (otra variante normal).<br><br>La semiología de ver formas geométricas simples y manchas de colores es típica de crisis epilépticas occipitales, pero también de migrañas. Cuando las crisis epilépticas temporales tienen fenómenos visuales, son típicamente formas más elaboradas.";
		document.getElementById("after_submitCC2").style.background = "lightgreen";
		document.getElementById("afterCC2_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitCC2").style.visibility = "visible";
		document.getElementById("answerCC2").innerHTML = "¡No!";
		document.getElementById("after_submitCC2").style.background = "red";
		document.getElementById("afterCC2_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}

