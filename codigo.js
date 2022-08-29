"use strict"

window.addEventListener("load",()=>{

    var $formulario = document.querySelector("#formulario");
    var $resultado = document.querySelector(".resultado");
    $resultado.style.display = "none";

    $formulario.addEventListener("submit",()=>{
        console.log("submit funcionando")
        $resultado.style.display = "block";


        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        var r_nombre = document.querySelector("#r_nombre span");
        var r_apellido = document.querySelector("#r_apellido span");
        var r_edad = document.querySelector("#r_edad span");

        r_nombre.innerHTML = nombre;
        r_apellido.innerHTML = apellido;
        r_edad.innerHTML = edad;
    })

});