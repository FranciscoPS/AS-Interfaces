

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

