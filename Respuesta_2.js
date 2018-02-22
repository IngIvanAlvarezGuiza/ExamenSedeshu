function appendChildren(decorateDivFunction){
	 var allDivs = document.getElementsByTagName("div");

	 for (var i = 0; i < allDivs.length; i++) {
	 	
	 	var newDiv = document.createElement("div") + document.createElement("/div");
		
		//Aquí se estaba haciendo una tipo recursión
	 	//decorateDivFunction(newDiv);
	 	allDivs[i].appendChild(newDiv);
	 }
}

/*//Ejemplo
document.body.innerHTML = `
	<div id="a"
		<div id="b">
		</div>
	</div>`;
*/
appendChildren(function(div){});
console.log(document.body.innerHTML);  