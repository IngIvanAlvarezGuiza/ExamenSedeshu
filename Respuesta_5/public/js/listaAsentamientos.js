$(document).ready(function() {
   paginacion();
} );

function paginacion(){

    $('#listaAsentamientos').dataTable( {
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