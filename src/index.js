module.exports = function check(str, bracketsConfig) {
  
	var arr = str.split(''); //массив со строками 
	console.log(arr);
  
	var open = [], close = [];		
		for (var i = 0; i < bracketsConfig.length; i++) {
		open.push(bracketsConfig[i][0]);  	 //открывающие элементы
		close.push(bracketsConfig[i][1]);		//закрывающие элементы
	}
	
	var closeRes = [];
	
	if ((arr.length %2) != 0){  // все нечетные не будут иметь закрывающего эл.
		return false;
	}
	
	for(var i = 0; i<arr.length; i++){
			for(var j = 0; j<open.length; j++){
				if (arr[i]==open[j]){
					closeRes.push(close[j]);
				}	
			}
			if(arr[i+1] == closeRes[i]){  // нашли все закрывающие элементы для нашей строки
						console.log(arr[i]);
					
						arr.splice(0, 2); // начиная с позиции 1, удалить 2 элемент
					}
		
	}
		
	if (arr.length == 0){  // если в результате удаления парных в массиве не осталось элементов 
		return true;
	}
	
	var arrRevers = arr.reverse();     // перворачиваем результирующий массив
		console.log(arrRevers);
	
	var nepara = 0;
	
	for(var i = 0; i<arrRevers.length; i++){
		console.log(arrRevers[i]);
		console.log(closeRes[i]);
		
		if(arrRevers[i]!== closeRes[i]){
			nepara ++;
		}
		
	}
	console.log(nepara);
	console.log(arrRevers.length);
	if (nepara !== 0 && arrRevers.length == 2){
		return false;
	}
	else{
		return true;
	}
  
}
