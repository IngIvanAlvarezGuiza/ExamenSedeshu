@extends('layouts.principal')

@section('content')
	
	<div class="container col-md-12">
      	<div class="card">
          	<div class="card-block">
          		<input type="hidden" id="operacion"  value="Agregar">
                <div class="form-titulo">Mapas
                </div>
                <hr>    
              	<div class="container" >
              		<div class="col-md-11" id="mapa">
              			

              		</div>
                    
              	</div>
              </div>
              
          </div>
	  </div>

  		{!!Html::script('https://maps.googleapis.com/maps/api/js?key=AIzaSyDOS9CTOwOXeI8eSso1QKkGQhqOxdtCKdk&sensor=false')!!}
	   {!!Html::script('js/mapas.js')!!}
@stop