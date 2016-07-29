'use strict';


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get("/fortune",function(result){
        $('#fortune-text').html(result);
        // Alternative way to accomplish the same as .html:
        // $('#fortune-text').empty();
        // $('#fortune-text').append(result);
    });
    
    }

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    $.get(url, function(result){
           $('#weather-info').html(result.forecast);    
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


