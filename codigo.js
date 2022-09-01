"use strict"

window.addEventListener("load",()=>{

    var $formulario = document.querySelector("#formulario");
    var $resultado = document.querySelector(".resultado");
    $resultado.style.display = "none";

    $formulario.addEventListener("submit",()=>{
        console.log("submit funcionando")


        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;

        var r_nombre = document.querySelector("#r_nombre span");
        var r_apellido = document.querySelector("#r_apellido span");
        var r_edad = document.querySelector("#r_edad span");

        var $spanNombre = document.querySelector("#error_nombre");
        var $spanApellido = document.querySelector("#error_apellido");
        var $spanEdad = document.querySelector("#error_edad");
        

        if(nombre.trim().length <= 2 || !isNaN(nombre)){
            $spanNombre.style.display = "block";
            return false;
        }else{
            $spanNombre.style.background = "#0e0";
            $spanNombre.style.border = "3px solid #0a0";
            $spanNombre.innerHTML = "nombre valido";
        }

        if(apellido.trim().length <= 2 || !isNaN(apellido)){
            $spanApellido.style.display = "block";
            return false;
        }else{
            $spanApellido.style.background = "#0e0";
            $spanApellido.style.border = "3px solid #0a0";
            $spanApellido.innerHTML = "apellido valido";
        }

        if(edad <= 6 || isNaN(edad) || edad > 122){
            $spanEdad.style.display = "block";
            return false;
        }else{
            $spanEdad.style.background = "#0e0";
            $spanEdad.style.border = "3px solid #0a0";
            $spanEdad.innerHTML = "edad valida";
        }

        r_nombre.innerHTML = nombre;
        r_apellido.innerHTML = apellido;
        r_edad.innerHTML = edad;

        $resultado.style.display = "block";
        if($resultado.style.display == "block"){
            $spanNombre.style.display = "block";
            $spanApellido.style.display = "block";
            $spanEdad.style.display = "block";
        }
    })

});
