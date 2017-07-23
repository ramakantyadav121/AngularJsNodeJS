angular.module('ContactModule',[])
	.controller('ContactController', function(authenticationService){
            authenticationService.checkAuthentication();
		console.log('ContactController');
	});

