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
                var icondesc = chooseIcon(parsed_json['current_observation']['icon']);
                
                
                $('.weather').append(temp_f + "&deg; F").hide().fadeTo(1500, 1);
                $('.icon').append(icondesc).hide().fadeTo(1500, 1);
                //var image = "http://icons.wxug.com/i/c/i/" + icondesc + ".gif";
                //$('#weather_icon').attr("src", image).hide().fadeTo(1500, 1);
                // $('.icon_desc').append(icondesc);
                $('.city').append(city).hide().fadeTo(1500, 1);
            }
        });
        
    });
});

function chooseIcon(conditions) {
    switch(conditions) {
    case 'clear':
      return "B";     
      break;
    case 'cloudy':
      return "N";      
      break;
    case 'flurries':
      return "U";      
      break;
    case 'fog':
      return "L";      
      break;
    case 'hazy':
      return "M";      
      break;
    case 'mostlycloudy':
      return "H";      
      break;
    case 'mostlysunny':
      return "H";  
      break;
    case 'partlycloudy': //same as mostly sunny
      return "H";  
      break;
    case 'partlysunny': //same as mostly cloudy
      return "H";  
      break;
    case 'rain':
      return "R";  
      break;
    case 'snow':
      return "X";  
      break;
    case 'sunny': //same as mostly cloudy
      return "B";  
      break;
    case 'tstorms':
      return "0";  
      break;                        
    default:
        return ")";
    }
}