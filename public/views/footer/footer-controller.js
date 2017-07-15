var app = angular.module('footerModule', []);
        app.controller('footerController', ['$scope', function ($scope) {
                $scope.date = new Date();
            }]);

