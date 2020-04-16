
function cambia(){

    let campoOtro = "<div class='form-row' id='campoOtro'><div class='col-md-4 mb-3'><label for='nombre' class='font-weight-bolder text-black'>Otro:</label><input type='text' class='form-control' id='otro' placeholder='Especifique' required></div></div>";
    var cosa;
    cosa = document.formulario1.cosa[document.formulario1.cosa.selectedIndex].text;
    console.log("VALOR DE CAMPO SELECT==="+cosa);

    switch(cosa){
        case 'Otro':
            $('#campaña').append(campoOtro);
            break;
        default:
            $('#campoOtro').remove();
            break;
    }
    
}

var tope = 1;
function agregarEquipo() {
    
    let camposEquipos = "<div class='form-row' id='equipoAgregado'><div class='col-md-4 mb-3'><select id='equipos' class='form-control' required><option value='' disabled selected>--Seleccionar--</option><option value=''>Computadora</option><option value=''>Cargador</option><option value=''>Celular</option></select></div><div class='col-md-4 mb-3'><select id='cantidad' class='form-control' required>   <option value='' disabled selected>--Seleccionar--</option><option value=''>1</option><option value=''>2</option><option value=''>3</option><option value=''>4</option><option value=''>5</option><option value=''>6</option><option value=''>7</option><option value=''>8</option><option value=''>9</option></select></div></div>"
    
    if(tope<=0){
        tope=1;
    }
    if(tope>=1 && tope<=3){
        $('#cantidadEquipos').append(camposEquipos);
        console.log('Tope===='+tope);
        tope++;
    }else{
        alert('Tope de equipos alcanzado');
        console.log('Tope===='+tope);
    }
    
}

function quitarEquipo() {
    if(tope>=4){
        tope=3;
    }
    if(tope>=1 && tope<=3){
        $('#equipoAgregado').remove();
        tope--;
        console.log('Tope===='+tope);
    }else{
        console.log("No hay elementos para quitar");
        console.log('Tope===='+tope);
    }    
}

