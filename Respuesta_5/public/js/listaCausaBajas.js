$(document).ready(function() {

   paginacion();

    $('#listaDepartamentos_length').change( function() {
        seleccionMultiple("Todo");
    } );

    //Cerrar todos los modales cuando se hace click en los botones de agregar, editar o consultar y no sobreponer los modales
    $('.funct').on('mouseover', function() {
        cerrarModal();
    } );


} );

//Variables globales
var total_check = 0;
var dataTable = '';

function paginacion(){

    dataTable = $('#listaCausaBajas').dataTable( {
        "oLanguage":{
            "sLengthMenu":"Mostrar _MENU_ filas",
            "sZeroRecords": "No se encontraron registros",
            "sInfo":"Total de registros encontrados: _TOTAL_ ",
            "sEmptyTable":"No hay registros disponibles",
            "sLoadingRecords":"Cargando... por favor espere",
            "sProcessing":"Procesando información...",
            "sSearch":"Buscar:",
            "sInfoFiltered": "",
            "sInfoEmpty": "No hay registros encontrados",
            "oPaginate":{
                "sFirst":"Inicio",
                "sPrevious":"Anterior",
                "sNext":"Siguiente",
                "sLast":"Final"
            }
        } 
    } );
}

function seleccionMultiple(id){
    
    //Seleccionar todos los check
    if(("#chk"+id) == '#chkTodo'){

        total_check = -1;

        if($("#chk"+id).is(':checked')){
            //console.log('Checked');
            $('input[type=checkbox]').each(function(){
                $(this).prop('checked', true);

                total_check = total_check + 1;
            });
            $('#contador-tabla').text(total_check);

        }else{
            //console.log('Unchecked')
            total_check = 0;
            $('input[type=checkbox]').each(function(){
                $(this).prop('checked', false);   
            });

            $('#contador-tabla').text('');

            //Se desactiva la selección múltiple cuando está ningún activo
            $('#checkAll').hide();
        }
        
    }else{
        //Seleccionar un check mediante su id

        //Verificar si está activado el check
        if($("#chk"+id).is(':checked')){
            //$(id).prop('checked', true);

            //Actualizar contador
            total_check = total_check + 1;
            $('#contador-tabla').text(total_check);

            //Se activa la selección múltiple cuando al menos está un activo
            $('#checkAll').show();

            var cont = 0;
            $('#listaCausaBajas tbody input[type=checkbox]').each(function(){
                cont = cont + 1;
            });

            if(cont == 1){
              $('#chkTodo').prop('checked', true);   
            }

        }else{
            //Actualizar contador
            total_check = total_check - 1;
            $('#contador-tabla').text(total_check);

            if(total_check == 0){
                $('#chkTodo').prop('checked', false); 

                //Se desactiva la selección múltiple cuando está ningún activo  
                $('#checkAll').hide();  
            }            
        }  
    }

    if(total_check == 0){
        $('#contador-tabla').text('');
    }

   // llenarArregloClientes(id);
}

function ultimaCausaBaja(){

  var uri = '/causabaja/obtenerUltimoID';
  var id = 0;

  $.ajaxSetup({
    async:false
  });

  $.getJSON(uri,function(data){

    id = data;

  });

  return id;
}


