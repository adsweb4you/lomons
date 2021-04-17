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


// aboutslider active circle

// $("[data-target='#aboutslider']").click(function (e) { 
//     e.preventDefault();
//     $(this).siblings().removeClass("active");
//     $(this).addClass("active")
    
// });

 

// end ready
});