var app = angular.module('lazyLoadApp', ['ui.router', 'oc.lazyLoad']);

app.config(['$httpProvider', '$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', function ($httpProvider, $ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {

        //add interceptor to add token with every request
        $httpProvider.interceptors.push('authInterceptor');

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
                    views: {
                        "": {
                            templateUrl: "views/loginLogout/login.html"
                        }
                    },
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['views/loginLogout/authenticationService.js', 'views/loginLogout/loginController.js']); // Resolve promise and load before view 
                            }]
                    }
                })
                .state('krishna', {
                    url: "/krishna",
                    views: {
                        "": {
                            templateUrl: "views/main.html"
                        }
                    },
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load([
                                    'views/loginLogout/authenticationService.js',
                                    'views/loginLogout/loginController.js',
                                    '/views/navigation/navigation-controller.js']);
                            }]
                    }
                })
                .state('krishna.home', {
                    url: "/home",
                    views: {
                        "": {
                            templateUrl: "views/home/view/home.html"
                        }
                    },
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['views/home/js/home-controller.js']); // Resolve promise and load before view 
                            }]
                    }
                })
                .state('krishna.todo', {
                    url: "/todo",
                    views: {
                        "": {controller: 'TodoController',
                            templateUrl: "views/todo/view/todo.html"
                        }
                    },
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['views/todo/js/todo-controller.js', 'views/todo/js/todo-services.js']); // Resolve promise and load before view 
                            }]
                    }
                })
                .state('krishna.contact', {
                    url: "/contact",
                    views: {
                        "": {
                            templateUrl: "views/contactus/view/ContactUs.html"
                        }
                    },
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['views/contactus/js/contact-controller.js']); // Resolve promise and load before view 
                            }]
                    }
                })
                .state('krishna.about', {
                    url: "/about",
                    views: {
                        "": {
                            templateUrl: "views/about/view/about.html"
                        }
                    },
                    resolve: {
                        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                                return $ocLazyLoad.load(['views/about/js/about-controller.js']); // Resolve promise and load before view 
                            }]
                    }
                })
                .state(' ', {
                    url: "/error",
                    views: {
                        "": {
                            templateUrl: "views/error.html"
                        }
                    }
                });
    }]);

//addd token with every http/https request after getting token
app.factory('authInterceptor', function ($q, $window) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if (localStorage.getItem('authToken')) {
                var token = config.headers.Authorization = 'Bearer ' + localStorage.getItem('authToken');
            }
            return config;
        },
        responseError: function (response) {
            if (response.status === 401 || response.status === 403) {
                $window.location.href = "http://localhost:8080";
            }
            return $q.reject(response);
        }
    };
});
