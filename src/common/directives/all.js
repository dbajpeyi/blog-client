angular.module('directives.all', [])

 .directive('menu', function() {
        return {
            restrict: 'E',
            replace: true,
            link: function() {
               
            },
            templateUrl: "common/menu.tpl.html"
        };
    })
    
