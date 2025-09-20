//variables
let Nombres = document.getElementById("amigo");
let ListaDeAmigos = [];
let VisualizarLista = document.getElementById("listaAmigos");

function agregarAmigo() {
    ListaDeAmigos.push(Nombres.value);
    console.log(ListaDeAmigos);
};

