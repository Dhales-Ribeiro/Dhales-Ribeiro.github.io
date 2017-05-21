/**
 * Created by dhales on 30/12/16.
 */
'use strict';

application.controller('applicationController', function ($scope, $mdSidenav) {
    particlesJS.load('particles-js', './resources/assets/particlesjs-config.json', function() {
    });
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        }
    }
    
})