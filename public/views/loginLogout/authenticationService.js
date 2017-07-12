angular.module('authService', [])
        .factory('authenticationService', ['$http', function ($http) {

                var authenticateLogin = function () {
                    return $http.get('/mongodb/loginAuthentication');
                };
                return {authenticateLogin: authenticateLogin};

            }]);