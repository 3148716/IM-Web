$(function(){
      var element = $('#logo');
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          element.fadeOut();
        }
        else {
          element.fadeIn();
        }
       });
    });
//logo fade out



$("button1").click(function() {
    $('html,body').animate({
        scrollTop: $("#kang_details").offset().top},
        'slow');
});

$("button2").click(function() {
    $('html,body').animate({
        scrollTop: $("#hayoun_details").offset().top},
        'slow');
});

$("button3").click(function() {
    $('html,body').animate({
        scrollTop: $("#sahre_details").offset().top},
        'slow');
});

$("button4").click(function() {
    $('html,body').animate({
        scrollTop: $("#krishnamurthy_details").offset().top},
        'slow');
});
//scroll to paragraphs on click



$(".link").hover(function(){
	$(this).css("color","#ffff00")
})

$(".link").hover(function(){
	$(this).css("font-size","150%")
})

$(".link").hover(function(){
	$(this).css("line-height","24px")
})
//in-paragraph link transitions



$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
//start at top at refresh




$("button5").click(function() {
    $('html,body').animate({
        scrollTop: $("span").offset().top},
        'slow');
});
//scroll to top on click



$(document).ready( function() {
    $(".up").hide();
    var topOfSpan = $("span").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfSpan) {
            $(".up").show();
        }
    });
});