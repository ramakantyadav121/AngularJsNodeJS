(function () {
    angular.module('userModule', [])
            .service('userService', ['$http',
                function ($http) {
                    console.log('user service');
                }]);
});

