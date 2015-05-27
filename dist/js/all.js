angular.module("FizzBuzz",[]);
angular.module("FizzBuzz").controller("FizzBuzzController",function($scope, FizzBuzzFactory){

	$scope.model = FizzBuzzFactory;

	

	$scope.$watch("number",function(newValue){
		if(newValue!=undefined)
			$scope.model.calculate(newValue);
			$scope.fizzbuzzes = $scope.model.getFizzBuzzes();
	});
});

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