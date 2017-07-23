angular.module('HomeModule',[])
	.controller('HomeController', function(authenticationService){
            authenticationService.checkAuthentication();
		console.log('HomeController');
	});

