// LandingPageController

(function () {

    var app = angular.module("SocialViewer");
    var ChildController = function ($scope, $log) {
        var vm = this;


       /* vm.onClickMeCallbackFromParent = function(number1, number2) {
            vm.onClickMeCallback({number1: number1, number2: number2});
        };*/

    };

    app.controller("ChildController", ChildController);

}());