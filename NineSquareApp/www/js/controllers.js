angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
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
