// // $("h1").css("color", "red");

//todo: add css class topage
$("h1").addClass("big-title margin-50");

// todo: remove the class
// $("h1").removeClass("big-title");

// $("button").html("<em> Hey </em>");


//todo: add event listener

$("h1").click(function() {
    $("h1").css("color", "purple")
});

//using js
/*for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "purple";
    });
}
*/
//using jQuery
$("button").click(function() {
    $("h1").css("color", "purple");
})

$("input").keypress(function(event) {
    $("h1").text(event.key);
})


$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})

//TODO: animation using jquery
$("button").on("click", function() {
    // $("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").slideToggle();

    // $("h1").animate({
    //     //add new css rules which have value
    //     opacity: 0.5
    // });

    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});