var demoservices = angular.module('resources.demo', ['ngResource'])
  , URL_BASE = "/app"
  ;

demoservices
  .factory("TestResource", ["$resource", function($resource) {
    return $resource(URL_BASE+"/api/default", {}, {
      query: {method:'GET'}
    });
  }])
