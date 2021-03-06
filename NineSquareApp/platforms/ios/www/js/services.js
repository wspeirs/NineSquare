angular.module('starter.services', ["firebase"])
/**
 * A simple example service that returns some data.
 */
.factory('Events', function($firebase) {
  // Might use a resource here that returns a JSON array
  
  var ref = new Firebase("https://intense-fire-8983.firebaseio.com/events/")
  ref.auth("6z1mTw1RkfdwlLdXLHRoqyQy7JDfCdEWAPZuJo9R");

  return {
    all: function() {
      return $firebase(ref);
    },
    get: function(eventId) {
      // Simple index lookup
      return events[eventId];
    }
  }
  
});
