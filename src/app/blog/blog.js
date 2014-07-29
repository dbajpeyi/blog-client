angular.module('app')
  .controller("PostListCtrl", [
    "$scope",
    "GetPosts",
    function($scope, GetPosts) { 

	var state = GetPosts.get({}, function(){
			$scope.status = state.status;
            console.log(state);
		})

	}	
]);
