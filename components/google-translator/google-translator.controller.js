    var app = angular.module("SocialViewer");

    var GoogleTranslatorController = function($http, $log, $interval, TranslatorService, $sce) {

        var vm = this;
        vm.TranslatorService = TranslatorService;
        vm.text = '';
        vm.translatedText = '';
        vm.sourceLang = 'da';
        
        var OnError = function(error) {
            console.log("Error fetching data...." + error);
            vm.error = error;
        };

        var onTranslateSuccess = function(response) {
            if(response) {
                vm.translatedText = $sce.trustAsHtml(response);                
            }
        };

        vm.translate = function(text) {
            var targetLang = 'en';

            var promise = vm.TranslatorService.translate(text, vm.sourceLang, targetLang);
            promise.then(onTranslateSuccess, OnError);  
        }
    };

    app.controller("GoogleTranslatorController", GoogleTranslatorController);
