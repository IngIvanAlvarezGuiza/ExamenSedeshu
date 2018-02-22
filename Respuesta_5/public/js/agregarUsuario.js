$(document).ready(function() {

  
	var operacion = $('#operacion').val();

  if(operacion == "Agregar"){
    obtenerUltimoID();
  }

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


function obtenerUltimoID(){
     var uri = '/usuarios/obtenerUltimoID';
     var bandera = '';

     $.ajaxSetup({async:false});

     $.getJSON(uri,function(item){
          bandera = item;
     });

     $('#txtClave').val(bandera);
}

function guardar(operacion){
    if(esCorrecto()){  
        guardarInformacion(operacion);
    }
}


function esCorrecto(){
  var mensaje = '';

  if($('#txtNombre').val()==''){
    mensaje+='<br><strong>*Nombre: </strong>no debe ser vacío.</strong>';
  }

   if($('#txtApellidos').val()==''){
    mensaje+='<br><strong>*Apellidos: </strong>no debe ser vacío.</strong>';
  }

   if($('#txtUsuario').val()==''){
    mensaje+='<br><strong>*Usuario: </strong>no debe ser vacío.</strong>';
  }

   if($('#txtContrasenia').val()==''){
    mensaje+='<br><strong>*Contraseña: </strong>no debe ser vacío.</strong>';
  }


   if($('#txtRepiteContrasenia').val()==''){
    mensaje+='<br><strong>*Repite contraseña: </strong>no debe ser vacío.</strong>';
  }

  if($('#txtContrasenia').val() != $('#txtRepiteContrasenia').val()){
    mensaje+='<br><strong>*Las contraseñas no coinciden.</strong>';
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

  var tipo = '';
  var uri = '';

  if(operacion != "Agregar"){
    tipo = 'PUT';
    uri = '/usuario/'+$('#txtClave').val();
  }else{
    tipo = 'POST';
    uri = '/usuario';

  }


  $.ajax({
    url:uri,
    async:false,
    headers:{'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')},
    dataType:'json',
    type: tipo,
    data:{
      "usu_cve":$('#txtClave').val(),
      "usu_nombre":$.trim($('#txtNombre').val()),
      "usu_usuario":$.trim($('#txtUsuario').val()),
      "usu_contrasenia":$.trim($('#txtContrasenia').val()),
      "usu_salt":'fdf',
      "usu_hash":'fdf'

    },
    success:function(data,status,xhr){
          exito();
          console.log(xhr.responseText())
    },
    error:function(xhr, status, error){
          console.log(xhr.responseText );
          alerta('<label><span class="fa fa-exclamation-triangle"></span> Ha ocurrido un error, por favor cierra la ventana e inténtalo nuevamente.</label>','danger');
    }

  });

}

function exito(){


    alerta('<label><span class="fa fa-check-circle"></span> Información almacenada con éxito.</label>','success');

    if(operacion!="Agregar"){

    	setTimeout(function(){
	        $('#error').html('');

	        location.href = '/usuario';
	    },1000);
    }else{
    	limpiarElementos();

    	setTimeout(function(){
	        $('#error').html('');

	    },4000);
    }
}
