angular.module('orderModule', ['smart-table'])
        .controller('orderController', function ($scope, authenticationService, orderService) {
            authenticationService.checkAuthentication();
            console.log('AboutController');
            $scope.name= 'radhe';
        })
        
        //directive starts
        .directive('orderBook', function(){
            
        })
        //directive ends 
        
        .factory('orderService', function(){
            
        });