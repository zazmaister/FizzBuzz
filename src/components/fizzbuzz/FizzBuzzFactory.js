angular.module("FizzBuzz").factory("FizzBuzzFactory", function(){
	 var fizzbuzzes = [];

	 return {
	 	calculate: function(number){
	 		fizzbuzzes = [];
	 		for(var i=0;i<=number;i++){
  				if(i%3 == 0 && i%5 ==0)
    				fizzbuzzes.push("FizzBuzz");
  				else if(i%3 == 0 ){
    				fizzbuzzes.push("Fizz");
  				}
  				else if(i%5 == 0 )
  					fizzbuzzes.push("Buzz");
  				else
    				fizzbuzzes.push(i);
				}
	 	},
	 	getFizzBuzzes:function(){
	 		return fizzbuzzes;
	 	}
	 };
});