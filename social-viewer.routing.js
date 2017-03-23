'use strict';

angular.module('SocialViewer')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                redirectTo: 'socialViewer',
                template: '<ui-view/>'
            })
            .state('socialViewer', {
                url: '/socialViewer',
                redirectTo: 'socialViewer.home',
                template: '<ui-view/>'
            })
            .state('socialViewer.home', {
                url: '/home',
                template: '<social-viewer-landing></social-viewer-landing>'
            })
    })
    .run(function ($rootScope, $log, $state) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState /*,fromParams, options*/) {

                if (toState.redirectTo) {
                    event.preventDefault();
                    $state.go(toState.redirectTo, toParams, {location: 'replace'});
                }

                $log.log('toState : ' + JSON.stringify(toState));
                $log.log('fromState : ' + JSON.stringify(fromState));
            });
    });