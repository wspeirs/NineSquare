angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
  $scope.comment = "";
  $scope.addCommpent = function() {
    $scope.addComment($stateParams.eventId);
  };
})

.controller('EventCreateCtrl', function($scope, $window, Events) {
  $scope.event = Events.new();
  $scope.set = function(event) {
    Events.set(event).then(function(ref) {
        $window.location.href = '#/tab/events/detail/' + ref.name();
    });;
  };
})

.controller('AccountCtrl', function($scope) {
});
