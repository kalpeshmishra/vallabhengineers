$(document).ready(function(){
	$('.bannerSlider').bxSlider({
	pager: true,
	controls:false,
	auto:true
	});

	$('.productSlider').bxSlider({
	pager: false,
	maxSlides:3,
	minSlides:1,
	slideWidth:260,
	slideMargin:70,
	moveSlides:1,
	infiniteLoop:true,
	auto:true
	});
	
	$('.bx-pager').hide();
	$('.bannerSection').hover(function(){
		$('.bx-pager').toggle();
	});
	
	$('.submenu a').hover(function(){
		$('.toparrow').css({'background':'url(images/arrow-down.png) no-repeat center bottom'})
		$('.openMenu').css({'background':'#fff', 'color':'#63a15e'})		
	},function(){
		$('.toparrow').css({'background':'url(images/white-arrow-down.png) no-repeat center bottom'})
		$('.openMenu').css({'background':'#014a8f', 'color':'#fff'})
	});
	
	$('.clickleftMenu').click(function(){
		var $slider = $('.leftSide');
		$slider.animate({left: parseInt($slider.css('left')) == -240 ? 0 : -240});
	});
	
	/*$('.submenu a').hover(function(){
		$(this).parent().parent().parent().children('.openMenu').css({'color': '#63a15e', 'background': '#fff'});	
	},function(){
		$(this).parent().parent().parent().children('.openMenu').css({'color': '#fff', 'background': '#014a8f'});
	});*/
});


$(window).load( function() {
    $('#container').masonry({
        "itemSelector": ".item",
        "columnWidth": ".grid-sizer",
    });

});