jQuery(function ($) {

//    var $document = jQuery(document),
//            $topMenu = $('.top-menu'),
//            className = 'fixed';
//
//    $document.scroll(function () {
//        $topMenu.toggleClass(className, $document.scrollTop() >= 50);
//    });
//
//
//    $document.ready(function () {
//        $topMenu.toggleClass(className, $document.scrollTop() >= 50);
//    });


$('.left-toggle').click(function(e){
    
    e.preventDefault();
    $('.left-menu').toggleClass('active');
    $(this).find('i').toggleClass('fa-angle-right').toggleClass('fa-angle-left');
});


$('table tr').hover(function(){
    
            $('table tr').removeClass('border-bottom-green');
            $(this).prev('tr').addClass('border-bottom-green');
    
});

$('table').mouseleave(function(){
    
            $('table tr').removeClass('border-bottom-green');
    
});



});

