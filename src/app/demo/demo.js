angular
  .module('app')
  .controller("TodoCtrl", [
    "$scope",
    "TestResource",
    function($scope, TestResource) { 

	var state = TestResource.get({}, function(){
			$scope.status = state.status;
		})

	}	
]);
