//variables
let Nombres = document.getElementById("amigo");
let ListaDeAmigos = [];
let VisualizarLista = document.getElementById("listaAmigos");

function agregarAmigo() {
    //Agregar nombres
    ListaDeAmigos.push(Nombres.value);
    console.log(ListaDeAmigos);
    VisualizarLista.innerHTML += `<li>${Nombres.value}</li>`
    
};

