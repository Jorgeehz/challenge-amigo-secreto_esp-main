# Amigo Secreto

Este proyecto es una aplicación web simple para sortear un amigo secreto entre una lista de amigos.

## Estructura del Proyecto

- `app.js`: Contiene la lógica principal de la aplicación.
- `assets/`: Carpeta que contiene las imágenes utilizadas en la aplicación.
- `index.html`: Archivo HTML principal que estructura la página web.
- `style.css`: Archivo CSS que define los estilos de la página web.

## Funcionalidades

### Agregar Amigo

Permite agregar nombres a la lista de amigos.

```javascript
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    amigos.push(nombre);
    nombre = '';

    document.getElementById('listaAmigos').innerHTML = '';
    amigos.forEach((amigo) => {
        document.getElementById('listaAmigos').innerHTML += `<li>${amigo}</li>`;
    });
}

Sortear Amigo

Sortea un amigo secreto de la lista de amigos agregados.

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('La lista de amigos está vacía. Por favor, agrega al menos un amigo.');
        return;
    }
    resultado = document.getElementById('resultado');
    sortear = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML += `<li>Tu amigo secreto es ${amigos[sortear]}</li>`;
}


Cómo Ejecutar
1. Clona el repositorio.
2. Abre el archivo index.html en tu navegador web.

Estilos
Los estilos están definidos en el archivo style.css y utilizan variables CSS para colores y fuentes.