function modalCausaBajas(operacion,_id){

    var id = 0;
    var descripcion = '';
    var uri = '';
    var modal = '';

    if(operacion != "Agregar"){
      id = _id;
      uri = '/causabajas/'+id+'/edit';

      $.ajaxSetup({
        async:false
      });

      $.getJSON(uri,function(item){
            modal = '<div class="modal fade" id="modalCausaBaja" tabindex="-1" role="dialog" aria-labelledby="modalCausaBaja" aria-hidden="true">'+
                '<div class="modal-dialog" role="document">'+
                  '<div class="modal-content">'+
                     '<div class="modal-header" style="background-color: rgb(77,182,172);color: white">'+
                      '<h5 class="modal-title" style="margin: 0 auto;">'+operacion+' causa de baja <i class="fa fa-clock-o" aria-hidden="true"></i></h5>'+
                      '<button type="button" class="close" onclick="cerrarModal();" aria-label="Close">'+
                        '<span aria-hidden="true">&times;</span>'+
                      '</button>'+
                    '</div>'+
                    '<div class="modal-body">'+
                      '<div class="row">'+
                         '<div id="error" class="col-md-10 offset-1"></div>'+                
                      '</div>'+
                      '<div class="row">'+
                         '<div class="form-group col-md-3 offset-1">'+
                              '<label for="txtClave">Clave:</label>'+
                              '<input type="text" value="'+id+'" class="form-control" id="txtClave" disabled>'+
                         '</div>'+
                      '</div>'+
                      '<div class="row">'+
                         '<div class="form-group col-md-10 offset-1">'+
                              '<label for="txtDescripcion">*Descripción:</label>';

                              if(operacion=="Consultar"){
                                  modal+='<input type="text" disabled class="form-control" value="'+item.cbaja_desc+'" id="txtDescripcion" >';
                              }else{
                                  modal+='<input type="text" maxlength="250" class="form-control" value="'+item.cbaja_desc+'" id="txtDescripcion" >';
                              }
                              
                         modal+='</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="modal-footer">';

                        if(operacion=="Consultar"){
                            modal+='<button type="button" disabled onclick=\'guardar("Editar")\'\ disabled class="btn btn-outline-primary" style="float: left;"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>';
                        }else{
                            modal+='<button type="button" onclick=\'guardar("Editar")\'\  class="btn btn-outline-primary" style="float: left;"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>';
                        }

                        modal+=                      
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>';
        });

      }else{
        id = ultimaCausaBaja();

        modal = '<div class="modal fade" id="modalCausaBaja" tabindex="-1" role="dialog" aria-labelledby="modalCausaBaja" aria-hidden="true">'+
            '<div class="modal-dialog" role="document">'+
              '<div class="modal-content">'+
                 '<div class="modal-header" style="background-color: rgb(77,182,172);color: white">'+
                  '<h5 class="modal-title" style="margin: 0 auto;">'+operacion+' causa de baja <i class="fa fa-clock-o" aria-hidden="true"></i></h5>'+
                  '<button type="button" class="close" onclick="cerrarModal();" aria-label="Close">'+
                    '<span aria-hidden="true">&times;</span>'+
                  '</button>'+
                '</div>'+
                '<div class="modal-body">'+               
                 '<div class="row">'+
                     '<div id="error" class="col-md-10 offset-1"></div>'+                
                  '</div>'+
                  '<div class="row">'+
                     '<div class="form-group col-md-3 offset-1">'+
                          '<label for="txtClave">Clave:</label>'+
                          '<input type="text" value="'+id+'" class="form-control" id="txtClave" disabled>'+
                     '</div>'+
                  '</div>'+
                  '<div class="row">'+
                     '<div class="form-group col-md-10 offset-1">'+
                          '<label for="txtDescripcion">*Descripción:</label>'+
                          '<input type="text" maxlength="250" class="form-control" id="txtDescripcion" >'+
                     '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="modal-footer">'+
                  '<button type="button" onclick=\'guardar("Agregar")\'\ class="btn btn-outline-primary" style="float: left;"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>';
    }
    
    $(modal).appendTo( "#fullpage" );
    
    $('#modalCausaBaja').modal('show');

    //Configurar los elementos html para no permitir cortar, copiar o pegar
    $('input').bind('cut copy paste',function(e){
        e.preventDefault();
    });

    
    //Permitir sólo letras
    $("#txtDescripcion").keypress(function (key) {
      //window.console.log(key.charCode)
      if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
        && (key.charCode < 65 || key.charCode > 90) //letras minusculas
        && (key.charCode != 45) //retroceso
        && (key.charCode != 241) //ñ
         && (key.charCode != 209) //Ñ
         && (key.charCode != 32) //espacio
         && (key.charCode != 225) //á
         && (key.charCode != 233) //é
         && (key.charCode != 237) //í
         && (key.charCode != 243) //ó
         && (key.charCode != 250) //ú
         && (key.charCode != 193) //Á
         && (key.charCode != 201) //É
         && (key.charCode != 205) //Í
         && (key.charCode != 211) //Ó
         && (key.charCode != 218) //Ú
      )
      return false;
    }); 
}

function guardar(operacion){
    if(esCorrecto()){
        
        if(operacion != "Agregar"){
            guardarInformacion(operacion);
        }else{
            //Verificar si la baja no está repetida en la base de datos
            var rep = repetido();

            if(rep){
                alerta('La causa de baja <strong>'+$('#txtDescripcion').val()+'</strong> ya existe.','info');
            }else{
                guardarInformacion(operacion);
            }
        }
    }
}

