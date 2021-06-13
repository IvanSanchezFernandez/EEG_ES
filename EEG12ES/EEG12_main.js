

function checkQ1() {

	if (document.question1.question.value == "b") {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "¡Correcto!<br><br> Las personas con epilepsia pueden tener un EEG de rutina normal. De hecho, la mayoría de personas con epilepsia tienen un EEG de rutina normal. El nivel diagnóstico (sensibilidad) de un EEG de rutina varía entre distintas poblaciones, pero está bastante consistentemente entre el 25% y el 50% tanto en niños como en adultos: mira algunos ejemplos <a href='https://pubmed.ncbi.nlm.nih.gov/30718615/' target='_blank'>aquí</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/28520630/' target='_blank'>aquí</a>, y <a href='https://pubmed.ncbi.nlm.nih.gov/18042424/' target='_blank'>aquí</a>.";
		document.getElementById("after_submitQ1").style.background = "lightgreen";
		document.getElementById("afterQ1_picture").innerHTML = "Esto significa que, si usas un EEG de rutina para 'descartar epilepsia', aproximadamente un 50% a 75% de los pacientes en los que has 'descartado epilepsia' realmente tienen epilepsia. Si piensas en esos números, parece que un EEG de rutina no es un gran método para 'descartar epilepsia'.<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Respuesta totalmente incorrecta. Esta idea es incorrecta y daña a los pacientes.<br><br>Si has estado 'descartando epilepsia' con un EEG, intenta leer sobre el nivel diagnóstico del EEG antes de seguir con esa práctica.";
		document.getElementById("after_submitQ1").style.background = "red";
		document.getElementById("afterQ1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQ2() {

	if (document.question2.question.value == "b") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "¡Correcto!<br><br>Cuanto más largo sea el EEG, mejor es el nivel diagnóstico. Cuantos más EEGs, más alto es el nivel diagnóstico. Esto se muestra, por ejemplo, <a href='https://pubmed.ncbi.nlm.nih.gov/18042424/' target='_blank'>aquí</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/29248327/' target='_blank'>aquí</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/26984946/' target='_blank'>aquí</a>, <a href='https://pubmed.ncbi.nlm.nih.gov/18997627/' target='_blank'>aquí</a>, y <a href='https://pubmed.ncbi.nlm.nih.gov/26076840/' target='_blank'>aquí</a>.";
		document.getElementById("after_submitQ2").style.background = "lightgreen";
		document.getElementById("afterQ2_picture").innerHTML = "De todas formas, también puedes ver en esos estudios que las ganancias en nivel diagnóstico disminuyen prominentemente tras 24-72 horas. Por lo tanto, hay muchos pacientes que tienen epilepsia confirmada (basada en historia previa y en EEGs) con EEGs normales incluso cuando el EEG dura muchos días.<br><br>En resumen, nunca 'descartarás epilepsia' con un EEG, independientemente de cuánto dure el EEG.<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Respuesta totalmente incorrecta. Esta idea es incorrecta y daña a los pacientes.<br><br>Si has estado 'descartando epilepsia' con un EEG, intenta leer sobre el nivel diagnóstico del EEG antes de continuar con esa práctica.";
		document.getElementById("after_submitQ2").style.background = "red";
		document.getElementById("afterQ2_picture").innerHTML = "En resumen, nunca 'descartarás epilepsia con un EEG, independientemente de cuánto dure.<br><br>¡Inténtalo de nuevo!";

}

}








function checkQ3() {

	if (document.question3.question.value == "b") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "¡Correcto! <br><br>Si tu EEG cubriera todas las áreas del cerebro y capturaras el evento sospechoso durante el EEG, entonces un EEG normal descartaría crisis epilépticas. De todas formas, no hay ningún EEG (en el cuero cabelludo o intracranial) que cubra todas las áreas del cerebro. Por lo tanto, las crisis epilépticas con un EEG completamente normal ocurren y esto es frecuente en el EEG en el cuero cabelludo cuando vienen de las regiones mesiales del cerebro como <a href='https://pubmed.ncbi.nlm.nih.gov/21532379/' target='_blank'>la región mesial del lóbulo frontal</a>.";
		document.getElementById("after_submitQ3").style.background = "lightgreen";
		document.getElementById("afterQ3_picture").innerHTML = "Para ser completamente claro, si tienes una sospecha clínica de una crisis epiléptica con inicio generalizado o evolución generalizada y el EEG en el cuero cabelludo es normal durante el evento, entonces puedes estar bastante seguro de que el paciente no tuvo una crisis epiléptica generalizada. De todas formas, no puedes descartar una crisis epiléptica focal no capturada por el EEG.<br><br>En resumen, nunca 'descartarás crisis epilépticas' o 'descartarás epilepsia' con un EEG, independientemente de cómo de largo sea el EEG.<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Respuesta totalmente incorrecta. Esta idea es incorrecta y daña a los pacientes.";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "En resumen, nunca 'descartarás crisis epilépticas' o 'descartarás epilepsia' con un EEG, independientemente de cuánto dure el EEG.<br><br>¡Inténtalo de nuevo!";

}

}








