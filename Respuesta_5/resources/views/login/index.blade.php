<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    
        {!!Html::style('css/bootstrap.min.css')!!}
    </head>
    
    <body>
        {{!!Html::script('js/jquery-3.1.1.min.js')!!}}
        <form action="">
          <div class="row">
                <div class="form-group col-md-4" style="margin: auto;">
                    <label for="txtClave">Usuario:</label>
                    <input type="text"  style="text-transform: uppercase;" maxlength="50" class="form-control" id="txtUsuario" >
                </div>
           </div><br>
           <div class="row">
                <div class="form-group col-md-4" style="margin: auto;">
                    <label for="txtClave">Contraseña:</label>
                    <input type="text"  style="text-transform: uppercase;" maxlength="50" class="form-control" id="txtContrasenia" >
                </div>
           </div><br>
           <button type="button" id="btnEntrar" class="btn btn-outline-primary offset-5"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
        </form>
        
        {!!Html::script('https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js')!!}
        {!!Html::script('js/bootstrap.min.js')!!}
</html>