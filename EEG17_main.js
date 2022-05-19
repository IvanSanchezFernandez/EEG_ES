

function checkQA1() {

	if (document.questiona1.question.value == "a") {
		document.getElementById("after_submitQA1").style.visibility = "visible";
		document.getElementById("answerQA1").innerHTML = "¡¡Correcto!! <br><br>Esta es una de las variantes normales que más frecuentemente se misclasifica como una descarga epileptiforme.<br><br>Los ritmos de empalizada o puntas de empalizada (wicket spikes) aparecen en el lóbulo temporal y son muy similares a las puntas temporales o a las ondas agudas temporales. Los rasgos que te permitirán reconocerlas como benignas son: 1) aparecen fundamentalmente durante la vigilia y el sueño ligero; 2) no rompen el ritmo, son parte del ritmo y, a veces, aparecen en ráfagas de 6-11 Hz; 3) no tienen una onda lenta a continuación como sí que tienen los complejos punta-onda; y 4) frecuentemente tienen una morfología arciforme (como un arco).<br><br>Cuando los ritmos en empalizada (wicket spikes) aparecen como ondas aisladas puede ser difícil diferenciarlas de las descargas epileptiformes: la clave es comparar la morfología de esa onda aislada (fácil de confundir con una descarga epileptiforme) con la morfología cuando aparece en ráfagas o grupos (fácil de reconocer como un hallazgo benigno: un ritmo en empalizada).<br><br>Dato curioso: el ritmo en empalizada se ve frecuentemente en adultos, pero puede verse en los jóvenes y en los niños.<br><br>Justo abajo más imágenes con ejemplos de ritmo en empalizada (wicket spikes):";
		document.getElementById("after_submitQA1").style.background = "lightgreen";
		document.getElementById("answerQA1_picture").src = "EEG17_img/AQ1.2.png";
		document.getElementById("answerQA1_picture2").src = "EEG17_img/AQ1.3.png";
		document.getElementById("answerQA1_picture3").src = "EEG17_img/AQ1.4.png";
		document.getElementById("afterQA1_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQA1").style.visibility = "visible";
		document.getElementById("answerQA1").innerHTML = "No.<br><br>Justo abajo más imágenes con ejemplos del mismo hallazgo abajo:";
		document.getElementById("after_submitQA1").style.background = "red";
		document.getElementById("answerQA1_picture").src = "EEG17_img/AQ1.2.png";
		document.getElementById("answerQA1_picture2").src = "EEG17_img/AQ1.3.png";
		document.getElementById("answerQA1_picture3").src = "EEG17_img/AQ1.4.png";
		document.getElementById("afterQA1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQY1() {

	if (document.questiony1.question.value == "b") {
		document.getElementById("after_submitQY1").style.visibility = "visible";
		document.getElementById("answerQY1").innerHTML = "¡¡Exacto!! <br><br>Esta es una de las variantes normales que te encontrarás más comunmente si lees EEGs en el rango de edad de niños mayores a adultos jóvenes.<br><br>Reconocerás el ritmo mu por la apariencia arciforme (como un arco) de sus ondas y por su localización en las regiones centrales (uni o bilateralmente).<br><br>La apariencia arciforme del ritmo mu a veces le da una apariencia puntiaguda y cuando el ritmo mu aparece como una onda única, puede confundirte y puedes misclasificarla como una punta. Siempre que encuentres un elemento puntiagudo en las regiones centrales que no tiene la apariencia de una punta, busca el mismo elemento apareciendo en ráfagas. Cuando el ritmo mu aparece en ráfagas es más fácil de reconocer que es un ritmo benigno.<br><br>Dato curioso: el ritmo mu es el ritmo de reposo de la corteza motora (de la misma manera que el ritmo posterior dominante es el ritmo de reposo de la corteza visual). Por lo tanto, cuando el paciente se mueve (o piensa en mover) el brazo contralateral, el ritmo mu desaparece.<br><br>Abajo hay otro ejemplo de ritmo mu:";
		document.getElementById("after_submitQY1").style.background = "lightgreen";
		document.getElementById("answerQY1_picture").src = "EEG17_img/YQ1.2.png";
		document.getElementById("afterQY1_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQY1").style.visibility = "visible";
		document.getElementById("answerQY1").innerHTML = "No.<br><br>Mira otro ejemplo del mismo patrón:";
		document.getElementById("after_submitQY1").style.background = "red";
		document.getElementById("answerQY1_picture").src = "EEG17_img/YQ1.2.png";
		document.getElementById("afterQY1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQY2() {

	if (document.questiony2.question.value == "e") {
		document.getElementById("after_submitQY2").style.visibility = "visible";
		document.getElementById("answerQY2").innerHTML = "¡¡Correcto!! <br><br>Puedes ver esto con relativa frecuencia en adolescentes y adultos jóvenes.<br><br>Los complejos de punta-onda fantasma son una de las variantes normales que se puede misclasificar como anormal más fácilmente. ¡Eso no es una sorpresa porque tiene exactamente la misma apariencia que un complejo punta-onda!<br><br>De todas formas, hay varios rasgos que te deben hacer sospechar: 1. El componente de la punta (en el complejo punta-onda) es diminuto, algunas veces incluso no hay punta y sólo hay una onda lenta, cuando hay una punta, la onda lenta es mucho más grande. 2. Cuando aparecen en ráfagas, tienen una frecuencia aproximada de 6 Hz, una de las características más típicas de las variantes normales. Y lo más importante, 3. Aparecen más frecuentemente durante la vigilia y durante el adormecimiento y desaparecen en fases más profundas del sueño. Cuando la actividad epileptiforme se hace menos frecuente o desaparece durante el sueño, ten una sospecha de que, en realidad, probablemente no es actividad epileptiforme.<br><br>Abajo hay más ejemplos de complejos punta-onda fantasma:";
		document.getElementById("after_submitQY2").style.background = "lightgreen";
		document.getElementById("answerQY2_picture").src = "EEG17_img/YQ2.2.png";
		document.getElementById("answerQY2_picture2").src = "EEG17_img/YQ2.3.png";
		document.getElementById("answerQY2_picture3").src = "EEG17_img/YQ2.4.png";
		document.getElementById("afterQY2_picture").innerHTML = "Dato curioso: Todos los ejemplos en esta pregunta pertenecen al patrón de complejos punta-onda fantasma tipo FOLD (por sus siglas en inglés sobre sus características: predominantemente en mujeres, localización occipital, de bajo voltaje, predominantemente en somnolencia). La otra variante se llama WHAM (por sus siglas en inglés sobre sus características: predominantemente sobre la vigilia, de alta amplitud, de localización anterior, predominantemente en varones).<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQY2").style.visibility = "visible";
		document.getElementById("answerQY2").innerHTML = "No.<br><br>Abajo hay más ejemplos del mismo patrón:";
		document.getElementById("after_submitQY2").style.background = "red";
		document.getElementById("answerQY2_picture").src = "EEG17_img/YQ2.2.png";
		document.getElementById("answerQY2_picture2").src = "EEG17_img/YQ2.3.png";
		document.getElementById("answerQY2_picture3").src = "EEG17_img/YQ2.4.png";
		document.getElementById("afterQY2_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}









function checkQY3() {

	if (document.questiony3.question.value == "c") {
		document.getElementById("after_submitQY3").style.visibility = "visible";
		document.getElementById("answerQY3").innerHTML = "¡¡Correcto!!<br><br>14 y 6, también conocidos como cenoides, son más frecuentemente vistos alrededor de la adolescencia.<br><br>Aparecen en brotes or ráfagas con una frecuencia de 14 o 6 Hz. Tienen polaridad positiva y aparecen en la mayoría de los casos en las regiones temporales posteriores y occipitales.<br><br>14 y 6 son otra variante normal que aparece más frecuentemente en la somnolencia y el sueño ligero, pero desaparece en estadios más profundos del sueño. 14 y 6 también confirma la regla general que los elementos del EEG que aparecen con una frecuencia de 6 Hz o mayor son típicamente variantes normales.<br><br>Abajo hay más ejemplos de 14 y 6:";
		document.getElementById("after_submitQY3").style.background = "lightgreen";
		document.getElementById("answerQY3_picture").src = "EEG17_img/YQ3.2.png";
		document.getElementById("answerQY3_picture2").src = "EEG17_img/YQ3.3.png";
		document.getElementById("answerQY3_picture3").src = "EEG17_img/YQ3.4.png";
		document.getElementById("afterQY3_picture").innerHTML = "Dato curioso: El componente positivo de 14 y 6 se aprecia mejor en un montaje referencial (compruébalo tú mismo: el primer segmento de EEG en la respuesta es el mismo segmento de EEG que en la pregunta, sólo que en un montaje referenciado al promedio de todos los electrodos; el tercer segmento del EEG en la respuesta el el mismo segmento que el segundo segmento del EEG en la respuesta, pero en montaje referenciado al promedio de todos los electrodos).<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQY3").style.visibility = "visible";
		document.getElementById("answerQY3").innerHTML = "No.<br><br>Encuentra más ejemplos del mismo patrón abajo:";
		document.getElementById("after_submitQY3").style.background = "red";
		document.getElementById("answerQY3_picture").src = "EEG17_img/YQ3.2.png";
		document.getElementById("answerQY3_picture2").src = "EEG17_img/YQ3.3.png";
		document.getElementById("answerQY3_picture3").src = "EEG17_img/YQ3.4.png";
		document.getElementById("afterQY3_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQY4() {

	if (document.questiony4.question.value == "e") {
		document.getElementById("after_submitQY4").style.visibility = "visible";
		document.getElementById("answerQY4").innerHTML = "¡¡Correcto!! <br><br>Cuando ves que el ritmo posterior dominante fluctúa hacia arriba y hacia abajo en una línea de base que no es plana y que está formada por ondas theta y delta, entonces eso es más probablemente ondas lentas posteriores de la juventud. También pueden ser reconocidas por el típico ensanchamiento y adelgazamiento de la amplitud del ritmo posterior dominante como se ve en este ejemplo y en la imagen de abajo:";
		document.getElementById("after_submitQY4").style.background = "lightgreen";
		document.getElementById("answerQY4_picture").src = "EEG17_img/YQ4.2.png";
		document.getElementById("afterQY4_picture").innerHTML = "Dato curioso: Las ondas posteriores lentas de la juventud son particularmente frecuentes en adolescentes, pero pueden ser vistas en niños tras los 7-8 años de edad y hasta los 20 años de edad.<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQY4").style.visibility = "visible";
		document.getElementById("answerQY4").innerHTML = "No.<br><br>Mira más ejemplos del mismo patrón abajo:";
		document.getElementById("after_submitQY4").style.background = "red";
		document.getElementById("answerQY4_picture").src = "EEG17_img/YQ4.2.png";
		document.getElementById("afterQY4_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQY5() {

	if (document.questiony5.question.value == "c") {
		document.getElementById("after_submitQY5").style.visibility = "visible";
		document.getElementById("answerQY5").innerHTML = "¡¡Correcto!! <br><br>Algunas veces el ritmo posterior dominante tiene una apariencia particularmente puntiaguda. Típicamente esto no es un problema porque está claro que es un ritmo posterior dominante o, al menos, algún tipo de ritmo benigno: en las regiones posteriores de la cabeza durante periodos de vigilia con el paciente relajado y con ojos cerrados, desaparece al abrir los ojos, las ondas son monomórficas (tienen la misma apariencia sin evolución en frecuencia, amplitud, o distribución espacial), y la frecuencia es típicamente de 6 Hz o más alta.<br><br>El peligro del ritmo posterior dominante puntiagudo es cuando sólo una o unas pocas ondas aparecen aisladamente. En esos casos, puede confundirse con una punta. La manera de diferenciarlo de una punta es darse cuenta de que la morfología es la misma que cuando aparece en ráfagas o brotes que son claramente un ritmo posterior dominante. Las imágenes abajo muestran cómo una única o unas pocas ondas pueden ser confundidas con una punta, pero la morfología es la misma que cuando aparecen en ráfagas o brotes:";
		document.getElementById("after_submitQY5").style.background = "lightgreen";
		document.getElementById("answerQY5_picture").src = "EEG17_img/YQ5.2.png";
		document.getElementById("answerQY5_picture2").src = "EEG17_img/YQ5.3.png";
		document.getElementById("afterQY5_picture").innerHTML = "Dato curioso: El ritmo posterior dominante puntiagudo se ve más frecuentemente en adolescentes y adultos jóvenes, pero puede ser visto a cualquier edad.<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQY5").style.visibility = "visible";
		document.getElementById("answerQY5").innerHTML = "No.";
		document.getElementById("after_submitQY5").style.background = "red";
		document.getElementById("answerQY5_picture").src = "";
		document.getElementById("answerQY5_picture2").src = "";
		document.getElementById("afterQY5_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQY6() {

	if (document.questiony6.question.value == "b") {
		document.getElementById("after_submitQY6").style.visibility = "visible";
		document.getElementById("answerQY6").innerHTML = "¡¡Precisamente!! <br><br>Las ondas agudas transitorias occipitales en el sueño (POSTS) son una variante normal que aparece durante la somnolencia y el sueño ligero.<br><br>Como norma general, cualquier elemento que aparezca sólo la somnolencia y el sueño ligero y que después desaparezca en estados más profundos del sueño es probablemente no epileptiforme, es probablemente una variante normal.<br><br>La morfología de los POSTS es clásicamente triangular y la polaridad es positiva.<br><br>Abajo otro ejemplo de POSTS:";
		document.getElementById("after_submitQY6").style.background = "lightgreen";
		document.getElementById("answerQY6_picture").src = "EEG17_img/YQ6.2.png";
		document.getElementById("afterQY6_picture").innerHTML = "Dato curioso: Los POSTS son más frecuentes en los jóvenes, pero también se pueden ver en niños mayores y adultos.<br><br>Dato extremadamente interesante: Se cree que los POSTS representan algún tipo de repetición o reprocesamiento de las imágenes y de la información visual recogida durante el dia.<br><br> ¡Muy bien!";

}	else {
		document.getElementById("after_submitQY6").style.visibility = "visible";
		document.getElementById("answerQY6").innerHTML = "No.<br><br>Abajo hay otro ejemplo del mismo patrón:";
		document.getElementById("after_submitQY6").style.background = "red";
		document.getElementById("answerQY6_picture").src = "EEG17_img/YQ6.2.png";
		document.getElementById("afterQY6_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQC1() {

	if (document.questionc1.question.value == "b") {
		document.getElementById("after_submitQC1").style.visibility = "visible";
		document.getElementById("answerQC1").innerHTML = "¡¡Correcto!! <br><br>El aumento de amplitud durante la hiperventilación puede ser bastante impresionante en niños.<br><br>No hay límite en cómo de alta es la amplitud para ser amplitud demasiado alta durante la hiperventilación.<br><br>Si encuentras enlentecimiento asimétrico o si encuentras actividad epileptiforme entre el enlentecimiento, entonces es anormal. Si no, ignóralo. Es normal.<br><br>Abajo hay otros ejemplos de un aumento dramático de voltaje durante la hiperventilación:";
		document.getElementById("after_submitQC1").style.background = "lightgreen";
		document.getElementById("answerQC1_picture").src = "EEG17_img/CQ1.2.png";
		document.getElementById("answerQC1_picture2").src = "EEG17_img/CQ1.3.png";
		document.getElementById("afterQC1_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQC1").style.visibility = "visible";
		document.getElementById("answerQC1").innerHTML = "No.<br><br>Otros ejemplos de lo mismo abajo:";
		document.getElementById("after_submitQC1").style.background = "red";
		document.getElementById("answerQC1_picture").src = "EEG17_img/CQ1.2.png";
		document.getElementById("answerQC1_picture2").src = "EEG17_img/CQ1.3.png";
		document.getElementById("afterQC1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQC2() {

	if (document.questionc2.question.value == "e") {
		document.getElementById("after_submitQC2").style.visibility = "visible";
		document.getElementById("answerQC2").innerHTML = "¡¡Exacto!! <br><br>Algunas veces las ondas del vertex aparecen en ráfagas, como una cascada de ondas del vertex.<br><br>Algunas veces las ráfagas de ondas del vertex parecen intimidantes y de un contorno agudo, pero son normales.<br><br>¿Cómo reconocerlas? No rompen el ritmo, no cambian de morfología (siempre tienen la misma apariencia sin evolucionar en frecuencia o amplitud o morfología), y pueden ser de alta frecuencia (6 Hz o incluso mayor frecuencia).<br><br>El ritmo mu puede ser similar a esto, pero ocurre principalmente en C3 y/o C4, minimamente en Cz (las ondas del vertex son prominentes en Cz). Y, por supuesto, el ritmo mu aparece sólo durante la vigilia. Las ondas del vertex en cascada aparecen sólo durante el sueño (típicamente, durante la fase II del sueño).<br><br>Otros ejemplos de ondas del vertex en cascada abajo:";
		document.getElementById("after_submitQC2").style.background = "lightgreen";
		document.getElementById("answerQC2_picture").src = "EEG17_img/CQ2.2.png";
		document.getElementById("answerQC2_picture2").src = "EEG17_img/CQ2.3.png";
		document.getElementById("afterQC2_picture").innerHTML = "Dato curioso: Las ondas del vertex en cascada pueden ser vistas a cualquier edad, pero son más prominentes en niños.<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitQC2").style.visibility = "visible";
		document.getElementById("answerQC2").innerHTML = "No.<br><br>Otros ejemplos de los mismo abajo:";
		document.getElementById("after_submitQC2").style.background = "red";
		document.getElementById("answerQC2_picture").src = "EEG17_img/CQ2.2.png";
		document.getElementById("answerQC2_picture2").src = "EEG17_img/CQ2.3.png";
		document.getElementById("afterQC2_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQC3() {

	if (document.questionc3.question.value == "d") {
		document.getElementById("after_submitQC3").style.visibility = "visible";
		document.getElementById("answerQC3").innerHTML = "¡¡Verdadero!! <br><br>Los elementos de forma aguda triangular en la región occipital pueden ser consistentes con POSTS o con ondas lambda.<br><br>Reconocer el estado del ciclo sueño-vigilia en el que el paciente se encuentra durante el segmento del EEG ayuda a identificar lo que se puede y lo que no se puede encontrar en este segmento del EEG. En este caso, hay artefactos de parpadeo, así que esto debe ser vigilia.<br><br>Estas son ondas lambda. La morfología y localización de los POSTS y las ondas lambda es básicamente la misma, pero las ondas lamba ocurren durante la vigilia y los POSTS ocurren durante la somnolencia y el sueño ligero. Se piensa que las ondas lambda representan algún tipo de procesamiento de la información visual durante la vigilia y que los POSTS son algún tipo de repetición o reprocesamiento de la información visual durante la somnolencia y el sueño ligero.<br><br>Lo más probable es que veas ondas lambda mientras el niño está mirando su teléfono o tableta.";
		document.getElementById("after_submitQC3").style.background = "lightgreen";
		document.getElementById("afterQC3_picture").innerHTML = "Dato curioso: En épocas antiguas las ondas lambda podían ser provocadas dándole un libro al niño para que lo leyera. ¡Inténta darle un libro a un niño hoy en día mientra está jugando con su teléfono!<br><br>¡Muy bien!";

}	else {
		document.getElementById("after_submitQC3").style.visibility = "visible";
		document.getElementById("answerQC3").innerHTML = "No.";
		document.getElementById("after_submitQC3").style.background = "red";
		document.getElementById("afterQC3_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}








function checkQN1() {

	if (document.questionn1.question.value == "b") {
		document.getElementById("after_submitQN1").style.visibility = "visible";
		document.getElementById("answerQN1").innerHTML = "¡¡Exacto!! <br><br>Los encoches frontales (ondas agudas transitorias frontales) son una variante normal en el recién nacido.<br><br>Aparecen aproximadamente a las 34 semanas de edad concepcional y desaparecen progresivamente tras las 42 semanas de edad concepcional.<br><br>Son muy similares a complejos punta-onda o a ondas agudas, porque son morfológicamente lo mismo, aunque son normales en el sueño tranquilo del recién nacido. Más ejemplos del mismo patrón abajo:";
		document.getElementById("after_submitQN1").style.background = "lightgreen";
		document.getElementById("answerQN1_picture").src = "EEG17_img/NQ1.2.png";
		document.getElementById("answerQN1_picture2").src = "EEG17_img/NQ1.3.png";
		document.getElementById("afterQN1_picture").innerHTML = "¡Muy bien!";

}	else {
		document.getElementById("after_submitQN1").style.visibility = "visible";
		document.getElementById("answerQN1").innerHTML = "No.<br><br>Otros ejemplos del mismo patrón abajo:";
		document.getElementById("after_submitQN1").style.background = "red";
		document.getElementById("answerQN1_picture").src = "EEG17_img/NQ1.2.png";
		document.getElementById("answerQN1_picture2").src = "EEG17_img/NQ1.3.png";
		document.getElementById("afterQN1_picture").innerHTML = "¡Inténtalo de nuevo!";

}

}










