angular.module('uncleApp', [])
    .config(['$logProvider', function ($logProvider) {
   /*     $logProvider.debugEnabled(false);*/
    }])
    .controller("mainCtrl", function ($scope, $log) {
        $scope.saySomething = function () {
            $log.log("Hi,I am log");
            $log.debug("Hi,I am debug");
            console.debug("原生的控制台");
            $log.info("Hi,I am info");
            $log.warn("Hi,I am warn");
            $log.error("Hi,I am error");
        };
    });

