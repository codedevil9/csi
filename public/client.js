$(function() {
    $('#myButton').click(function() {
        $.get('/token', function(data) {
            $('#counter').html('Je sessie token is: ' + data.sessionToken);
        });
    });
});