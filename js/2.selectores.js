/*
El método html () establece o devuelve el contenido (innerHTML) de los elementos seleccionados.
Cuando se utiliza este método para devolver contenido, devuelve el contenido del PRIMER elemento coincidente.
Cuando se utiliza este método para establecer contenido, sobrescribe el contenido de TODOS los elementos coincidentes.
Sugerencia: Para establecer o devolver solo el contenido de texto de los elementos seleccionados, use el método text ().
*/
$(document).ready( function(){
    // let varBotonEnviar = $('button').html(); //llama al elemento dentro del html con la etiqueta button, si hay mas de 1 llama solo el primero
    // console.log(varBotonEnviar); 

    // $('button').html("Cambiado desde jquery"); //llama el boton desde la etiqueta html

    // $('.btn').html("Cambiado desde la clase"); //llama el boton desde la clase

    // $('#boton').html("Cambiado desde el id"); //llama el boton desde el id

    //$('#subcontenedor button').html("boton desde subcontenedor");

    $('button:first').html("boton primero"); 
    $('button:last').html("boton ultimo"); 
});


//VANILLA SCRIPT o JS PURO
document.querySelector('#boton').innerHTML="Cambiado desde js";
