(function () {
    'use strict';

    angular.module('testApp', []);

    angular.module('testApp')
        .controller('testingController', function ($scope) {
            $scope.val = true;
            var count = 0;

            if ($scope.val) {
                count++
            }

            if ($scope.val) {
                count++
            }

            if ($scope.val) {
                count++
            }

            function test() {
                return true;
            }
    });
})();