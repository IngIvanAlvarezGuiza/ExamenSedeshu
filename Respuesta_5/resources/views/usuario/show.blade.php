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
	                  Consultar usuario <i class="fa fa-male" aria-hidden="true"></i>
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
	                          	  <input type="text" style="text-transform: uppercase;" maxlength="50" class="form-control" disabled id="txtClave" value="{{ $usuario->usu_cve }}">
	                          </div>
	                     </div><br>
	                     <div class="row">
	                         <div class="form-group col-md-9" style="margin: auto;">
	                              <label for="txtNombre">*Nombre:</label>
	                          	<input disabled type="text"class="form-control" id="txtNombre"  value="{{ $usuario->usu_nombre }}">
	                         </div>
	                     </div><br>
	                     <div class="row">
	                         <div class="form-group col-md-9" style="margin: auto;">
	                              <label for="txtUsuario">*Usuario:</label>
	                          	<input disabled="" type="text" class="form-control" id="txtUsuario"  value="{{ $usuario->usu_usuario }}">
	                         </div>
	                     </div><br>
	                     <div class="row">
	                         <div class="form-group col-md-9" style="margin: auto;">
	                              <label for="txtContrasenia">*Contraseña:</label>
	                          	<input disabled type="text" class="form-control" id="txtContrasenia"  value="{{ $usuario->usu_contrasenia }}">
	                         </div>
	                     </div><br>
	                     <div class="row">
	                         <div class="form-group col-md-9" style="margin: auto;">
	                              <label for="txtContrasenia">*Repetir contraseña:</label>
	                          	<input disabled type="text"  class="form-control" id="txtRepiteContrasenia"  value="{{ $usuario->usu_contrasenia }}">
	                         </div>
	                     </div><br>
	                    
	              	</div>
	              </div>
	              
	          </div>
	      </form>
	  </div>
@stop