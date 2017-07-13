angular.module('authService', [])
        .factory('authenticationService', ['$http', function ($http) {

                var authenticateLogin = function (user, password) {
                    console.log(user + ' ' + password);
                    return $http({
                        method: 'POST',
                        url: '/mongodb/loginAuthentication',
                        data: {username:user, password:password}
                    });
                };
                return {authenticateLogin: authenticateLogin};

            }]);