//infinite vertical scroll
// $('document').ready(function() {
//              $(document).scroll(function(){
//              if(document.documentElement.clientHeight + 
//              $(document).scrollTop() >= document.body.offsetHeight)$(document).scrollTop(0);
//              });
//           }); 



$(document).scroll(function(){
    r = $(document).scrollTop()/2;


    $("#station").css({
        "width":r,
        "height":r
    })

    if ($(document).scrollTop() > 3000) {
    	$("#station").fadeOut(200);
    } else {
    	$("#station").fadeIn(200);
    }



    $("#moon").css({
        "width":r-1750,
        "height":r-1750
    })

    if ($(document).scrollTop() > 6000) {
    	$("#moon").fadeOut(200);
    } else {
    	$("#moon").fadeIn(200);
    }



    $("#saturn").css({
        "width":r-3250,
        "height":r-3250
    })

    if ($(document).scrollTop() > 10000) {
    	$("#saturn").fadeOut(200);
    } else {
    	$("#saturn").fadeIn(200);
    }


    $("#andromeda").css({
        "width":r-5250,
        "height":r-5250
    })

    if ($(document).scrollTop() > 14000) {
    	$("#andromeda").fadeOut(200);
    } else {
    	$("#andromeda").fadeIn(200);
    }




    $("#space").css({
        "width":r/25+2000,
        "height":r/25+1000
    })

});


$(document).scroll(function() {
    console.log($(document).scrollTop());
});