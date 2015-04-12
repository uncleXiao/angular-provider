angular.module('uncleApp', []).controller("mainCtrl", ['$anchorScrollProvider',
        function ($anchorScrollProvider) {
            $anchorScrollProvider.disableAutoScrolling();//试试禁用自动滑动
            //虾米？ 这也报错！
        }]);


/*

    .config(['$anchorScrollProvider',
        function ($anchorScrollProvider) {
            $anchorScrollProvider.disableAutoScrolling();//试试禁用自动滑动
            //不禁用的话就要点两下才有反应，很麻烦，所以喵了个咪！
        }])
    .controller("mainCtrl", ['$scope','$location','$anchorScroll',
        function ($scope,$location,$anchorScroll) {
            console.log("I am mainCtrl");
            $scope.toSingleton = function () {
                if ($location.hash() !== 'singleton') {
                    $location.hash('singleton');
                } else {
                    $anchorScroll();
                }
            };
        }]);

*/
