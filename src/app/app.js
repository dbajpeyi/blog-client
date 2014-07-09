angular.module('app', [
  'ngResource',
  'ngRoute',
  'templates.app',
  'resources.demo',
  'templates.common'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false).hashPrefix('!');
  $routeProvider
    .when('/',
      {templateUrl: 'demo/demo.tpl.html', controller : "TodoCtrl"});
}]);
