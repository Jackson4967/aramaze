//mobile menu show/hide
$(".Toggler-module--toggler--1akcs").click(function(){
  if($(this).hasClass("Header-module--toggler--3GX5l Toggler-module--active--1B15Q")){
      $(this).removeClass("Header-module--toggler--3GX5l Toggler-module--active--1B15Q");
      $(".Header-module--navbar--1GFQv").removeClass("Header-module--show--2ckGc");
  }else{
      $(this).addClass("Header-module--toggler--3GX5l Toggler-module--active--1B15Q");
      $(".Header-module--navbar--1GFQv").addClass("Header-module--show--2ckGc");
  }
})

if ( $('#scroll-container').length ) {
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 20) {

            $('#scroll-container > div').each(function(i) {
                if ($(this).position().top <= windscroll + 2) {
                    $('nav .nav-link.Header-module--active--s-raw').removeClass('Header-module--active--s-raw');
                    $('nav .nav-link').eq(i).addClass('Header-module--active--s-raw');
                }
            });

        } else {
            $('nav .nav-link.Header-module--active--s-raw').removeClass('Header-module--active--s-raw');
        }

    }).scroll();

    $('nav a.nav-link').click(function (e) {
        var linkHref = $(this).attr("href");
        var idElement = linkHref.substr(linkHref.indexOf("#"));
        $('html, body').animate({
            scrollTop: $(idElement).offset().top
        }, 1000);
        return false;
    });
}

$(function(){
    $( ".ContactUsForm-module--container--2oBYB" ).submit( function () {
        alert("Sorry your request don't send by technical issue.");
        return false;
    });
});
