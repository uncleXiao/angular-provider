angular.module('uncleApp', [])
    .config(['$provide', '$filterProvider', function ($provide, $filterProvider) {
        $filterProvider.register('harmony', function () {
            return function (text) {
                return text && text.replace(/['擦']/, '**') || text;
            };
        });
    }])
    .controller("mainCtrl", function ($scope) {
        //空空如也！
    });

