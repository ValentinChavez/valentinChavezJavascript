document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarJSON(){
    fetch('productos.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data){
            let html = '';
            data.forEach(function(producto) {
                html += `
                    <li>${producto.nombre} </li>
                    <ul>Precio: ${producto.precio} </ul>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })

}
