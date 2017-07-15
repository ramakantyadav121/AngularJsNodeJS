angular.module('authService', [])
        .factory('authenticationService', ['$http', function ($http) {
//                var tokenClaims = getClaimsFromToken();
//                function urlBase64Decode(str) {
//                    var output = str.replace('-', '+').replace('_', '/');
//                    switch (output.length % 4) {
//                        case 0:
//                            break;
//                        case 2:
//                            output += '==';
//                            break;
//                        case 3:
//                            output += '=';
//                            break;
//                        default:
//                            throw 'Illegal base64url string!';
//                    }
//                    return window.atob(output);
//                }
//
//                function getClaimsFromToken() {
//                    var token = $localStorage.authToken;
//                    var user = {};
//                    if (typeof token !== 'undefined') {
//                        var encoded = token.split('.')[1];
//                        user = JSON.parse(urlBase64Decode(encoded));
//                    }
//                    return user;
//                }
                var authenticateLogin = function (user, password) {
                    console.log(user + ' ' + password);
                    return $http({
                        method: 'POST',
                        url: '/mongodb/loginAuthentication',
                        data: {username:user, password:password}
                    });
                };
                return {authenticateLogin: authenticateLogin,
                    logout: function (success) {
//                        tokenClaims = {};
//                        delete $localStorage.authToken;;
//                        success();
                    },
                    getTokenClaims: function () {
                        return tokenClaims;
                    }};

            }]);