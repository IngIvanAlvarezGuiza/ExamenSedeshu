$(document).ready(function() {
   paginacion();

    $('#listaDepartamentos_length').change( function() {
        seleccionMultiple("Todo");
    } );
} );

//Variables globales
var total_check = 0;

function paginacion(){

    $('#listaPuestos').dataTable( {
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
            $('#listaPuestos tbody input[type=checkbox]').each(function(){
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

function exportarAExcel(){
	$("#modalExportarAExcel").modal('show');
}

function exportarAPDF(){
	$("#modalExportarAPDF").modal('show');
}