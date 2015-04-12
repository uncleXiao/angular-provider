angular.module('uncleApp', [])
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.useApplyAsync(false);
    }])
    .controller("mainCtrl", function ($http, $scope) {
        $scope.getData = function () {
            $http.get("http://localhost:8888/package.json").success(function (data) {
                console.log("data=" + angular.toJson(data));
                $scope.package = data;
            }).error(function (error) {
                alert(error);
            });
        };
    });

