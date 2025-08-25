let amigos = [];
let listaHtml = document.getElementById("listaAmigos");  
let resultadoHtml = document.getElementById("resultado");  

// Función para agregar un amigo
function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo").value.trim();

    if (nombreIngresado === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Evitar duplicados
    if (amigos.includes(nombreIngresado)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    amigos.push(nombreIngresado);
    document.getElementById("amigo").value = "";
    console.log(amigos)
    // Mostrar lista actualizada
    mostrarLista();
}

// Función para mostrar la lista en pantalla
function mostrarLista() {
    // 1. Limpiar la lista existente
    listaHtml.innerHTML = "";

    // 2. Iterar sobre el arreglo y crear <li> por cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaHtml.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        resultadoHtml.innerHTML = "<li>No hay amigos para sortear.</li>";
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indice];

    resultadoHtml.innerHTML = `<li>El amigo secreto es: <strong>${elegido}</strong></li>`;
}








// let amigos = [];
// let listaHtml= document.getElementById("listaAmigos");  

// function agregarAmigo(){
//     let nombreIngresado=(document.getElementById("amigo").value);
    
    
//     if(nombreIngresado==""){
//         alert("Por favor, inserte un nombre.");
    
//     }else{
//         amigos.push(nombreIngresado);
//         (document.getElementById("amigo").value)="";
//         listaHtml.innerHTML +=(`<li>${nombreIngresado} </li>`);
       
        
//     return;
//     }
   
// }

// function sortearAmigo(){
 
// }
// function revisionLista(){
//     for (let i = 0; i < amigos.length; i++) {
//         const element = amigos[i];
        
//     }
// }

    







    