function repetido(){
     var uri = '/causabaja/'+$.trim($('#txtDescripcion').val());
     var bandera = '';

     $.ajaxSetup({async:false});

     $.getJSON(uri,function(item){
          bandera = item;
     });

     return bandera;
}

function guardarInformacion(operacion){

  //var token = $('#token').val();
  $('#overlay').show();

  var tipo = '';
  var uri = '';

  if(operacion != "Agregar"){
    tipo = 'PUT';
    uri = '/causabajas/'+parseInt($('#txtClave').val())+"";
  }else{
    tipo = 'POST';
    uri = '/causabajas/';
  }

  $.ajax({
    url:uri,
    async:false,
    headers:{'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')},
    dataType:'json',
    type: tipo,
    data:{
      //parseInt($('#txtClave').val())
      "cbaja_cve":parseInt($('#txtClave').val()),
      "cbaja_desc":$.trim($('#txtDescripcion').val())
    },
    success:function(data,status,xhr){
          exito();

    },
    error:function(error){

          $('#overlay').hide();
          alerta('<label><span class="fa fa-exclamation-triangle"></span> Ha ocurrido un error, por favor cierra la ventana e inténtalo nuevamente.</label>','danger');
    }

  });

}

function exito(){
    cargarTabla();

    $('#overlay').hide();

    alerta('<label><span class="fa fa-check-circle"></span> Información almacenada con éxito.</label>','success');

    setTimeout(function(){
        $('#modalCausaBaja .modal-body  #error').html('');
        cargarTabla();
        cerrarModal();
    },2000);
    
}

function esCorrecto(){
  var mensaje = '';

  if($('#txtDescripcion').val()==''){
    mensaje+='<br><strong>*Descripción: </strong>no debe ser vacío.</strong>';
  }


  if(mensaje!=''){
    alerta('Campos incorrectos:'+mensaje,'danger');
    return false;
  }else{
    return true;
  }
}

function alerta(mensaje,tipo){

  var alerta = 
        '<div class="alert alert-'+tipo+'" role="alert">'+
          mensaje +
        '</div>';

    
    $('#modalCausaBaja .modal-body  #error').html('');
    $('#modalCausaBaja .modal-body  #error').append(alerta);

}

function cargarTabla(){
    var uri = '/causabaja';
    var tabla = '';

    //Destruir paginación en la tabla
    dataTable.fnDestroy(); 

    //Limpiar todos los td dentro de la tabla
    $('#listaCausaBajas tbody').html('');

    $.getJSON(uri, function (data) {
        $.each(data, function (key, item) {
            tabla += '<tr>'+
                        '<td>'+
                           '<div class="form-check">'+
                              '<label class="custom-control custom-checkbox">'+
                                  '<input onclick=\'seleccionMultiple('+item.cbaja_cve+')\'\ id="chk'+item.cbaja_cve+'"  type="checkbox" name="chkSeleccionar" class="custom-control-input" value="'+parseInt(item.cbaja_cve)+'">'+
                                  '<span class="custom-control-indicator"></span>'+
                              '</label>'+
                            '</div>'+
                        '</td>'+
                        '<td width="10px">'+item.cbaja_cve+'</td>'+
                        '<td width="80%">'+item.cbaja_desc+'</td>'+
                        '<td  width="13%">'+
                            '<button title="Editar" type="button" class="funct btn btn-outline-success" onclick=\'modalCausaBajas("Editar",'+parseInt(item.cbaja_cve)+')\'\><i class="fa fa-pencil" aria-hidden="true"></i></button>'+
                            '<button title="Consultar" type="button" class="funct btn btn-outline-info" onclick=\'modalCausaBajas("Consultar",'+parseInt(item.cbaja_cve)+')\'\><i class="fa fa-eye" aria-hidden="true"></i></button>'+
                        '</td> '+
                     '</tr>';
        });

         $('#listaCausaBajas tbody').append(tabla);
    }); 

    //Recargar paginación en la tabla
    paginacion();
}

function cerrarModal(){

  $("#modalCausaBaja").modal('hide').remove();
  $('.modal-backdrop.show').remove();
  $('.modal-open').removeClass();
  $('#modalCausaBaja').remove();
}
function exportarAExcel(){
	$("#modalExportarAExcel").modal('show');
}

function exportarAPDF(){
	$("#modalExportarAPDF").modal('show');
}