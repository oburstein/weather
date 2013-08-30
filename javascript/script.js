$(document).ready (function() {
    var temp_f;
    var temp_c;

    $('#fahrenheit').addClass('active');

    $('#fahrenheit').click(function() {
        $('.weather').replaceWith('<h3 class="weather">'+ temp_f +'&deg;F</h3>');
        $('#fahrenheit').addClass('active');
        $('#celsius').removeClass('active');
    });
    $('#celsius').click(function() {
        $('.weather').replaceWith('<h3 class="weather">'+ temp_c +'&deg;C</h3>');
        $('#celsius').addClass('active');
        $('#fahrenheit').removeClass('active');
    });

    $(".page").append('<img class="bg" src="images/sunset.jpg" alt="bg">').hide().fadeIn(1500);
    $('.title').append("Local Weather").hide().fadeTo(1500, 1);

    navigator.geolocation.getCurrentPosition(function(position) {
        var location = position.coords.latitude + ',' + position.coords.longitude;
        $.ajax({
            url: "http://api.wunderground.com/api/dfc805df5d6fe1d4/geolookup/conditions/q/" + location + ".json",
            dataType: "jsonp",
            timeout: 10000,
            success: function (parsed_json) {
                var city = parsed_json.location.city;
                var state = parsed_json.location.state;
                temp_f = parsed_json.current_observation.temp_f;
                temp_c = parsed_json.current_observation.temp_c;
                var icondesc = chooseIcon(parsed_json.current_observation.icon);
                $('.weather').append(temp_f +"&deg;F").hide().fadeTo(1500, 1);
                $('.icon').append(icondesc).hide().fadeTo(1500, 1);
                $('.city').append(city + ", " + state).hide().fadeTo(1500, 1);
            }
        }); 
    });
});

function lockScroll() {
    event.preventDefault() ;
}

function chooseIcon(conditions) {
    switch(conditions) {
    case 'clear':        return "B";     
    case 'cloudy':       return "N";      
    case 'flurries':     return "U";      
    case 'fog':          return "L";      
    case 'hazy':         return "M";      
    case 'mostlycloudy': return "H";      
    case 'mostlysunny':  return "H";  
    case 'partlycloudy': return "H";  
    case 'partlysunny':  return "H";  
    case 'rain':         return "R";  
    case 'snow':         return "X";  
    case 'sunny':        return "B";  
    case 'tstorms':      return "0";                        
    default:             return ")";
    }
}
