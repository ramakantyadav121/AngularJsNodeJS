angular.module('AboutModule',[])
	.controller('AboutController', function(authenticationService){
            authenticationService.checkAuthentication();
		console.log('AboutController');
	});