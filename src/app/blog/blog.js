angular.module('app')
  .controller("PostListCtrl", [
    "$scope",
    "$location",
    "GetPosts",
    function($scope, $location,  GetPosts) { 

	var posts = GetPosts.get({}, function(){
			$scope.status = posts.status;
            $scope.posts  = posts.posts;
            console.log(posts);
		})

        $scope.createPost = function () {
            $location.path("/create-post")
        }

}]).controller("CreatePostCtrl", [
    "$scope",
    "SavePost",
    "$location",
    function($scope, SavePost, $location) { 

    $scope.doneText = "Done!";	

    $scope.savePost = function(){
	$scope.doneText = "Saving...";
        var post = SavePost.save({

                title : $scope.title,
                content: $scope.content

            }, function(){
		$location.path("/");
                
            })
    }

	}	
]);
