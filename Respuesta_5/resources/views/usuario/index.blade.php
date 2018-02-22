@extends('layouts.principal')

@section('content')
	<div class="container col-sm-12">
    <br>
    <div class="card">
        <div class="card-block">
            <div class="form-titulo">
              Usuarios <i class="fa fa-users" aria-hidden="true"></i>
            </div>

            <hr>    
            <div class="row col-md-11">
            	<div class="form-inline col-md-12">
                    <button type="button" onclick="location.href='/usuario/create'" title="Agregar" class="btn-funcion form-boton btn btn-agregar"><i class="fa fa-plus" aria-hidden="true"></i> Agregar</button>
                </div>
            </div><br><br>
            <div class="row col-md-11">
            	<div class="form-inline col-md-12">
                	<label for="txtBuscar">Buscar:</label>
                    <input type="text"  class="form-control  col-md-4" id="txtBuscar" style="margin-left: 10px;">
                    
                </div>
            </div>
            
            <br>
            <table id="listaUsuarios" class="table table-striped table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th width="15%">Nombre</th>
                        <th>Usuario</th>
                        <th>Contraseña</th>
                        
                        <th width="5% style="vertical-align: middle;">Modificar</th>
                        <th width="5% style="vertical-align: middle;">Consultar</th>

                    </tr>
                </thead>
                <tbody>
                	@foreach($usuarios as $usuario)
                    <tr>
                        <td>{{ $usuario->usu_nombre }}</td>
                        <td>{{ $usuario->usu_usuario }}</td>
                        <td>{{ $usuario->usu_contrasenia }}</td>
                        <td align="center">
                            <button title="Editar" onclick="location.href='/usuario/{{ $usuario->usu_cve }}/edit'" type="button" class="btn btn-outline-success"><i class="fas fa-pencil" aria-hidden="true"></i></button>
                            
                        </td> 
                        <td align="center">
                            <button title="Consultar" onclick="location.href='/usuario/{{ $usuario->usu_cve }}'" type="button" class="btn btn-outline-info"><i class="fa fa-eye" aria-hidden="true"></i></button>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
	{!!Html::script('js/listaUsuarios.js')!!}
@stop