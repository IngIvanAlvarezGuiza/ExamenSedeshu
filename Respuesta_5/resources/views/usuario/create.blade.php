@extends('layouts.principal')

@section('content')
	
	<div class="container col-md-7">
		<!-- ['route'=>'cliente.store', 'method'=>'POST'] -->
		<meta name="_token" content="{{ csrf_token() }}" />
	  	<form id="">
	      	<div class="card">
	          	<div class="card-block">
	          		<input type="hidden" id="operacion"  value="Agregar">
	                <div class="form-titulo">
	                  Agregar usuario <i class="fa fa-male" aria-hidden="true"></i>
	                  <i onclick="location.href='/usuario'" class="fa fa-undo" aria-hidden="true" title="Regresar a listado" style="float: right;font-size: 16px;cursor: pointer;"> Regresar</i>
	                </div>
	                <hr>    
	              	<div class="container" >
	              		<div class="row">
							<div id="error" class="col-md-10 offset-1"></div>
	              		</div>
	                  	<div class="row">
	                          <div class="form-group col-md-4" style="margin: auto;">
	                              <label for="txtClave">Clave:</label>
	                          	  <input type="text" disabled style="text-transform: uppercase;" maxlength="50" class="form-control" id="txtClave" >
	                          </div>
	                     </div><br>
	                     <div class="row">
	                         <div class="form-group col-md-9" style="margin: auto;">
	                              <label for="txtNombre">*Nombre:</label>
	                          	<input type="text"class="form-control" id="txtNombre" >
	                         </div>
	                     </div><br>
	                     <div class="row">
	                         <div class="form-group col-md-9" style="margin: auto;">
	                              <label for="txtUsuario">*Usuario:</label>
	                          	<input type="text" class="form-control" id="txtUsuario" >
	                         </div>
	                     </div><br>
	                     <div class="row">
	                         <div class="form-group col-md-9" style="margin: auto;">
	                              <label for="txtContrasenia">*Contraseña:</label>
	                          	<input type="text" class="form-control" id="txtContrasenia" >
	                         </div>
	                     </div><br>
	                     <div class="row">
	                         <div class="form-group col-md-9" style="margin: auto;">
	                              <label for="txtContrasenia">*Repetir contraseña:</label>
	                          	<input type="text"  class="form-control" id="txtRepiteContrasenia" >
	                         </div>
	                     </div><br>
	                    
	              	</div>
	              </div>
	              
	              <div class="form-pie">
	                  <button type="button" id="btnGuardar" class="form-boton btn btn-outline-primary"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
	                  <button onclick="location.href='/usuario'" type="button" class="form-boton btn btn-outline-danger"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
	              </div>
	          </div>
	      </form>
	  </div>
    {!!Html::script('js/agregarUsuario.js')!!}
@stop