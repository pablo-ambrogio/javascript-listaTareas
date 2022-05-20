let idCount = 0;
let input = document.getElementById( 'inputTarea' ) ;

document.getElementById( 'form' ).addEventListener( 'submit', ( event ) => {
    event.preventDefault();
    agregarTarea();
} );

let agregarTarea = () => {

    idCount ++;

    let newValue = input.value;

    let list = document.getElementById( 'list' );

    if( newValue !== '' ) {
        list.innerHTML += `
        <div class="container__task" id="${idCount}">
            <label for="" id="label__task">
                <input type="checkbox">
                ${newValue}
            </label>
            <img src="img/clean.svg" id="imgClean">
        </div>
        `;
    }
    else {
        alert( 'Ingrese tarea' );
    }
    input.value = '';

    tareaFinalizada();
}

list.addEventListener( 'click', ( event ) => {
    if( event.srcElement.nodeName == 'INPUT' ) {
        tareaFinalizada();
    }
    else if( event.srcElement.nodeName == 'IMG' ) {
        eliminarTarea( event.srcElement.parentNode.id );
    }
});

let tareaFinalizada = () => {
    let elemento = list.querySelectorAll( 'div' )
    let checkbox = list.querySelectorAll( 'input[ type="checkbox" ]:checked' );

    document.getElementById( 'stats' ).innerHTML = `<p>Tareas pendientes:${elemento.length} Completadas:${checkbox.length}</p>`;
};

let eliminarTarea = ( id ) => {
    let eliminarLaTarea = document.getElementById( id );
    list.removeChild( eliminarLaTarea );
    tareaFinalizada();
};