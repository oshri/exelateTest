(function (angular) {
    'use strict';

    var mi = angular.module('routes',[])
    			.config(configFn);

    function configFn($locationProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise(function ($injector, $location) {   
         	$location.path('/users');  	
        });

        $locationProvider.html5Mode(true);
    }
    
}(window.angular));