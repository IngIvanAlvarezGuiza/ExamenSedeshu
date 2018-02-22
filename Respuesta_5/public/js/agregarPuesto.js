$(document).ready(function() {

	var operacion = $('#operacion').val();

	//----------------------------------------------------------------------
	//No permitir cortar, copiar o pegar
	$('input').bind("cut copy paste",function(e) {
	     e.preventDefault();
	});

    //Saving data to DB
    $('#btnGuardar').on('click',function(){
    	//alert($('#operacion').val());
    	guardar(operacion);
    });

} );

function guardar(operacion){
    if(esCorrecto()){
        
        if(operacion != "Agregar"){
            guardarInformacion(operacion);
        }else{
            //Verificar si el ´puesto no está repetido en la base de datos
            var repId = repetidoId();
            var repDesc = repetidoDesc();

            if(repId && repDesc){
                alerta('El puesto con la clave <strong>'+$('#txtClave').val()+'</strong> y descripción <strong>'+$('#txtDescripcion').val()+'</strong> ya existe.','info');
            }
            else if(repId){
                alerta('El puesto con la clave <strong>'+$('#txtClave').val()+'</strong> ya existe.','info');
            }
            else if(repDesc){
                alerta('El puesto con la descripción <strong>'+$('#txtDescripcion').val()+'</strong> ya existe.','info');
            }
            else{
                guardarInformacion(operacion);
            }
        }
    }
}

function repetidoId(){
     var uri = '/puesto/'+$.trim($('#txtClave').val())+'/id';
     var bandera = '';

     $.ajaxSetup({async:false});

     $.getJSON(uri,function(item){
          bandera = item;
     });

     return bandera;
}

function repetidoDesc(){
     var uri = '/puesto/'+$.trim($('#txtDescripcion').val())+'/desc';
     var bandera = '';

     $.ajaxSetup({async:false});

     $.getJSON(uri,function(item){
          bandera = item;
     });

     return bandera;
}

function esCorrecto(){
  var mensaje = '';

  if($('#txtClave').val()==''){
    mensaje+='<br><strong>*Clave: </strong>no debe ser vacío.</strong>';
  }

  if($('#txtDescripcion').val()==''){
    mensaje+='<br><strong>*Descripción: </strong>no debe ser vacío.</strong>';
  }

  if($('#cmbTipoNomina option:selected').val()==0){
    mensaje+='<br><strong>*Tipo de nómina: </strong>no debe ser vacío.</strong>';
  }

  if($('#cmbTipoPrecio option:selected').val()==0){
    mensaje+='<br><strong>*Tipo de precio: </strong>no debe ser vacío.</strong>';
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

    
    $('#error').html('');
    $('#error').append(alerta);

}

function guardarInformacion(operacion){

  //var token = $('#token').val();
  $('#overlay').show();

  var tipo = '';
  var uri = '';
  var clave = '';

  if(operacion != "Agregar"){
    tipo = 'PUT';
    uri = '/puestos/'+$.trim($('#txtClave').val())+"";
  }else{
    tipo = 'POST';
    uri = '/puestos/';
  }

  clave = $.trim($('#txtClave').val());

  $.ajax({
    url:uri,
    async:false,
    headers:{'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')},
    dataType:'json',
    type: tipo,
    data:{
      "pues_cve":clave.toUpperCase(),
      "pues_desc":$.trim($('#txtDescripcion').val()),
      "pues_estado":$('input[name=optionEstatus]:checked').val(),
      "tipnomina_cve":$("#cmbTipoNomina").val(),
      "tipprecio_cve":$("#cmbTipoPrecio").val()
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

    $('#overlay').hide();

    alerta('<label><span class="fa fa-check-circle"></span> Información almacenada con éxito.</label>','success');

    if(operacion!="Agregar"){

    	setTimeout(function(){
	        $('#error').html('');

	        location.href = '/puestos';
	    },1000);
    }else{
    	limpiarElementos();

    	setTimeout(function(){
	        $('#error').html('');

	    },4000);
    }
}

function limpiarElementos(){
	$('input').val('');
	$("#cmbTipoNomina").prop('selectedIndex', 0);
	$("#cmbTipoPrecio").prop('selectedIndex', 0);
	$("#optionActivo").prop("checked", true);
}