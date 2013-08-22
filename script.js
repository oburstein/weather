$(document).ready (function() {
    navigator.geolocation.getCurrentPosition(function (position) {
        var location = position.coords.latitude + ',' + position.coords.longitude;
        $.ajax({
            url: "http://api.wunderground.com/api/dfc805df5d6fe1d4/geolookup/conditions/q/" + location + ".json",
            dataType: "jsonp",
            success: function (parsed_json) {
                var city = parsed_json['location']['city'];
                var temp_f = parsed_json['current_observation']['temp_f'];
                var image = parsed_json['current_observation']['icon_url'];
                $('.weather').append(temp_f + "&deg; F");

                $('#weather_icon').attr("src", image);
                $('.city').append(city);
            }
        });
        
    });
});
