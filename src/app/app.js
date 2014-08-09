angular.module('app', [
  'ngResource',
  'ngRoute',
  'templates.app',
  'resources.all',
  'directives.all',
  'templates.common'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $routeProvider
    .when("/",
    {templateUrl : 'blog/post_list.tpl.html', controller : "PostListCtrl"})
    .when("/create-post",
    {templateUrl : 'blog/create-post.tpl.html', controller : "CreatePostCtrl"})

}]);
