// Write your Javascript code.
$(document).ready(function(){
    $("#deployed").fadeIn(350, function()
    {
        $("#repos").fadeIn(350, function(){});
    });

    $("#headerlinks a").hover(function()
    {
        $(this).css("color", "rgb(4, 114, 41)");
    }, function()
    {
        $(this).css("color", "black");
    });
});