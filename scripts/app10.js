angular.module('uncleApp', [])
    .controller("mainCtrl", function ($scope, $sce,$http) {
        $scope.getPicture = function () {
            $http.get("http://localhost:8888/data.json").success(function (data) {
                $scope.myPic = data;
                $scope.myPic.img = $sce.trustAsHtml($scope.myPic.img);
            }).error(function (error) {
                console.error(error);
            });
        }
    });

