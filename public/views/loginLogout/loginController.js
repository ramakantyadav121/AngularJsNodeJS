'use strict';
var loginModule = angular.module('LoginModule', []);
loginModule.controller('LoginController', ['$scope', '$state', '$interval', 'authenticationService',
    function ($scope, $state, $interval, authenticationService) {
        $scope.loginAuthentication = function () {
            if ($scope.userName !== undefined && $scope.password !== undefined) {
                authenticationService.authenticateLogin()
                        .then(function (response) {
                            var data = response.data;
                            console.log(data);
                            $state.go("krishna.home", {});
                        }, function (error) {
                            $scope.authenticationError = true;
                            $scope.message = "user name or password is incorrect";
                            console.log("error in authenticating user" + error.data);
                        });
            } else {
                $scope.authenticationError = true;
                $scope.message = '';
            }
        };
    }]);