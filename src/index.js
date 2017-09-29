module.exports = function check(str, bracketsConfig) {
  
	var pair = []; 		//один элемент массива = пара открывающего и закрывающего элемента из bracketsConfig
	var indexPairStr = 0; 		//индекс найденной пары в строке

	for (var i = 0; i < bracketsConfig.length; i++) { 	 // объединяем открывающий и закрывающий элемент = пара
		var openClose = bracketsConfig[i][0] + bracketsConfig[i][1];
		pair.push(openClose);
	}

	function searchPairs() {  					// проверяем строку и вырезаем все пары  
		for (var j = 0; j < pair.length; ) {
			if (str.indexOf(pair[j]) !== -1) { 		//если найдет пару открывающего и закрывающего элемента
				var indexPairStr = str.indexOf(pair[j]); 			//найденная пара в строке
				str = str.substring(0, indexPairStr) + str.slice(indexPairStr+2); 	//вырезаем из строки найденную пару и возвращаем строку без нее
				j = 0;													//опять проверяем сначала строки						
			} 
			else if (str.indexOf(pair[j]) === -1) {		 //если нет пары открывающих и закрывающих элементов 
				j++;
			}
		}
	}
  
	searchPairs();
  
	if (str.length > 0) {  //если после проверки и вырезания пар остались элементы, то они не brackets
		return false;
	} 
	else {
		return true;
	}

}
