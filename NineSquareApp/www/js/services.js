angular.module('starter.services', ["firebase", 'google-maps'])
/**
 * A simple example service that returns some data.
 */
.factory('Events', function($firebase, $http) {
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

            var request = $http({
                method: "get",
                url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
                    + event.latitude + ',' + event.longitude
                    + '&key=AIzaSyA1rCyIKQx6UgNgBv7_ZqGAQyBUIvNiO0U',
            });
 
            request.then(function(data) {
                console.log(data.data);
                event.location = data.data.results[0].formatted_address;
            }, function(err) {
                console.log(err);
            });
 
        });
        return event;
    },
    newComment: function() {
        return {
            name: '',
            text: '',
        };
    },
    addComment: function(event, comment) {
        return event.$child('comments').$add(comment);
    },
  }

});
