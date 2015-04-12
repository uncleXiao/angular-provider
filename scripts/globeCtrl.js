angular.module('globeApp', [])
    .config(['$controllerProvider', function ($controllerProvider) {
        $controllerProvider.allowGlobals();//变成全局的控制器
    }])
    .controller("globeCtrl", ['$scope', function ($scope) {
        $scope.cities = ["New York", "London", "New Zealand", "Los Angeles", "New Jersey"];
    }]);

