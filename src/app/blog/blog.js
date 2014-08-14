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
