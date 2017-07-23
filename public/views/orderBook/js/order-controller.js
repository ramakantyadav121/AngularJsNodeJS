angular.module('orderModule', ['smart-table'])
        .controller('orderController', function ($scope, authenticationService) {
            authenticationService.checkAuthentication();
            console.log('AboutController');
        $scope.order = [
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]},
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]},
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]},
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]},
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]},
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]},
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]},
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]},
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]},
            {"name": "rk", "moNumber": 9670742688, "items": [{"name":"paneer","quantity": 1, "price": 230}]}
            
            
            ];   
            
            $scope.addNewOrder = function(){
              alert("added");  
            };
            
            //resize table size on resize window size
                $(window).resize(function () {
                    var height = $(window).height();
                    $('#orderId').height(height - 153);
                });
                $('#orderId').height($(window).height() - 153);

        })
        
        //directive starts
        .directive('orderBook', function(){
            return {
                templateUrl: '/views/orderBook/view/orderPanel.html'
            };
            
        })
        //directive ends 
        
        .factory('orderService', function(){
            
        });