

const form = document.querySelector(".form1");
const lista = document.querySelector("#lista");
const btnAñadir = form.querySelector("input[id='anadir']");
const btnBorrar = form.querySelector("input[id='borrar']");

const nuevaOl = document.createElement("ol");
const nuevalista = lista.appendChild(nuevaOl);


function agregarLista(){

    btnAñadir.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e)
        let nombreTarea = form.querySelector("input[id='tarea']").value 
        console.log(nombreTarea)
        if (nombreTarea.split("")[0] !== " "){
            const nuevaLi = document.createElement("li");
        nuevaLi.textContent = nombreTarea;   
        nuevalista.appendChild(nuevaLi);
        } else {alert("Error, agregar una tarea...")}
    })
}

function borrarLista(){
    btnBorrar.addEventListener('click',(e)=>{
        e.preventDefault();
        nuevalista.textContent = ""
    })
}

agregarLista()
borrarLista()
