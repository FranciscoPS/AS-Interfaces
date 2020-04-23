
var tope = 1;

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

function agregarCambioEq() {
    let cambioEquipo = $('input:checkbox[name=cambioEq]:checked').val();
    let camposCambio = "<div id='datosCambio' class='mb-5'><h5 class='mt-4 text-secondary mb-2'>Datos del equipo anterior</h5><div class='form-row'><div class='col-md-4 mb-3'><label for='folio_equipo' class='font-weight-bolder text-black'>Folio:</label><input type='text' class='form-control' id='folio_equipo' placeholder='Folio de equipo' required></div><div class='col-md-4 mb-3'><label for='num_serie' class='font-weight-bolder text-black'>Numero de serie:</label><input type='text' class='form-control' id='num_serie' placeholder='Numero de serie' required></div><div class='col-md-4 mb-3'><label for='modelo_equipo' class='font-weight-bolder text-black'>Modelo de equipo:</label><input type='text' class='form-control' id='modelo_equipo' placeholder='Modelo del equipo' required></div></div></div>"

    if(cambioEquipo == 'on'){
        $('#tipo_solicitud').append(camposCambio);
        console.log('Estoy aqui');
    }else{
        $('#datosCambio').remove();
        console.log('Sali de aqui');
    }    
}

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

function abrirVentana(vent) {

    switch(vent){

        case 'ventFecha':
            document.getElementById("ventFecha").style.display="block";
            $('#overlay').addClass('overlay-class');
        break;

        case 'ventResponsable':
            document.getElementById("ventResponsable").style.display="block";
            $('#overlay').addClass('overlay-class');
        break;

        case 'ventArea':
            document.getElementById("ventArea").style.display="block";
            $('#overlay').addClass('overlay-class');
        break;

        case 'ventTipoSol':
            document.getElementById("ventTipoSol").style.display="block";
            $('#overlay').addClass('overlay-class');
        break;

        case 'ventTerminos':
            document.getElementById("ventTerminos").style.display="block";
            $('#overlay').addClass('overlay-class');
        break;

    }
    
}

function cerrarVentana(vent) {

    console.log("CERRAR: "+vent);

    switch(vent){

        case 'ventFecha':
            document.getElementById("ventFecha").style.display="none";
            $('#overlay').removeClass('overlay-class');
        break;

        case 'ventResponsable':
            document.getElementById("ventResponsable").style.display="none";
            $('#overlay').removeClass('overlay-class');
        break;

        case 'ventArea':
            document.getElementById("ventArea").style.display="none";
            $('#overlay').removeClass('overlay-class');
        break;

        case 'ventTipoSol':
            document.getElementById("ventTipoSol").style.display="none";
            $('#overlay').removeClass('overlay-class');
        break;

        case 'ventTerminos':
            document.getElementById("ventTerminos").style.display="none";
            $('#overlay').removeClass('overlay-class');
        break;

    }

}
