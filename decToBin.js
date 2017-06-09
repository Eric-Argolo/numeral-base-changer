function decToBin(){
	var $number_input = parseInt(document.querySelector("#number_input").value);
	if($number_input < 0){
		alert("Not possible (yet)!");
	}else{
		var stack = [];
		var stack_top = 0;
		var quotient = $number_input;
		var result = "";

		do{
			stack.push(quotient % 2);
			quotient = Math.floor(quotient / 2);		
			stack_top++;
		}while(quotient !== 0);

		while(stack.length > 0){
			result += stack.pop();
		}

		document.querySelector("#result").value = result;
	}
}

var button = document.querySelector("button");
button.addEventListener("click", function(){
	decToBin();
});