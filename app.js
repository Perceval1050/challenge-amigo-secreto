//variables
let Nombres = document.getElementById("amigo");
let ListaDeAmigos = [];
let VisualizarLista = document.getElementById("listaAmigos");
let ResultadoDeSorteo = document.getElementById("resultado");

function agregarAmigo() {
    //vallidar entrada
    if (!Nombres.value) {
        alert("ingrese un nombre por favor");
    }
    //Agregar nombres
    ListaDeAmigos.push(Nombres.value);
    console.log(ListaDeAmigos);
    VisualizarLista.innerHTML += `<li>${Nombres.value}</li>`
    
};

function sortearAmigo() {
    //Sortiar y elejir amigo secreto
    let sorteo = Math.floor(Math.random()* ListaDeAmigos.length);
    let amigoSecreto = ListaDeAmigos[sorteo];
    ResultadoDeSorteo.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    }



