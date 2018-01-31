// Write your Javascript code.
$(document).ready(function(){
    $("#about, #profpic").fadeIn(500, function()
    {
        $("#dojodachi").fadeIn(200, function()
        {
            $("#profprofile").fadeIn(200, function()
            {
                $("#friendbook").fadeIn(200, function()
                {
                });
            });
        });
    });

    $("#headerlinks a").hover(function()
    {
        $(this).css("color", "rgb(4, 114, 41)");
    }, function()
    {
        $(this).css("color", "black");
    });

    $("#dojodachibutton").click(function()
    {
        openTab("https://awareqwxdojodachi.azurewebsites.net/");
    });
    $("#dojodachicodebutton").click(function()
    {
        openTab("https://github.com/Awareqwx/CSharp-Dojodachi-Assignment");
    });

    $("#profprofilebutton").click(function()
    {
        openTab("http://13.58.239.239/");
    });
    $("#profprofilecodebutton").click(function()
    {
        openTab("https://github.com/Awareqwx/CSharp-PNSN-Exam");
    });

    $("#friendbookbutton").click(function()
    {
        openTab("http://awareqwx.pythonanywhere.com/main/");
    });
    $("#friendbookcodebutton").click(function()
    {
        openTab("https://github.com/Awareqwx/Django-FBPD-Exam");
    });
});

function openTab(url)
{
    var win = window.open(url, '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Please allow popups for this website');
    }
}