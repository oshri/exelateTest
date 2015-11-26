(function  (angular) {
    'use strict';
    var mi = angular.module('routes').config(configFn);

    function configFn ($stateProvider) {
        var state = {
            url: '/albums',
            templateUrl: 'app/states/user/albums/albums.tpl.html',
            controller: 'albumsCtrl',
            controllerAs: 'albCtrl'
        };

        $stateProvider.state('user.albums', state);
    }

}(window.angular));