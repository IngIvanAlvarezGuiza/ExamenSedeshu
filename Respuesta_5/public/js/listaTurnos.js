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

    dataTable = $('#listaTurnos').dataTable( {
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
            $('#listaTurnos tbody input[type=checkbox]').each(function(){
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

function ultimoTurno(){

  var uri = '/turno/obtenerUltimoID';
  var id = 0;

  $.ajaxSetup({
    async:false
  });

  $.getJSON(uri,function(data){

    id = data;

  });

  return id;
}


function modalTurnos(operacion,_id){

    var id = 0;
    var descripcion = '';
    var uri = '';
    var modal = '';

    if(operacion != "Agregar"){
      id = _id;
      uri = '/turnos/'+id+'/edit';

      $.ajaxSetup({
        async:false
      });

      $.getJSON(uri,function(item){
            modal = '<div class="modal fade" id="modalTurno" tabindex="-1" role="dialog" aria-labelledby="modalTurno" aria-hidden="true">'+
                '<div class="modal-dialog" role="document">'+
                  '<div class="modal-content">'+
                     '<div class="modal-header" style="background-color: rgb(77,182,172);color: white">'+
                      '<h5 class="modal-title" style="margin: 0 auto;">'+operacion+' turno <i class="fa fa-clock-o" aria-hidden="true"></i></h5>'+
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
                                  modal+='<input type="text" disabled class="form-control" value="'+item.turn_desc+'" id="txtDescripcion" >';
                              }else{
                                  modal+='<input type="text" maxlength="250" class="form-control" value="'+item.turn_desc+'" id="txtDescripcion" >';
                              }
                              
                         modal+='</div>'+
                      '</div>'+
                    '</div>'+
                    '<div class="modal-footer">';

                        if(operacion=="Consultar"){
                            modal+='<button type="button" disabled onclick=\'guardar("Editar")\'\ disabled class="btn btn-outline-primary" style="float: left;"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>';
                        }else{
                            modal+='<button type="button" onclick=\'guardar("Editar")\'\ class="btn btn-outline-primary" style="float: left;"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>';
                        }

                        modal+=                      
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>';
        });

      }else{
        id = ultimoTurno();

        modal = '<div class="modal fade" id="modalTurno" tabindex="-1" role="dialog" aria-labelledby="modalTurno" aria-hidden="true">'+
            '<div class="modal-dialog" role="document">'+
              '<div class="modal-content">'+
                 '<div class="modal-header" style="background-color: rgb(77,182,172);color: white">'+
                  '<h5 class="modal-title" style="margin: 0 auto;">'+operacion+' turno <i class="fa fa-clock-o" aria-hidden="true"></i></h5>'+
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
    
    $('#modalTurno').modal('show');

    //Configurar los elementos html para no permitir cortar, copiar o pegar
    $('input').bind('cut copy paste',function(e){
        e.preventDefault();
    });
}

function guardar(operacion){
    if(esCorrecto()){
        
        if(operacion != "Agregar"){
            guardarInformacion(operacion);
        }else{
            //Verificar si el turno no está repetido en la base de datos
            var rep = repetido();

            if(rep){
                alerta('El turno <strong>'+$('#txtDescripcion').val()+'</strong> ya existe.','info');
            }else{
                guardarInformacion(operacion);
            }
        }
    }
}

function repetido(){
     var uri = '/turno/'+$.trim($('#txtDescripcion').val());
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
    uri = '/turnos/'+parseInt($('#txtClave').val())+"";
  }else{
    tipo = 'POST';
    uri = '/turnos/';
  }

  $.ajax({
    url:uri,
    async:false,
    headers:{'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')},
    dataType:'json',
    type: tipo,
    data:{
      //parseInt($('#txtClave').val())
      "turn_cve":parseInt($('#txtClave').val()),
      "turn_desc":$.trim($('#txtDescripcion').val())
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
        $('#modalTurno .modal-body  #error').html('');
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

    
      $('#modalTurno .modal-body  #error').html('');
    $('#modalTurno .modal-body  #error').append(alerta);

}

function cargarTabla(){
    var uri = '/turno';
    var tabla = '';

    //Destruir paginación en la tabla
    dataTable.fnDestroy(); 

    //Limpiar todos los td dentro de la tabla
    $('#listaTurnos tbody').html('');

    $.getJSON(uri, function (data) {
        $.each(data, function (key, item) {
            tabla += '<tr>'+
                        '<td>'+
                           '<div class="form-check">'+
                              '<label class="custom-control custom-checkbox">'+
                                  '<input onclick=\'seleccionMultiple('+item.turn_cve+')\'\ id="chk'+item.turn_cve+'"  type="checkbox" name="chkSeleccionar" class="custom-control-input" value="'+parseInt(item.turn_cve)+'">'+
                                  '<span class="custom-control-indicator"></span>'+
                              '</label>'+
                            '</div>'+
                        '</td>'+
                        '<td width="10px">'+item.turn_cve+'</td>'+
                        '<td width="80%">'+item.turn_desc+'</td>'+
                        '<td  width="13%">'+
                            '<button title="Editar" type="button" class="funct btn btn-outline-success" onclick=\'modalTurnos("Editar",'+parseInt(item.turn_cve)+')\'\><i class="fa fa-pencil" aria-hidden="true"></i></button>'+
                            '<button title="Consultar" type="button" class="funct btn btn-outline-info" onclick=\'modalTurnos("Consultar",'+parseInt(item.turn_cve)+')\'\><i class="fa fa-eye" aria-hidden="true"></i></button>'+
                        '</td> '+
                     '</tr>';
        });

         $('#listaTurnos tbody').append(tabla);
    }); 

    //Recargar paginación en la tabla
    paginacion();
}

function cerrarModal(){

  $("#modalTurno").modal('hide').remove();
  $('.modal-backdrop.show').remove();
  $('.modal-open').removeClass();
  $('#modalTurno').remove();
}

function exportarAExcel(){
	$("#modalExportarAExcel").modal('show');
}

function exportarAPDF(){
	$("#modalExportarAPDF").modal('show');
}