$(document).ready(function () {

    var bgMusic = new buzz.sound('../static/sounds/sand_castles.mp3');
    bgMusic.play().loop().fadeIn();

    function mainMenu() {
        setTimeout(function () {
            $('.setup-text, .setup-buttons').addClass('rotate');
            $('.setup-buttons').removeClass('animated bounceInUp')
        }, 1000);

        var colourChoices = ['blue', 'red', 'orange', 'purple'];
        var subtitleColour = randomColor({luminosity: 'light', hue: colourChoices[Math.floor(Math.random()*colourChoices.length)]});
        var headingColour = colorLuminance(subtitleColour, -0.2);

        $('.setup h1').css('color', headingColour);
        $('.setup p').css('color', subtitleColour);

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

        $('.play-button').click(function () {
            $('.outer-main-buttons').addClass('animated bounceOutDown');
            setTimeout(function () {
                $('.outer-main-buttons').css('display', 'none').removeClass('animated bounceOutDown');
                $('.outer-difficulty-buttons').css('display', 'block').addClass('animated bounceInUp');
            }, 500)
        });

        $('.difficulty-button').click(function () {
            var difficulty = $(this).attr('id');
            $('.setup').addClass('animated bounceOutDown');
            setTimeout(function () {
                $('.setup').css('display', 'none').removeClass('animated bounceOutDown');
                $('.game').css('display', 'block').addClass('animated zoomInDown');
                randomLetters(difficulty)
            }, 500)
        });
    }

    $('.change-background').click(function () {
        changePageBackground();
    });

    function displayLetters(letterset) {
        for (var i = 0; i <= letterset.length - 1; i++) {
            var mainColour = randomColor({luminosity: 'light'});
            var borderColour = colorLuminance(mainColour, -0.2);
            $('.letters').append('<li class="letter" style="background-color: ' + mainColour + '; border: 3px solid ' + borderColour + ';">' + letterset[i] + '</li>');
        }
        $('.line').css('background-color', colorLuminance(randomColor({luminosity: 'light'}), -0.2));
    }

    var letters = document.getElementById('letters');
    var sortable = new Sortable(letters, {
        sort: true,
        draggable: '.letter',
        animation: 200,
        ghostClass: 'letter-ghost'
    });

    function randomLetters(difficulty) {
        $.ajax({
            url: '/_ajax/random_letters',
            type: 'POST',
            data: difficulty,
            success: function (data) {
                displayLetters(data['letterset']);
            }
        })
    }

    function colorLuminance(hex, lum) {
        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;

        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }

        return rgb;
    }

    function changePageBackground() {
        $('.game').css('background-color', colorLuminance(randomColor({luminosity: 'light', hue: 'yellow'}), 0.3));
    }

    //changePageBackground();
    mainMenu();

});