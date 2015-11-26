(function  (angular) {
    'use strict';
    var mi = angular.module('routes').config(configFn);

    function configFn ($stateProvider) {
        var state = {
            url: '/users',
            templateUrl: 'app/states/users/users.tpl.html',
            controller: 'usersCtrl',
            controllerAs: 'usCtrl'
        };

        $stateProvider.state('users', state);
    }

}(window.angular));