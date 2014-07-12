'use strict';

/**
 * @ngdoc function
 * @name nineSquareApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nineSquareApp
 */
angular.module('nineSquareApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
