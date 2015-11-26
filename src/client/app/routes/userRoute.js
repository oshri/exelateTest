(function  (angular) {
    'use strict';
    var mi = angular.module('routes').config(configFn);

    function configFn ($stateProvider) {
        var state = {
            url: '/user/:id',
            templateUrl: 'app/states/user/user.tpl.html',
            controller: 'userCtrl',
            controllerAs: 'uCtrl'
        };

        $stateProvider.state('user', state);
    }

}(window.angular));