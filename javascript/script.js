$(document).ready (function() {

    $(".page").append('<img class="bg" src="images/sunset.jpg" alt="bg">').hide().fadeIn(1000);

    $('.title').append("Local Weather").hide().fadeTo(1500, 1);

    navigator.geolocation.getCurrentPosition(function (position) {
        var location = position.coords.latitude + ',' + position.coords.longitude;
        $.ajax({
            url: "http://api.wunderground.com/api/dfc805df5d6fe1d4/geolookup/conditions/q/" + location + ".json",
            dataType: "jsonp",
            success: function (parsed_json) {
                var city = parsed_json['location']['city'];
                var temp_f = parsed_json['current_observation']['temp_f'];
                //var image = parsed_json['current_observation']['icon_url'];
                var icondesc = parsed_json['current_observation']['icon'];
                var image = "http://icons.wxug.com/i/c/i/" + icondesc + ".gif";
                
                $('.weather').append(temp_f + "&deg; F").hide().fadeTo(1500, 1);
                $('.icon').append("B").hide().fadeTo(1500, 1);
                //$('#weather_icon').attr("src", image).hide().fadeTo(1500, 1);
                // $('.icon_desc').append(icondesc);
                $('.city').append(city).hide().fadeTo(1500, 1);
            }
        });
        
    });
});

