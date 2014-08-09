angular.module('app')
  .controller("PostListCtrl", [
    "$scope",
    "$location",
    "GetPosts",
    function($scope, $location,  GetPosts) { 

	var state = GetPosts.get({}, function(){
			$scope.status = state.status;
            console.log(state);
		})

        $scope.createPost = function () {
            console.log("Hello");
            $location.path("/create-post")
        }

}]).controller("CreatePostCtrl", [
    "$scope",
    function($scope) { 

	}	
]);
