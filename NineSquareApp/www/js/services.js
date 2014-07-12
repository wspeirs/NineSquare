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
      return $firebase(ref).$child(eventId);
    },
    set: function(event) {
        //console.log("Event:", event);
        return $firebase(ref).$add(event);
    },
    new: function() {
        var event = {
            name: '',
            comments: {
            }
        };
        navigator.geolocation.getCurrentPosition(function(position) {
            event.latitude = position.coords.latitude;
            event.longitude = position.coords.longitude;
        });
        return event;
    }
  }

});
