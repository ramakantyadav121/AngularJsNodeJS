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
                            var result = response.data;
                            if (result.authsuccess)
                            {
                                window.localStorage.setItem("authToken", result.authToken);
                                $state.go("krishna.home", {});
                            } else
                            {
                                $scope.authenticationError = true;
                                $scope.message = result.message;
                            }
                        }, function (error) {
                            $scope.authenticationError = true;
                            $scope.message = "Error in fetching data";
                            console.log("error in authenticating user" + error.data);
                        });
            } else {
                $scope.authenticationError = true;
                $scope.message = '';
            }
        };
        
        //logout from terminal
        $scope.logoutFromUser = function(){
            if( confirm("Confirm logout ") )
            {   
                window.localStorage.removeItem("authToken");
                $state.go('login');
            }
            else
            {
                $state.transitionTo( $state.current, {}, {
                                    reload: false,
                                    inherit: false
                                } );
            }
        };
        
    }]);