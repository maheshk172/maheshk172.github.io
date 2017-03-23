    var app = angular.module("SocialViewer");

    var GitHubViewerController = function($http, $log, $interval, GithubService) {

        var vm = this;
        vm.repos = [];
        vm.userName = "angular"; //setting default user name
        vm.message = "GIT HUB Demo Application";

        var OnUserSuccess = function(response) {
            vm.person = response;
            vm.person.imageurl =
                "http://www.gravatar.com/avatar/" + response.gravatar_id;

            var promise1 = GithubService.GetRepos(vm.person);
            promise1.then(OnRepos, OnError);
        };

        var OnError = function(error) {
            console.log("Error fetching data...." + error);
            vm.error = error;
        };

        var OnRepos = function(response) {
            $log.info("repos found.... pulling data out");
            vm.repos = response;
        };
 
        vm.searchUser = function(userName) {
            var promise = GithubService.GetUser(userName);
            promise.then(OnUserSuccess, OnError);
        };
    };

    app.controller("GitHubViewerController", GitHubViewerController);
