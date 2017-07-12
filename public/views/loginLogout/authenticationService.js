angular.module('authService', [])
        .factory('authenticationService', ['$http', function ($http) {

                var authenticateLogin = function () {
                    return $http.get('/api/todos');
                };
                return {authenticateLogin: authenticateLogin};

            }]);