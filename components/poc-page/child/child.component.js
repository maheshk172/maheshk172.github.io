
angular.module('SocialViewer')
    .component('childComponent', {
        bindings: {
            onClickMeCallback: '&'
        },
        controller: 'ChildController',
        controllerAs: 'vm',
        templateUrl: '/components/poc-page/child/child.tpl.html'
    });