function checkQ4() {

	if (document.question4.question.value == "b") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "¡Correcto!<br><br> Un diagnóstico de epilepsia requiere (en la mayoría de los casos) al menos una crisis epiléptica <a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>(mira la Tabla 2)</a>. Si tu sospecha clínica es que el evento es un síncope, entonces la presencia de actividad epileptiforme en el EEG no hará un diagnóstico de epilepsia porque no hay una sospecha clínica de crisis epiléptica. Este es un concepto muy importante.";
		document.getElementById("after_submitQ4").style.background = "lightgreen";
		document.getElementById("afterQ4_picture").innerHTML = "Un pequeño porcentaje (1%-5%) de personas que nunca han tenido una crisis epiléptica y que nunca la tendrá tienen actividad epileptiforme en el EEG, como se muestra, por ejemplo, <a href='https://pubmed.ncbi.nlm.nih.gov/15652731/' target='_blank'>aquí</a> y <a href='https://pubmed.ncbi.nlm.nih.gov/8082631/' target='_blank'>aquí</a>.<br><br>Si tienes un paciente que se presenta con (por ejemplo) síncope y haces un EEG y el EEG muestra descargas epileptiformes, ¿vas a diagnosticar al paciente con epilepsia? ¿Basándote en qué? Recuerda, 1-5% de la población tiene que nunca ha tenido y que nunca tendrá crisis epilépticas tienen actividad epileptiforme en el EEG. ¿Por qué pediste un EEG en primer lugar cuando no tenías una sospecha clínica de crisis epilépticas? ¿Vas a dar medicaciones antiepilépticas al paciente? ¿Para prevenir crisis epilépticas que el paciente no tiene? <br><br>Por favor, responde a esas preguntas antes de considerar un EEG 'para estar seguros' en un paciente con eventos que no son clínicamente sospechosos de crisis epilépticas.<br><br>En algunos ambientes, encontrarás pacientes con medicaciones antiepilépticas durante varios años cuando realmente nunca tuvieron ninguna crisis epiléptica, simplemente un síncope (u otro evento no epiléptico) y un EEG con descargas epileptiformes. Esto daña a los pacientes.<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Respuesta completamente incorrecta. Esta idea es incorrecta y daña a los pacientes.";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "La actividad epileptiforme en el EEG también ocurre en personas que nunca han tenido una crisis epiléptica y nunca la tendrán. ¿Esto te sorprende? Lee más, sobre este tema, por ejemplo, <a href='https://pubmed.ncbi.nlm.nih.gov/15652731/' target='_blank'>aquí</a> y <a href='https://pubmed.ncbi.nlm.nih.gov/8082631/' target='_blank'>aquí</a>.<br><br>¡Inténtalo de nuevo!";

}

}








function checkQ5() {

	if (document.question5.question.value == "b") {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "¡Correcto!<br><br>El término 'desorden de convulsiones' no tiene ningún significado. No tiene definición. Aparte de ser un pseudodiagnóstico sin ningún significado, su uso daña a los pacientes. Desafortunadamente, este término está popularizandose en ciertos ambientes lo que lleva a un manejo pobre de las crisis epilépticas. La diferencia entre crisis epilépticas provocadas y no provocadas es una diferencia crucial. Las crisis epilépticas provocadas son aquellas que ocurren cuando el paciente se expone a un insulto (anomalía electrolítica, algunos tóxicos o su abstinencia, trauma craneoencefálico, etc.) que pueden causar crisis epilépticas en una gran proporción de la población general. La implicación del concepto de crisis epiléptica provocada es que el cerebro es normal. Es el insulto lo que causa la crisis epiléptica y, una vez que el paciente no esté expuesto a ese insulto, el cerebro no tendrá una predisposición a tener más crisis epilépticas. Por lo tanto, las crisis epilépticas provocadas no necesitan medicaciones antiepilépticas porque no hay crisis epilépticas que prevenir cuando el insulto desaparece. En contraste, las crisis epilépticas no provocadas implican que el cerebro es anormal y hay una predisposición a tener más crisis epilépticas no provocadas. Si el paciente con crisis epilépticas no provocadas cumple <a href='https://pubmed.ncbi.nlm.nih.gov/24730690/' target='_blank'>la definición de epilepsia</a>, el paciente necesitará (en la mayoría de los casos) medicaciones antiepilépticas para reducir el riesgo de futuras crisis epilépticas.<br><br>Esta distinción entre crisis epilépticas provocadas y no provocadas es crucial y guía el manejo. El uso de pseudodiagnósticos como 'transtorno de convulsiones' no distingue entre estos dos conceptos y lleva a un manejo pobre de los pacientes.";
		document.getElementById("after_submitQ5").style.background = "lightgreen";
		document.getElementById("afterQ5_picture").innerHTML = "Desafortunadamente, en algunos ambientes donde el uso del término 'transtorno de convulsiones' es común encontrarás muchos pacientes que toman medicaciones antiepilépticas (a veces durante años) cuando nunca las necesitaron porque lo que tuvieron fue una crisis epiléptica provocada (o varias); también encontrarás pacientes con epilepsia cuyas medicacione antiepilépticas se paran prematuramente si no tuvieron crisis epilépticas recientemente. En resumen, el uso del término 'transtorno de convulsiones' no es neutral. Daña a los pacientes. Aprende a usar terminología correcta y su implicación para el tratamiento de tal manera que trates a tus pacientes correctamente. Tómate tu tiempo para hacer una historia clínica apropriada, determina si el evento es una crisis epiléptica; determina si la crisis epiléptica es provocada o no provocada; determina si el paciente tiene epilepsia; lleva tiempo, pero es la única manera de tratar apropiadamente a tus pacientes. 'Transtorno de convulsiones' es un marcador de hacer las cosas de cualquier manera y de pobre nivel médico.<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Respuesta totalmente incorrecta. Este pseudodiagnóstico es incorrecto y daña a los pacientes.";
		document.getElementById("after_submitQ5").style.background = "red";
		document.getElementById("afterQ5_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}

