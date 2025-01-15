// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    amigos.push(nombre);
    nombre = '';

    document.getElementById('listaAmigos').innerHTML = '';
    amigos.forEach((amigo) => {
        document.getElementById('listaAmigos').innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía. Por favor, agrega al menos un amigo.');
        return;
    }
    resultado = document.getElementById('resultado');
    sortear = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML += `<li>Tu amigo secreto es ${amigos[sortear]}</li>`;
    

}
