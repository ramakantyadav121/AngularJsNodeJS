var app = angular.module('lazyLoadApp', ['ui.router', 'oc.lazyLoad']);

app.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider' , function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', "/login");
        $urlRouterProvider.otherwise("/error");
	
	//Config For ocLazyLoading
	$ocLazyLoadProvider.config({
		'debug': true, // For debugging 'true/false'
		'events': true, // For Event 'true/false'
		'modules': []
	});

	//Config/states of UI Router
	$stateProvider
        .state('login', {
		url: "/login",
		views : {
			"" : {  
				templateUrl:"views/loginLogout/login.html"
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load(['views/loginLogout/authenticationService.js', 'views/loginLogout/loginController.js']); // Resolve promise and load before view 
			}]
		}
	})
        .state('krishna', {
		url: "/krishna",
		views : {
			"" : {  
				templateUrl:"views/main.html"
			}
		},
                resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                                        /*authentication files */ 
                                        'views/loginLogout/authenticationService.js', 'views/loginLogout/loginController.js',
                                        /* naviagation menu files*/
                                        '/views/navigation/navigation-controller.js'
                                    ]); // Resolve promise and load before view 
			}]
		}
	})
        .state('krishna.home', {
		url: "/home",
		views : {
			"" : {  
				templateUrl:"views/home/view/home.html"
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load(['views/home/js/home-controller.js']); // Resolve promise and load before view 
			}]
		}
	})
	.state('krishna.todo', {
		url: "/todo",
		views : {
			"" : {  controller: 'TodoController',
				templateUrl:"views/todo/view/todo.html"
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load(['views/todo/js/todo-controller.js','views/todo/js/todo-services.js']); // Resolve promise and load before view 
			}]
		}
	})
        .state('krishna.contact', {
		url: "/contact",
		views : {
			"" : {  
				templateUrl:"views/contactus/view/ContactUs.html"
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load(['views/contactus/js/contact-controller.js']); // Resolve promise and load before view 
			}]
		}
	})
        .state('krishna.about', {
		url: "/about",
		views : {
			"" : {
				templateUrl:"views/about/view/about.html"
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load(['views/about/js/about-controller.js']); // Resolve promise and load before view 
			}]
		}
	})
        .state(' ', {
		url: "/error",
		views : {
			"" : {  
				templateUrl:"views/error.html"
			}
		}
	});
}]);