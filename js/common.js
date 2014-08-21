head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });
    $('#form1').validate();
    $('#form2').validate();

  //add css class to cycle slider item, when clicking
  jQuery(document).ready(function($){
    $('.slider .cycle-slide').click(function(){
        var index = $('.slider').data('cycle.API').getSlideIndex(this);
        $('.cycle-slide-active').removeClass('cycle-slide-active');
        $(this).addClass('cycle-slide-active');
    });
  });


    //yet another scrolling with hightlight effect (works for me)
//each marker link would be with section class
//.page is class of page without top menu )
// Navigation
    $('.js-nav a').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 20
        }, 500, 'swing', function () {
            // window.location.hash = target;
        });
    });

    function navScroll(){
        $('.section').each(function(){
            var pos = $(this).offset().top;
            var id = $(this).attr('id');
            var top = ($('.page').offset().top - 80);
            if( $(window).scrollTop() >= (pos - 79)){
                $('.js-nav li').removeClass('is-active');
                $('[href = #'+id+']').parent().addClass('is-active');
            }
            if($(window).scrollTop() < top){
                $('.js-nav li').removeClass('is-active');
            }
        });
    }

    $(window).scroll(function() {
        navScroll();
    });





    (function ($) {
        // Counter

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;

        var now = new Date();
        var timer;
        var startDay = 4;
        var start = new Date(2013, 1, startDay, 23, 59, 59);
        var distance = now - start;
        var day = Math.floor(distance / _day);
        day = day - Math.floor(day / 3) * 3;
        var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + day, 23, 59, 59);

        function showRemaining() {
            var now = new Date();
            now.setMinutes(1);
            var distance = end - now;
            var days = Math.floor(distance / _day);
            if (days < 10) days = '0' + days;
            var hours = Math.floor((distance % _day) / _hour);
            if (hours < 10) hours = '0' + hours;
            var minutes = Math.floor((distance % _hour) / _minute);
            if (minutes < 10) minutes = '0' + minutes;
            var seconds = Math.floor((distance % _minute) / _second);
            if (seconds < 10) seconds = '0' + seconds;

//        $(".count_line .d").html(days);
            $(".count_line .h").html(hours);
            $(".count_line .m").html(minutes);
            $(".count_line .s").html(seconds);
        }
        showRemaining();
        timer = setInterval(showRemaining, 1000);

    })(jQuery);
	//console.log($('body').html());
});