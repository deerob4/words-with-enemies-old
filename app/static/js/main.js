$(document).ready(function () {

    var bgMusic = new buzz.sound('../static/sounds/sand_castles.mp3');
    bgMusic.play().loop().fadeIn();

    $('h1').click(function () {
        $.ajax({
            url: '_ajax/get_letters',
            type: 'POST',
            success: function (data) {
                alert(data['letters'])
            }
        })
    });

    setTimeout(function () {
        $('.setup-text, .setup-buttons').addClass('rotate');
    }, 1000);

    $('.instructions-button').click(function () {
        $('.menu').addClass('animated bounceOutRight');
        setTimeout(function () {
            $('.menu').css('display', 'none').removeClass('animated bounceOutRight');
            $('.instructions').css('display', 'block').addClass('animated bounceInLeft');
        }, 500)
    });

    $('.return-button').click(function () {
        $('.instructions').addClass('animated bounceOutLeft');
        setTimeout(function () {
            $('.instructions').css('display', 'none').removeClass('animated bounceOutLeft');
            $('.menu').css('display', 'block').addClass('animated bounceInRight');
        }, 500)
    });

});