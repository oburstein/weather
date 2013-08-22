jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/dfc805df5d6fe1d4/geolookup/conditions/q/IA/Seattle.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  $('.weather').append("Current temperature in " + location + " is: " + temp_f);
  }
  });
});
