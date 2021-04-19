$(function () {
 
    // dropdow hover droped
  $('ul.navbar-nav li.dropdown').hover(function() {
    if ($(this).hasClass("hovtop")){
  $(this).find('.dropdown-menu').css({"top":"auto", "bottom":"100%"});
    }
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
$(this).find('.dropdown-menu').css({"top":"100%", "bottom":"auto"});
$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


// active menu item

$(".dropdown-menu").hover(function () {
    $(this).prev().addClass("active");
        
    }, function () {
        $(".nav-link").removeClass("active")
    }
);

// car icon hover
$(".carico").hover(function () {
     let hover = $(this).children().find("img").data('hover');
     
    $(this).children().find("img").attr('src', hover);
  }, function () {
     let src = $(this).children().find("img").data('src');
     $(this).children().find("img").attr('src', src);
  }
);

$(".playlist").click(function (e) { 
  e.preventDefault();
  $(this).parent().find(".active").removeClass("active");
  $(this).addClass("active");

  $("#play").fadeIn("fast");

  let src =  $(this).data('src');

  $("#myvideo").attr('src', src);

});

$("#play").click(function (e) { 
  e.preventDefault();
  $(this).fadeOut("fast");
  $("#myvideo").get(0).play();
  $("#myvideo").prop("controls", true);

});

// end ready
});