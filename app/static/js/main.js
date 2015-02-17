$(document).ready(function () {

    var bgMusic = new buzz.sound('../static/sounds/sand_castles.mp3');
    bgMusic.play().loop().fadeIn();

    var colourChoices = ['blue', 'red', 'orange', 'purple'];
    var mainColour = randomColor({
        luminosity: 'light',
        hue: colourChoices[Math.floor(Math.random() * colourChoices.length)]
    });

    var currentWord = [];

    var letters = document.getElementById('letters');
    var sortable = new Sortable(letters, {
        sort: true,
        draggable: '.letter',
        animation: 200,
        ghostClass: 'letter-ghost'
    });


    function calculateColours() {
        var gameColour = colorLuminance(mainColour, -0.2);
        //Main menu colours
        $('.setup h1').css('color', gameColour);
        $('.setup p').css('color', mainColour);
        var buttonColour = colorLuminance(mainColour, -0.3);
        $('.setup-buttons div').css('border-color', buttonColour).css('color', buttonColour);

        var userColour = randomColor({luminosity: 'light'});
        var computerColour = randomColor({luminosity: 'light', hue: 'red'});

        $('.game').css('border-color', mainColour);

        $('.line').css('background-color', mainColour);
        $('.username').css('color', userColour);
        $('.round-number').css('color', randomColor({luminosity: 'light'}));
        $('.computer').css('color', computerColour);

        var userWordBackground = colorLuminance(userColour, 0.1);
        $('.formed-word').css('background-color', userWordBackground).css('border-color', colorLuminance(userWordBackground, -0.2));

        var computerWordBackground = colorLuminance(computerColour, 0.1);
        $('.computer-word').css('background-color', computerWordBackground).css('border-color', colorLuminance(computerWordBackground, -0.2));
    }

    function mainMenu() {
        setTimeout(function () {
            $('.setup-text, .setup-buttons').addClass('rotate');
            $('.setup-buttons').removeClass('animated bounceInUp')
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

        $('.play-button').click(function () {
            $('.outer-main-buttons').addClass('animated bounceOutLeft');
            setTimeout(function () {
                $('.outer-main-buttons').css('display', 'none').removeClass('animated bounceOutLeft');
                $('.outer-difficulty-buttons').css('display', 'block').addClass('animated bounceInRight');
            }, 600)
        });

        $('.difficulty-button').click(function () {
            var difficulty = $(this).attr('id');
            $('.setup').addClass('animated bounceOutLeft');
            setTimeout(function () {
                $('.setup').css('display', 'none').removeClass('animated bounceOutLeft');
                $('.game').css('display', 'block').addClass('animated bounceInRight');
                randomLetters(difficulty)
            }, 600)
        });
    }

    function displayLetters(letterset) {
        for (var i = 0; i <= letterset.length - 1; i++) {
            var mainColour = randomColor({luminosity: 'light'});
            var borderColour = colorLuminance(mainColour, -0.2);
            $('.letters').append('<li class="letter" id=' + i + '" style="background-color: ' + mainColour + '; border: 3px solid ' + borderColour + ';">' + letterset[i] + '</li>');
        }
    }

    function randomLetters(difficulty) {
        $.ajax({
            url: '/_ajax/random_letters',
            type: 'POST',
            data: difficulty,
            success: function (data) {
                console.log(difficulty + ' mode chosen.');
                console.log('Letters: ' + data['letterset']);
                displayLetters(data['letterset']);
            }
        })
    }

    function addToWord($letter) {
        var letter = $letter.text();
        if (!$letter.hasClass('added')) {
            currentWord.push(letter);
            $letter.addClass('added');
            $('.formed-word').append('<li class="letter" id=' + letter + '" style="background-color: ' + $letter.css('background-color') + '; border: 3px solid ' + $letter.css('border-color') + ';">' + letter + '</li>');
            $letter.remove();
        } else {
            remove(currentWord, letter);
            $letter.removeClass('added');
        }
        console.log(currentWord);
    }

    function addToTray($letter) {
        var letter = $letter.text();
        $('.letters').append('<li class="letter" id=' + letter + '" style="background-color: ' + $letter.css('background-color') + '; border: 3px solid ' + $letter.css('border-color') + ';">' + letter + '</li>');
        $letter.remove();
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

    function remove(array, what) {
        var found = array.indexOf(what);

        while (found !== -1) {
            array.splice(found, 1);
            found = array.indexOf(what);
        }
    }

    $('.formed-word').on('click', '.letter', function () {
        addToTray($(this));
    });

    $('.letters').on('click', '.letter', function () {
        addToWord($(this));
    });

    calculateColours();
    mainMenu();

});