// This is a simple javascript code that is responsible for the button on the html site and when you press the button
// it will display "Je sessie token is 'sessiontoken'"

$(function() {
    $('#myButton').click(function() {
        $.get('/token', function(data) {
            $('#counter').html('Je sessie token is: ' + data.sessionToken);
        });
    });
});
