	$(document).on("ready", inicio);
	function inicio ()
	{

		// AQUÍ VA EL CÓDIGO PARA EJECUTAR MI APP

		$('.off-canvas').on("click",menu);
		$('.ocultar-premio').on("click",ocultar);
}

function menu(){
	$("#related-link").css("top", 0);
	$("#related-link").css("position", 'absolute');
}

function ocultar(){
	$("#related-link").css("top", -370);
	$("#related-link").css("position", 'absolute');
}