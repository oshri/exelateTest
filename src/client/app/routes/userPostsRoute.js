(function  (angular) {
    'use strict';
    var mi = angular.module('routes').config(configFn);

    function configFn ($stateProvider) {
        var state = {
            url: '/posts',
            templateUrl: 'app/states/user/posts/posts.tpl.html',
            controller: 'postsCtrl',
            controllerAs: 'posCtrl'
        };

        $stateProvider.state('user.posts', state);
    }

}(window.angular));