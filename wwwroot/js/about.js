// Write your Javascript code.
$(document).ready(function(){
    $("#about").fadeIn(500, function(){});

    $("#headerlinks a").hover(function()
    {
        $(this).css("color", "rgb(4, 114, 41)");
    }, function()
    {
        $(this).css("color", "black");
    });
});