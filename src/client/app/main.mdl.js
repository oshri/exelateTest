(function(angular){
    'use strict';
               

    function configFn (cfpLoadingBarProvider, $logProvider){
              
        $logProvider.debugEnabled(false);

        cfpLoadingBarProvider.includeSpinner = false;
    }

    function runFn ($rootScope, $log){
        

    }

    var mi = angular.module('exelate',[
                        'ngSanitize',
                        'ui.router',
                        'services',
                        'controllers',
                        'routes',
                        'components',
                        'angular-loading-bar',
                        'ngAnimate',
                        'ngMaterial'
                        ])
                    .config(configFn)
                    .run(runFn);

})(window.angular);