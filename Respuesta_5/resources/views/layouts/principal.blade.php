<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        {!!Html::style('css/estilos.css')!!}
        {!!Html::style('css/bootstrap.min.css')!!}
        {!!Html::style('css/font-awesome.min.css')!!}
        {!!Html::style('css/dataTables.bootstrap4.min.css')!!}
    </head>
    
    <body>
        {{!!Html::script('js/jquery-3.1.1.min.js')!!}}
    	<main>
           

        	<header>
            	<span id="boton-menu" class="fa fa-bars"></span>
               
                <nav class="navegacion">
                	<ul class="menu">
                    	<li style="    height: 100px;"><span class="header-imagen"></span></li>
                    	<li class="titulo-menu">Menú</li>
                        
                        <li class="item-submenu" menu="1">
                        	<a href="#"><span class="fa fa-cogs icon-menu"></span>Administración <span class="fa fa-angle-right icon-right"></span></i></a>
                            <ul class="submenu">
                            	<li class="titulo-menu"><span class="fa fa-cogs icon-menu"></span>Administración</li>
                                <li class="go-back"><div><span class="fa fa-angle-left"></span><span style="padding-left: 10px;">Atrás</span></div></li>
                            	<li class="item" onclick="location.href='/usuario'"><span class="fa fa-users icon-menu"></span>Usuarios</li>
                                <li class="item" onclick="location.href=''"><span class="fa fa-lock icon-menu"></span>Permisos</li>
                            </ul>
                        </li>
                        <li onclick="location.href='/mapas'"><a href="#"><span class="fas fa-map-marker-alt icon-menu"></span>Mapas</a></li>
                    </ul>
                </nav>
                <div class="header-exit">
                  <span><span class="boton-action fa fa-sign-out" style="cursor: pointer;" title="Salir" onclick="salir();"></span> Salir</span>
                </div>
            </header>
            <div id="fullpage">
                @yield('content')
            </div>
        </main>
        
        {!!Html::script('https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js')!!}
        {!!Html::script('js/bootstrap.min.js')!!}
        {!!Html::script('js/inicio.js')!!}
        {!!Html::script('js/jquery.dataTables.min.js')!!}
        {!!Html::script('js/dataTables.bootstrap4.min.js')!!}
</html>