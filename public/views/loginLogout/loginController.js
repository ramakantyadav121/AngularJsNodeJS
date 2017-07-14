'use strict';
var loginModule = angular.module('LoginModule', []);
loginModule.controller('LoginController', ['$scope', '$state', '$interval', 'authenticationService',
    function ($scope, $state, $interval, authenticationService) {
        
        //authenticate login 
        $scope.loginAuthentication = function () {
            if ($scope.userName !== undefined && $scope.password !== undefined) {
                authenticationService.authenticateLogin($scope.userName, $scope.password)
                        .then(function (response) {
                            $scope.authenticationError = false;
                            $scope.message = '';
                            var data = response.data;
                            console.log(data);
                            if (data)
                            {
                                $state.go("krishna.home", {});
                            } else
                            {
                                $scope.authenticationError = true;
                                $scope.message = "password is incorrect";
                            }
                        }, function (error) {
                            $scope.authenticationError = true;
                            $scope.message = "user not found";
                            console.log("error in authenticating user" + error.data);
                        });
            } else {
                $scope.authenticationError = true;
                $scope.message = '';
            }
        };
        
    }]);