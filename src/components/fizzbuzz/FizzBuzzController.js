angular.module("FizzBuzz").controller("FizzBuzzController",function($scope, FizzBuzzFactory){

	$scope.model = FizzBuzzFactory;

	

	$scope.$watch("number",function(newValue){
		if(newValue!=undefined)
			$scope.model.calculate(newValue);
			$scope.fizzbuzzes = $scope.model.getFizzBuzzes();
	});
});
