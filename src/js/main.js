//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap-sass/assets/javascripts/bootstrap.js



//= partials/parallax.js


//init owl carousel


$(document).ready(function($) {
    $('.main-section').parallax({imageSrc: '/img/bg.png'});
    $('.custom-section').parallax({imageSrc: '/img/block.jpg'});
});
