(function() {

    var googleTranslator = function($http) {

        var translate = function(sourceText, sourceLang, targetLang) {

            sourceText = sourceText.replace(/\n/g, '\\n');
            var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
            
            var request = {
                method: 'get',
                url: url,
                transformResponse: [function(data) {
                    // Do whatever you want!
                    return data;
                }]
            };

            return $http(request).then(function(response) {
                if (response.data !== "") {
                    var data = eval(response.data)[0][0][0];
                    data = data.replace(/(\\\s)/g, '\\');
                    data = data.replace(/\\n/g, '<br />');
                    return data;
                }

            }, function(error) {
                return error;
            });

            //sample from https://ctrlq.org/code/19909-google-translate-api    
        };


        return {
            translate: translate
        };
    };

    //Just created reference of the service 
    var module = angular.module("SocialViewer");
    module.factory("TranslatorService", googleTranslator);

}());