//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js



//= partials/parallax.js


//init owl carousel


$(document).ready(function($) {

	//paralax section
    $('.main-section').parallax({imageSrc: '/img/bg.png'});
    $('.custom-section').parallax({imageSrc: '/img/block.jpg'});


    //resize paralax when content so large
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  jQuery(window).trigger('resize').trigger('scroll');
	})
});
