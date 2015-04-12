angular.module('uncleApp', ['ngAnimate', 'globeApp'])
    .config(['$anchorScrollProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider', '$interpolateProvider', '$logProvider',
        function ($anchorScrollProvider, $compileProvider, $filterProvider, $provide, $httpProvider, $interpolateProvider, $logProvider) {
            $anchorScrollProvider.disableAutoScrolling();//$location.hash()改变的时候，禁止自动滚动
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);//接触安全机制
            $compileProvider.debugInfoEnabled(true);//ng-bind这些东西都不显示了，适用于生产环境


            $provide.value('harmony', function (harmony) {
                return harmony.replace(/['肖会']/, '**');
            });
            $filterProvider.register('harmony', function (harmony) {
                // return the filter function which uses the greet service
                // to generate salutation
                return function (text) {
                    // filters need to be forgiving so check input validity
                    return text && harmony(text) || text;
                };
            });

            $httpProvider.useApplyAsync(true);

            /* $interpolateProvider.startSymbol("肖肖");
             $interpolateProvider.endSymbol("会会");*/

            $logProvider.debugEnabled(false);
        }])
    .controller("mainCtrl", ['$scope', '$anchorScroll', '$location', '$http', '$log', '$sce',
        function ($scope, $anchorScroll, $location, $http, $log, $sce) {

            $scope.toSingleton = function () {
                if ($location.hash() !== 'singleton') {
                    $location.hash('singleton');
                } else {
                    $anchorScroll();
                }
            };


            $scope.cities = ["佛山", "佛山无影脚", "广州", "永川", "永州", "上沙", "上海", "上梅林"];
            $scope.cat = "data:image/jpeg;base64,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";

            $scope.package = "nothing";
            $scope.getData = function () {
                $http.get("http://localhost:8888/package.json").success(function (data) {
                    console.log("data=" + angular.toJson(data));
                    $scope.package = data;
                }).error(function (error) {
                    alert(error);
                });
            };

            $scope.hello = "有钱就是任性";

            $scope.saySomething = function () {
                $log.log("Hi,I am log");
                $log.debug("Hi,I am debug");
                //console.debug("原生的控制台");
                $log.info("Hi,I am info");
                $log.warn("Hi,I am warn");
                $log.error("Hi,I am error");
            };


            $scope.getPicture = function () {
                $http.get("http://localhost:8888/data.json").success(function (data) {
                    $scope.myPic = data;
                    $scope.myPic.img = $sce.trustAsHtml($scope.myPic.img);
                }).error(function (error) {
                    console.error(error);
                });
            }


        }]);

