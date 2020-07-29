$(document).ready(function() {


  /* SHOW CURSOR IMAGE ON HOVER - EXHIBITIONS*/

    var $exb1 = $('.hover__image--exb-1');
    $exb1.hide();
    $('.exb-1').mousemove(function(e) {
        $exb1.stop(1, 1).fadeIn();
        $('.hover__image--exb-1').offset({
            top: 220 + e.pageY - $exb1.outerHeight(),
            left: 180 + e.pageX - ($exb1.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb1.hide();
    });

    var $exb2 = $('.hover__image--exb-2');
    $exb2.hide();
    $('.exb-2').mousemove(function(e) {
        $exb2.stop(1, 1).fadeIn();
        $('.hover__image--exb-2').offset({
            top: 220 + e.pageY - $exb2.outerHeight(),
            left: 180 + e.pageX - ($exb2.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb2.hide();
    });

    var $exb3 = $('.hover__image--exb-3');
    $exb3.hide();
    $('.exb-3').mousemove(function(e) {
        $exb3.stop(1, 1).fadeIn();
        $('.hover__image--exb-3').offset({
            top: 220 + e.pageY - $exb3.outerHeight(),
            left: 180 + e.pageX - ($exb3.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb3.hide();
    });

    var $exb4 = $('.hover__image--exb-4');
    $exb4.hide();
    $('.exb-4').mousemove(function(e) {
        $exb4.stop(1, 1).fadeIn();
        $('.hover__image--exb-4').offset({
            top: 220 + e.pageY - $exb4.outerHeight(),
            left: 180 + e.pageX - ($exb4.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb4.hide();
    });

    var $exb5 = $('.hover__image--exb-5');
    $exb5.hide();
    $('.exb-5').mousemove(function(e) {
        $exb5.stop(1, 1).fadeIn();
        $('.hover__image--exb-5').offset({
            top: 220 + e.pageY - $exb5.outerHeight(),
            left: 180 + e.pageX - ($exb5.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb5.hide();
    });

    var $exb6 = $('.hover__image--exb-6');
    $exb6.hide();
    $('.exb-6').mousemove(function(e) {
        $exb6.stop(1, 1).fadeIn();
        $('.hover__image--exb-6').offset({
            top: 220 + e.pageY - $exb6.outerHeight(),
            left: 180 + e.pageX - ($exb6.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb6.hide();
    });


    var $exb7 = $('.hover__image--exb-7');
    $exb7.hide();
    $('.exb-7').mousemove(function(e) {
        $exb7.stop(1, 1).fadeIn();
        $('.hover__image--exb-7').offset({
            top: 270 + e.pageY - $exb7.outerHeight(),
            left: 150 + e.pageX - ($exb7.outerWidth()/2)
        });
    }).mouseleave(function() {
        $exb7.hide();
    });



    /* SHOW CURSOR IMAGE ON HOVER - BENDER*/

    var $bender1 = $('.hover__image--bender-1');
    $bender1.hide();
    $('.bender-1').mousemove(function(e) {
        $bender1.stop(1, 1).fadeIn();
        $('.hover__image--bender-1').offset({
            top: 220 + e.pageY - $bender1.outerHeight(),
            left: 180 + e.pageX - ($bender1.outerWidth()/2)
        });
    }).mouseleave(function() {
        $bender1.hide();
    });

    var $bender2 = $('.hover__image--bender-2');
    $bender2.hide();
    $('.bender-2').mousemove(function(e) {
        $bender2.stop(1, 1).fadeIn();
        $('.hover__image--bender-2').offset({
            top: 220 + e.pageY - $bender2.outerHeight(),
            left: 180 + e.pageX - ($bender2.outerWidth()/2)
        });
    }).mouseleave(function() {
        $bender2.hide();
    });

    var $bender3 = $('.hover__image--bender-3');
    $bender3.hide();
    $('.bender-3').mousemove(function(e) {
        $bender3.stop(1, 1).fadeIn();
        $('.hover__image--bender-3').offset({
            top: 220 + e.pageY - $bender3.outerHeight(),
            left: 180 + e.pageX - ($bender3.outerWidth()/2)
        });
    }).mouseleave(function() {
        $bender3.hide();
    });

    var $bender4 = $('.hover__image--bender-4');
    $bender4.hide();
    $('.bender-4').mousemove(function(e) {
        $bender4.stop(1, 1).fadeIn();
        $('.hover__image--bender-4').offset({
            top: 220 + e.pageY - $bender4.outerHeight(),
            left: 180 + e.pageX - ($bender4.outerWidth()/2)
        });
    }).mouseleave(function() {
        $bender4.hide();
    });


    /* SHOW CURSOR IMAGE ON HOVER - RAMM*/

    var $ramm1 = $('.hover__image--ramm-1');
    $ramm1.hide();
    $('.ramm-1').mousemove(function(e) {
        $ramm1.stop(1, 1).fadeIn();
        $('.hover__image--ramm-1').offset({
            top: 220 + e.pageY - $ramm1.outerHeight(),
            left: 180 + e.pageX - ($ramm1.outerWidth()/2)
        });
    }).mouseleave(function() {
        $ramm1.hide();
    });

    var $ramm2 = $('.hover__image--ramm-2');
    $ramm2.hide();
    $('.ramm-2').mousemove(function(e) {
        $ramm2.stop(1, 1).fadeIn();
        $('.hover__image--ramm-2').offset({
            top: 220 + e.pageY - $ramm2.outerHeight(),
            left: 180 + e.pageX - ($ramm2.outerWidth()/2)
        });
    }).mouseleave(function() {
        $ramm2.hide();
    });



    /* SHOW CURSOR IMAGE ON HOVER - CLOUDS*/

    var $clouds1 = $('.hover__image--clouds-1');
    $clouds1.hide();
    $('.clouds-1').mousemove(function(e) {
        $clouds1.stop(1, 1).fadeIn();
        $('.hover__image--clouds-1').offset({
            top: -10 + e.pageY - $clouds1.outerHeight(),
            left: 130 + e.pageX - ($clouds1.outerWidth()/2)
        });
    }).mouseleave(function() {
        $clouds1.hide();
    });

    /* SHOW CURSOR IMAGE ON HOVER - GIORNO*/

    var $giorno1 = $('.hover__image--giorno-1');
    $giorno1.hide();
    $('.giorno-1').mousemove(function(e) {
        $giorno1.stop(1, 1).fadeIn();
        $('.hover__image--giorno-1').offset({
            top: 220 + e.pageY - $giorno1.outerHeight(),
            left: 180 + e.pageX - ($giorno1.outerWidth()/2)
        });
    }).mouseleave(function() {
        $giorno1.hide();
    });

    var $giorno2 = $('.hover__image--giorno-2');
    $giorno2.hide();
    $('.giorno-2').mousemove(function(e) {
        $giorno2.stop(1, 1).fadeIn();
        $('.hover__image--giorno-2').offset({
            top: -10 + e.pageY - $giorno2.outerHeight(),
            left: 180 + e.pageX - ($giorno2.outerWidth()/2)
        });
    }).mouseleave(function() {
        $giorno2.hide();
    });


    /* SHOW CURSOR IMAGE ON HOVER - CPOD*/

    var $cpod1 = $('.hover__image--cpod-1');
    $cpod1.hide();
    $('.cpod-1').mousemove(function(e) {
        $cpod1.stop(1, 1).fadeIn();
        $('.hover__image--cpod-1').offset({
            top: 270 + e.pageY - $cpod1.outerHeight(),
            left: 150 + e.pageX - ($cpod1.outerWidth()/2)
        });
    }).mouseleave(function() {
        $cpod1.hide();
    });










  });
