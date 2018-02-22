$(document).ready(function() {
   paginacion();
    
//document.getElementByName('listaMunicipios_length').style.display = 'none';
  /*$("#listaMunicipios_length").on('change',function(){
      //
      
      //seleccionMultiple("Todo");
      console.log('Dentro');
  });*/
    
    $('#listaDepartamentos_length').change( function() {
        seleccionMultiple("Todo");
    } );
} );

function paginacion(){

    $('#listaTipoContratos').dataTable( {
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

var total_check = 0;

function seleccionMultiple(id){
    
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
        }
        
    }else{

        if($("#chk"+id).is(':checked')){
            //$(id).prop('checked', true);

            //Actualizar contador
            total_check = total_check + 1;
            $('#contador-tabla').text(total_check);

            //Si sólo hay un registro
            if(total_check == 1){
                $('#chkTodo').prop('checked', true);   
            }



        }else{
            //Actualizar contador
            total_check = total_check - 1;
            $('#contador-tabla').text(total_check);

            if(total_check == 0){
                $('#chkTodo').prop('checked', false);   
            }
        }

        
    }

    if(total_check == 0){
        $('#contador-tabla').text('');
    }

   // llenarArregloClientes(id);
}


function modalDepartamentos(){
    var modal = '<div class="modal fade" id="modalDepartamento" tabindex="-1" role="dialog" aria-labelledby="modalDepartamento" aria-hidden="true">'+
          '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
               '<div class="modal-header" style="background-color: rgb(77,182,172);color: white">'+
                '<h5 class="modal-title" style="margin: 0 auto;">Agregar departamento <i class="fa fa-building" aria-hidden="true"></i></h5>'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                  '<span aria-hidden="true">&times;</span>'+
                '</button>'+
              '</div>'+
              '<div class="modal-body">'+
                '<div class="row">'+
                   '<div class="form-group col-md-3 offset-1">'+
                        '<label for="txtClave">Clave:</label>'+
                        '<input type="text"  class="form-control" id="txtClave" disabled>'+
                   '</div>'+
                '</div>'+
                '<div class="row">'+
                   '<div class="form-group col-md-10 offset-1">'+
                        '<label for="txtDescripcion">*Descripción:</label>'+
                        '<input type="text"  class="form-control" id="txtDescripcion" >'+
                   '</div>'+
                '</div>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-outline-primary" style="float: left;"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    
    
    $(modal).appendTo( "#fullpage" );
    
    $('#modalDepartamento').modal('show');
}

function exportarAExcel(){
	$("#modalExportarAExcel").modal('show');
}

function exportarAPDF(){
	$("#modalExportarAPDF").modal('show');
}