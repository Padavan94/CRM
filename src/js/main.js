
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js


//= partials/parallax.js
//= partials/owl.carousel.js

//init owl carousel


$(document).ready(function($) {
	

	//paralax section
    $('.main-section').parallax({imageSrc: '/img/bg.png'});
    $('.custom-section').parallax({imageSrc: '/img/block.jpg'});


    //resize paralax when content so large
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  jQuery(window).trigger('resize').trigger('scroll');
	})


	//init owl carousels
	 initialize_owl($('#owl1'));

	 	var str = $(".layout__info").data("arr");
	 	var jsonObj = $.parseJSON('[' + str + ']');
	 	initTabs(jsonObj);

	//counter

	$(".counter .btn-minus").click(function(event) {
		event.preventDefault();
		var val = $(this).parent().find("input").val();
		if(+val < 1){
			return false;
		} else {
			$(this).parent().find("input").val(+val - 1);
		}
	});
	$(".counter .btn-plus").click(function(event) {
		event.preventDefault();
		var val = $(this).parent().find("input").val();
		$(this).parent().find("input").val(+val + 1);
	});

});


function initTabs(array) {
	array.forEach(function(item, i, arr) {
		$('a[href="#'+item.tab+'"]').on('shown.bs.tab', function () {
        	initialize_owl($('#'+item.carousel));
	    }).on('hide.bs.tab', function () {
	        destroy_owl($('#'+item.carousel));
	    });
	});
}

function initialize_owl(el) {
    el.owlCarousel({
        loop: true,
        margin: 22,
        nav: true,
        responsiveClass: true,
        navText: [null,null],
        loop: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 10,
            }
        }
    });
}

function destroy_owl(el) {
    el.data('owlCarousel').trigger('destroy.owl.carousel');
}


