describe('testingController', function () {
   'use strict';

    var controller,
        $scope;

    beforeEach(module('testApp'));

    beforeEach(inject(function ($controller) {
        $scope = {};
        controller = $controller('testingController', {
            $scope: $scope
        })
    }));

    it('should exist', function () {
        expect(controller).toBeDefined();
    })
});