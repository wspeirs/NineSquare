'use strict';

/**
 * @ngdoc function
 * @name nineSquareApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nineSquareApp
 */
angular.module('nineSquareApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
