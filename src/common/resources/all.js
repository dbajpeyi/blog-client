var demoservices = angular.module('resources.all', ['ngResource'])
  , URL_BASE = "/app"
  ;

demoservices
  .factory("TestResource", ["$resource", function($resource) {
    return $resource(URL_BASE+"/api/default", {}, {
      query: {method:'GET'}
    });
  }])
  .factory("GetPosts", ["$resource", function($resource) {
    return $resource(URL_BASE+"/api/posts", {}, {
      query: {method:'GET'}
    });
  }])
