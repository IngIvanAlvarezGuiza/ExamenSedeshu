<?php
	class Thesaurus{
		private $thesaurus;

		function Thesaurus($thesaurus){
			$this->thesaurus = $thesaurus;
		}

		function getSynonyms($word){
			  
			//Bandera para saber cuando no hay sinónimos en el diccionario  
			$cont = 0;
			
			foreach($this->thesaurus as $item=>$index)
			{
				if($item == $word){
					$arreglo = array (
						"palabra" =>$word,
						"sinonimos" =>$this->thesaurus[$item]
					);
					echo json_encode($arreglo);
					break;
				}else{
					$cont = $cont + 1;
				}
				
			}
			
			if($cont == count($this->thesaurus)){
				$arreglo2 = array (
						"palabra" => $word,
						"sinonimos" => []
					);
				echo json_encode($arreglo2);
				
			}
		}
	}

	$thesaurus = new Thesaurus(
		array(
			"comprar" => array("compra"),
			"grande" => array("enorme","largo")
		)
	);

	echo $thesaurus->getSynonyms("grande");
	echo "\n";
	echo $thesaurus->getSynonyms("mesa");
?>