angular.module('uncleApp', [])
    .config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol("肖肖");
        $interpolateProvider.endSymbol("会会");
    }])
    .controller("mainCtrl", function ($scope) {
        $scope.hello = "有钱就是任性";
    });

