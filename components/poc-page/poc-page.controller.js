// LandingPageController

(function () {

    var app = angular.module("SocialViewer");
    var PocPageController = function ($scope, $log) {
        var vm = this;

        vm.clickMe = function (number1, number2) {
            console.log('Number1 :' + number1 + ', Number2: ' + number2);
        };

    };

    app.controller("PocPageController", PocPageController);

}());