$("h1").addClass("title");
$("button").html("<em>prem</em>");
$("a").attr("href","https://www.yahoo.com");
$("button").click(function()
{
    $("h1").css("color","purple");
});
$("h1").on("mouseover click",function(event){
    $(this).css("color","brown");
});
$("h1").after("<button>new</button>");
$("button").click(function()
{
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});