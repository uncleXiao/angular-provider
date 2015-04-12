angular.module('uncleApp', [])
    .controller("mainCtrl", function ($scope,$locale) {
        $scope.nowTime = new Date().getTime();
        console.log("locale : " +$locale.id);
    });

