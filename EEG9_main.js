
function checkQ1() {

	if (document.getElementById("q1a").checked == true && document.getElementById("q1b").checked == false && document.getElementById("q1c").checked == false && document.getElementById("q1d").checked == true && document.getElementById("q1e").checked == true && document.getElementById("q1f").checked == false) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Exactamente!<br><br>El comienzo de este segmento de EEG muestra artefacto de parpadeo, artefacto muscular, y un ritmo posterior dominante de aproximadamente 9 Hz. Esto nos dice que este segmento de EEG ocurre durante la vigilia.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("answerQ1_picture").src = "EEG9_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Las iluminación repetitiva intermitente (marcada por las líneas rojas) nos dice que este segmento de EEG ocurre durante la estimulación luminosa intermitente.<br><br>El ritmo de la estimulación luminosa (15 Hz en este caso) arrastra al ritmo en los canales posteriores del EEG. Este es el fenómeno de arrastre y es completamente normal.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "No es correcto. <br><br>¿Qué son las líneas rojas a 15 Hz? Fíjate en el ritmo en los canales posteriores del EEG.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("answerQ1_picture").src = "EEG9_img/Q1.2.png";
		document.getElementById("afterQ1_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y no marcas ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ2() {

	if (document.getElementById("q2a").checked == true && document.getElementById("q2b").checked == true && document.getElementById("q2c").checked == false && document.getElementById("q2d").checked == false && document.getElementById("q2e").checked == false && document.getElementById("q2f").checked == false) {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto!<br><br>Este EEG contiene ondas agudas del vertex que son simétricas alrededor de la línea media (rectángulo rojo).<br><br>No hay husos del sueño en este segmento de EEG y, por lo tanto, pertenece a la fase I del sueño.<br><br>No hay descargas epileptiformes en este segmento de EEG. A pesar de que las ondas del vertex son agudas y fáciles de confundir con descargas epileptiformes, su simetría alrededor de la línea media permite diferenciarlas de la actividad epileptiforme.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("answerQ2_picture").src = "EEG9_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "No es correcto. <br><br>Intenta identificar los elementos marcados por el rectángulo rojo. ¿Qué son? ¿En qué fase del ciclo sueño-vigilia aparecen?";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("answerQ2_picture").src = "EEG9_img/Q2.2.png";
		document.getElementById("afterQ2_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y no marcas ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ3() {

	if (document.getElementById("q3a").checked == true && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == true && document.getElementById("q3d").checked == true && document.getElementById("q3e").checked == true && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto!<br><br>Este segmento de EEG puede llevar a confusión. Contiene ondas del vertex bien formadas que son simétricas alrededor de la línea media (rectángulos redondeados rojos) y algunos husos del sueño (rectángulos redondeados verticales rojos).<br><br>No hay actividad epileptiforme en este segmento de EEG.<br><br>¿Qué es la actividad en los rectángulos horizontales rojos? Parece artefacto muscular, que ocurre durante la vigilia ¿verdad?<br><br>Es simplemente un mal contacto en el electrodo T8. El mal contacto en el electrodo crea este patrón de elementos agudos, que se parecen reflejar uno a otro en un patrón parecido a las vias del tren. Simplemente necesita ajustar el contacto de ese electrodo con el cuero cabelludo.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("answerQ3_picture").src = "EEG9_img/Q3.2.png";
		document.getElementById("answerQ3_picture2").src = "EEG9_img/Q3.3.png";
		document.getElementById("afterQ3_picture").innerHTML = "Puedes encontrar otro ejemplo de artefacto en vias de tren debido a mal contacto de un electrodo en la figura de arriba.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "No es correcto. <br><br>Intenta identificar los elementos marcados por los rectángulos verticales rojos. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("answerQ3_picture").src = "EEG9_img/Q3.2.png";
		document.getElementById("answerQ3_picture2").src = "";
		document.getElementById("afterQ3_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y no marcas ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ4() {

	if (document.getElementById("q4a").checked == false && document.getElementById("q4b").checked == true && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == true && document.getElementById("q4e").checked == true && document.getElementById("q4f").checked == true) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> This EEG segment belongs to stage II sleep because it contains vertex waves and spindles (red rectangle). That defines stage II sleep.<br><br>Because vertex waves are sharply contoured, it is easy to miss epileptiform activity which appears near them. There are C4 spikes and sharp waves and less frequent C3/T7 sharp waves (red arrows), which make the EEG segment abnormal. This epileptiform activity breaks the rhythm, is sharply contoured, and some of the epileptiform discharges have a field that makes anatomical sense.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("answerQ4_picture").src = "EEG9_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Not correct. <br><br>Try to identify the elements marked by the red rounded rectangle. What are they? What stage do they appear in?";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("answerQ4_picture").src = "EEG9_img/Q4.2.png";
		document.getElementById("afterQ4_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y no marcas ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == false && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == false && document.getElementById("q5f").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Exactly! <br><br> This EEG segment contains generalized spike-wave complex. They pretty obviously break the rhythm. The parts of the EEG between the generalized spike-wave complexes do not present high-amplitude slow waves suggesting that this EEG segment does not belong to stage III sleep.<br><br>No need to call the rapid response team for this. This pattern is 'angry looking' and abnormal and demonstrates that this patient has a predisposition to have seizures, but what determines if a situation is an emergency that requires the rapid response team to respond immediately is the clinical presentation, not the EEG.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("answerQ5_picture").src = "EEG9_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "The sharply-contoured elements are generalized spike-wave complexes, not vertex waves. Changing the voltage of the EEG segment shows that in this case, these generalized epileptiform discharges are frontal-predominant, which is common in generalized spike-wave complexes.<br><br>Nothing in this EEG segment suggest that we are in a period of photic stimulation.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct. <br><br>The key to identifying this EEG segment is to focus in the obvious elements which break the rhythm. What are they? Where is their predominant location?";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("answerQ5_picture").src = "EEG9_img/Q5.2.png";
		document.getElementById("afterQ5_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y no marcas ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}





 


function checkQ6() {

	if (document.getElementById("q6a").checked == true && document.getElementById("q6b").checked == false && document.getElementById("q6c").checked == false && document.getElementById("q6d").checked == false && document.getElementById("q6e").checked == true && document.getElementById("q6f").checked == false) {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "¡Sí!<br><br>Este es un segmento de EEG típico que corresponde a la vigilia. Hay artefacto de parpadeo (círculos rojos), artefacto muscular (rectángulos rojos grandes), e incluso se puede reconocer un ritmo posterior dominante (rectángulos rojos pequeños). Recuerda que para que el ritmo posterior dominante aparezca el paciente tiene que estar relajado y con los ojos cerrados.<br><br> No hay actividad epileptiforme en este segmento de EEG.";
		document.getElementById("after_submitQ6").style.background = "lightgreen";
		document.getElementById("answerQ6_picture").src = "EEG9_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "¡Muy bien!";

	} else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No es correcto. <br><br>Intenta identificar los elementos marcados por los rectángulos rojos y los círculos rojos. ¿Qué son? ¿En qué fase aparecen?";
		document.getElementById("after_submitQ6").style.background = "red";
		document.getElementById("answerQ6_picture").src = "EEG9_img/Q6.2.png";
		document.getElementById("afterQ6_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y no marcas ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ7() {

	if (document.getElementById("q7a").checked == false && document.getElementById("q7b").checked == false && document.getElementById("q7c").checked == true && document.getElementById("q7d").checked == false && document.getElementById("q7e").checked == true && document.getElementById("q7f").checked == true) {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "¡Correcto!<br><br>Este segmento de EEG contiene un ritmo posterior dominante a aproximadamente 9 Hz (marcado por rectángulos rojos). Esto es vigilia. El ritmo posterior dominante sólo aparece durante la vigilia.";
		document.getElementById("after_submitQ7").style.background = "lightgreen";
		document.getElementById("answerQ7_picture").src = "EEG9_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "También hay una punta en C4 con un campo eléctrico en C3 (flechas rojas).<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No es correcto. <br><br>Intenta identificar los elementos marcados por los rectángulos rojos. ¿Qué son? ¿A qué fase pertenecen?";
		document.getElementById("after_submitQ7").style.background = "red";
		document.getElementById("answerQ7_picture").src = "EEG9_img/Q7.2.png";
		document.getElementById("afterQ7_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y no marcas ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ8() {

	if (document.getElementById("q8a").checked == true && document.getElementById("q8b").checked == false && document.getElementById("q8c").checked == false && document.getElementById("q8d").checked == false && document.getElementById("q8e").checked == false && document.getElementById("q8f").checked == false) {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "¡Correcto! <br><br>Las líneas ondulantes son artefacto de sudoración. Cuando un paciente suda los electrolitos en el sudor forman puentes eléctricos entre los electrodos causando un movimiento ondulante muy lento en los canales del EEG. Sudar es normal.<br><br>Más ejemplos de artefacto de sudoración abajo:";
		document.getElementById("after_submitQ8").style.background = "lightgreen";
		document.getElementById("answerQ8_picture").src = "EEG9_img/Q8.2.png";
		document.getElementById("answerQ8_picture2").src = "EEG9_img/Q8.3.png";
		document.getElementById("afterQ8_picture").innerHTML = "El artefacto de sudoración aparece en todas las fases del ciclo sueño-vigilia porque, bueno..., se puede sudar en cualquier momento.<br><br>La forma de distinguir el artefacto de sudoración es su frecuencia muy lenta. Cada ondas ocupa 2 segundos o más. Esa es una frecuencia muy lenta que no es producida por ningún otro de los elementos típicos del EEG.<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Not correct. <br><br>Más ejemplos de lo mismo abajo. Parece como que los canales del EEG no son líneas rectas, sino líneas ondulantes. ¿Qué son?";
		document.getElementById("after_submitQ8").style.background = "red";
		document.getElementById("answerQ8_picture").src = "EEG9_img/Q8.2.png";
		document.getElementById("answerQ8_picture2").src = "EEG9_img/Q8.3.png";
		document.getElementById("afterQ8_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y no marcas ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}








function checkQ9() {

	if (document.getElementById("q9a").checked == false && document.getElementById("q9b").checked == false && document.getElementById("q9c").checked == true && document.getElementById("q9d").checked == false && document.getElementById("q9e").checked == false && document.getElementById("q9f").checked == true) {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "¡Correcto!<br><br>Este segmento de EEG pertenece a la vigilia con artefacto de parpadeo, algo de artefacto muscular, y algunos segmentos con un ritmo posterior dominante. ¿Qué es el elemento en Cz hacia la mitad de este segmento de EEG? Tiene contornos agudos. Rompe el ritmo. ¿Es una punta? La mejor manera de averiguarlo es mirarlo desde diferentes perspectivas (diferentes montajes):";
		document.getElementById("after_submitQ9").style.background = "lightgreen";
		document.getElementById("answerQ9_picture").src = "EEG9_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG9_img/Q9.3.png";
		document.getElementById("answerQ9_picture3").src = "EEG9_img/Q9.4.png";
		document.getElementById("afterQ9_picture").innerHTML = "En un montaje bipolar transverso y en un montaje referencial (con la nariz como referencia) aparece claramente como una punta. En el montaje con referencia en la nariz incluso tiene un campo eléctrico en Pz, que es un campo que tiene sentido anatómicamente. La actividad epileptiforme en Cz es difícil de reconocer porque, cuanto más EEG leas, más tenderás a 'suprimir' actividad aguda en la línea media porque es normal durante las fases I y II del sueño (ondas del vertex).<br><br>¡Muy bien!";

	} else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "No es correcto. <br><br>¿Ves algo que te llame la atención en Cz? ¿Es una onda del vertex? ¿En qué fase del ciclo sueño vigilia está este segmento de EEG? Míralo en otros montajes abajo";
		document.getElementById("after_submitQ9").style.background = "red";
		document.getElementById("answerQ9_picture").src = "EEG9_img/Q9.2.png";
		document.getElementById("answerQ9_picture2").src = "EEG9_img/Q9.3.png";
		document.getElementById("answerQ9_picture3").src = "EEG9_img/Q9.4.png";
		document.getElementById("afterQ9_picture").innerHTML = "Asegúrate de que marcas todas las respuestas correctas y no marcas ninguna de las respuestas incorrectas.<br><br>¡Inténtalo de nuevo!";

}


}










function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  
	if (ev.target.id == document.getElementById(data).getAttribute('data-div')) {
 		alert("¡Correcto!");
		ev.target.appendChild(document.getElementById(data));
}
	else {
     		alert("Asociación incorrecta. ¡Inténtalo de nuevo!");
  }

}




function checkQ10() {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "La actividad epileptiforme tiene contornos agudos, rompe el ritmo, y tiene un campo eléctrico que tiene sentido anatómicamente. De todas formas, muchos artefactos rompen el ritmo y también tienen contornos agudos. Algunas veces, el campo eléctrico de una descarga epileptiforme no se ve claramente. Recuerda que son reglas generales.<br><br>Si un elemento del EEG no rompe el ritmo (se fusiona suavemente con el resto de ritmos que lo rodean) o tiene un campo eléctrico que aparece no anatómico, probablemente no es actividad epileptiforme.<br><br>Los elementos que sólo aparecen en una fase del ciclo sueño-vigilia son poco probable que sean actividad epileptiforme (por ejemplo, las ondas lambda que sólo aparecen en la vigilia o los POSTs que sólo aparecen en el sueño temprano).<br><br>Si un elemento en el EEG aparece rítmicamente, busca el ritmo del corazón o una máquina alrededor del paciente que tenga el mismo ritmo, etc. Si el ritmo es el mismo que el que aparece en el EEG, posiblemente es artefacto causado por ese ritmo externo al cerebro.";
		document.getElementById("after_submitQ10").style.background = "lightgreen";	
}



