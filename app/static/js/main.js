$(document).ready(function () {

    var bgMusic = new buzz.sound('../static/sounds/sand_castles.mp3');
    bgMusic.play().loop().fadeIn();

    var userColour = randomColor({luminosity: 'light', hue: 'blue'});
    var computerColour = randomColor({luminosity: 'light', hue: 'red'});

    var currentWord = [];

    var letters = document.getElementById('letters');
    var sortable = new Sortable(letters, {
        sort: true,
        draggable: '.letter',
        animation: 200,
        ghostClass: 'letter-ghost'
    });

    function mainMenu() {
        setTimeout(function () {
            $('.setup-text, .setup-buttons').addClass('rotate');
            $('.setup-buttons').removeClass('animated bounceInUp')
        }, 1000);

        var colourChoices = ['blue', 'red', 'orange', 'purple'];
        var subtitleColour = randomColor({
            luminosity: 'light',
            hue: colourChoices[Math.floor(Math.random() * colourChoices.length)]
        });
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
        $('.line').css('background-color', colorLuminance(randomColor({luminosity: 'light'}), -0.2));
        $('.username').css('color', userColour);
        $('.round-number').css('color', randomColor({luminosity: 'light'}));
        $('.computer').css('color', computerColour);

        $('.letter').click(function () {
            addToWord($(this));
        });

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
        console.log(currentWord)
        $('.formed-word .letter').click(function () {
            addToTray($(this));
        })
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

    mainMenu();

});