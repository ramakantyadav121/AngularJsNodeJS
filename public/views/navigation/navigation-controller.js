angular.module('navigationModule', [])
        .controller('menuController', ['$scope', 'authenticationService', function ($scope, authenticationService) {
               authenticationService.checkAuthentication();
               console.log("menu controller");
            }]);