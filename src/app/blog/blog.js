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
    "SavePost",
    function($scope, SavePost) { 

    $scope.savePost = function(){
        var post = SavePost.save({

                title : $scope.title,
                content: $scope.content

            }, function(){
                console.log(post);
                
            })
    }

	}	
]);
