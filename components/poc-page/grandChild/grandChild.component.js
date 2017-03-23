
angular.module('SocialViewer')
    .component('grandChildComponent', {
        bindings: {
            onClickMeCallback: '&'
        },
        require: {
          parent: '^childComponent'
        },
        controller: 'GrandChildController',
        controllerAs: 'vm',
        templateUrl: '/components/poc-page/grandChild/grandChild.tpl.html'
    });
