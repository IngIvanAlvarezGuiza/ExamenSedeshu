$(document).ready(function(e) {
	
	//Mostrando menú
    $("#boton-menu").click(function() {
		if($("#boton-menu").attr('class') == "fa fa-bars"){
			$("#boton-menu").removeClass("fa fa-bars").addClass('fa fa-close');
			$(".navegacion .menu").css({'left':'0px'});
			$(".navegacion").css({'width':'100%','background':'rgba(0,0,0,.3)'});
		}else{
			$("#boton-menu").removeClass("fa fa-close").addClass('fa fa-bars');
			$(".navegacion .menu").css({'left':'-320px'});
			$(".navegacion").css({'width':'0%','background':'rgba(0,0,0,.0)'});
		}
    });
	
	
	//Mostrar submenús
	$(".navegacion .menu > .item-submenu a").click(function() {
        var positionMenu = $(this).parent().attr('menu');
		$('.item-submenu[menu="'+positionMenu+'"] .submenu').css({'left':'0'});
    });
	
	//Ocultar submenú
	$('.navegacion .submenu li.go-back').click(function(){
		$(this).parent().css({'left':'-320px'});
	});
});

function salir(){
	$("#modalSalir").modal('show');
}
	
	
	
	
	
	
	
	