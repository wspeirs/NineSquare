angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('EventCreateCtrl', function($scope, $window, Friends) {
  $scope.event = Friends.new();
  $scope.set = function(event) {
    Friends.set(event);
    $window.location.href = '#/tab/event/' + event.name;
  };
})

.controller('AccountCtrl', function($scope) {
});
