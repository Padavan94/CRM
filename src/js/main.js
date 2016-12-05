
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js
//= ../../bower_components/dropzone/dist/dropzone.js

//= partials/parallax.js
//= partials/owl.carousel.js
//= partials/jquery.magnific-popup.min.js


Dropzone.options.myAwesomeDropzone = { // The camelized version of the ID of the form element

  // The configuration we've talked about above
  autoProcessQueue: false,
  uploadMultiple: true,
  addRemoveLinks: true,
  parallelUploads: 100,
  uploadprogress: true,
  dictDefaultMessage: "Или перетащите файлы сюда",
  clickable: '.drope-popup__add-btn',
  // The setting up of the dropzone
  init: function() {

/*    // First change the button to actually tell Dropzone to process the queue.
    this.element.querySelector("button[type=submit]").addEventListener("click", function(e) {
      // Make sure that the form isn't actually being sent.
      e.preventDefault();
      e.stopPropagation();
      myDropzone.processQueue();
    });*/


    this.on("queuecomplete", function(file) { alert("Added file."); });
    // Listen to the sendingmultiple event. In this case, it's the sendingmultiple event instead
    // of the sending event because uploadMultiple is set to true.
    this.on("sendingmultiple", function() {
      // Gets triggered when the form is actually being sent.
      // Hide the success button or the complete form.
    });
    this.on("successmultiple", function(files, response) {
      // Gets triggered when the files have successfully been sent.
      // Redirect user or notify of success.
    });
    this.on("errormultiple", function(files, response) {
      // Gets triggered when there was an error sending the files.
      // Maybe show form again, and notify user of error
    });
  }

}





$(document).ready(function($) {

$('.gallery-popup').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: '.popup-img', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});


//eto takoi pizdec
/*
$(".step1").click(function(event) {
  event.preventDefault();
  $("#collapseOne").collapse("toggle");
  var offset = 20;
  $('html, body').animate({
        scrollTop: $("#collapseOne").offset().top
    }, 500);
});

$(".step2").click(function(event) {
  event.preventDefault();
  $("#collapseOne").collapse("toggle");
  $("#collapseTwo").collapse("toggle");
  
});


$('#collapseOne').on('shown.bs.collapse', function () {
  $('html, body').animate({
        scrollTop: $("#collapseOne").offset().top
    }, 500);
})

$('#collapseTwo').on('shown.bs.collapse', function () {
  $('html, body').animate({
        scrollTop: $("#collapseTwo").offset().top
    }, 500);
})*/


//konec pizdeca





  $('.change-pass').click(function(event) {
    event.preventDefault();
    $(this).parent().next().slideToggle("slow");
  });

	//add photos
	$('.order__add-btn, .open-popup').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	

	//paralax section
    $('.main-section').parallax({imageSrc: '/img/bg.png'});
    /*$('.custom-section').parallax({imageSrc: '/img/block.jpg'});
*/

    //resize paralax when content so large
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  /*$(window).trigger('resize').trigger('scroll');*/
	})


	//init owl carousels
	 initialize_owl($('#owl0'));

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


	//

});


function initTabs(array) {
  initialize_owl($('#'+array[0].carousel));
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


