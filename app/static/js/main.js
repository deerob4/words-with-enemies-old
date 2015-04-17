//$(document).ready(function () {
//
var bgMusic = new buzz.sound('../static/sounds/sand_castles.mp3');
bgMusic.play().loop().fadeIn();
//
//    var currentWord = [];
//        wordMessage = true;
//        lettersAdded = 0;
//        difficulty = 'medium';
//
//    var letters = document.getElementById('formed-word');
       // sortable = new Sortable(letters, {
       //     sort: true,
       //     draggable: '.letter',
       //     animation: 200,
       //     ghostClass: 'letter-ghost'
       // });
//
// function calculateColours() {
//     var colourChoices = ['blue', 'red', 'orange', 'purple'];
//     var mainColour = randomColor({
//         luminosity: 'light',
//         hue: colourChoices[Math.floor(Math.random() * colourChoices.length)]
//     });
//     console.log('Main colour chosen.');
//     var gameColour = colorLuminance(mainColour, -0.2);
//     console.log('Game colour chosen.');

//     $('.setup h1').css('color', gameColour);
//     $('.setup p').css('color', mainColour);
//     var buttonColour = colorLuminance(mainColour, -0.3);
//     $('.setup-buttons div, .return-button').css('border-color', buttonColour).css('color', buttonColour);

//     var userColour = randomColor({luminosity: 'light'});
//     var computerColour = randomColor({luminosity: 'light', hue: 'red'});

//     $('.game').css('border-color', mainColour);

//     $('.line').css('background-color', mainColour);
//     $('.username').css('color', userColour);
//     $('.round-number').css('color', mainColour);
//     $('.computer').css('color', computerColour);
//     $('.game-buttons div').css('background-color', mainColour).css('border-color', gameColour).css('color', gameColour);

//     var userWordBackground = colorLuminance(userColour, 0.1);
//     var userWordBorder = colorLuminance(userWordBackground, -0.2);
//     $('.formed-word').css('background-color', userWordBackground).css('border-color', userWordBorder);
//     $('.word-message').css('color', userWordBorder);

//     var computerWordBackground = colorLuminance(computerColour, 0.1);
//     var computerWordBorder = colorLuminance(computerWordBackground, -0.2);
//     $('.computer-word').css('background-color', computerWordBackground).css('border-color', computerWordBorder);
//     $('.word-message-computer').css('color', computerWordBorder);
// }
//
//    function mainMenu() {
//        $('.instructions-button').click(function () {
//            $('.menu').addClass('animated bounceOutRight');
//            setTimeout(function () {
//                $('.menu').css('display', 'none').removeClass('animated bounceOutRight');
//                $('.instructions').css('display', 'block').addClass('animated bounceInLeft');
//            }, 500)
//        });
//
//        $('.return-button').click(function () {
//            $('.instructions').addClass('animated bounceOutLeft');
//            setTimeout(function () {
//                $('.instructions').css('display', 'none').removeClass('animated bounceOutLeft');
//                $('.menu').css('display', 'block').addClass('animated bounceInRight');
//            }, 500)
//        });
//
//        $('.play-button').click(function () {
//            $('.outer-main-buttons').addClass('animated bounceOutLeft');
//            setTimeout(function () {
//                $('.outer-main-buttons').css('display', 'none').removeClass('animated bounceOutLeft');
//                $('.outer-difficulty-buttons').css('display', 'block').addClass('animated bounceInRight');
//            }, 600)
//        });
//
//        $('.difficulty-button').click(function () {
//            difficulty = $(this).attr('id');
//            $('.setup').addClass('animated bounceOutLeft');
//            setTimeout(function () {
//                $('.setup').css('display', 'none').removeClass('animated bounceOutLeft');
//                $('.game').css('display', 'block').addClass('animated bounceInRight');
//                randomLetters(difficulty)
//            }, 600)
//        });
//    }
//
//    function displayLetters(letterset) {
//        for (var i = 0; i <= letterset.length - 1; i++) {
//            var mainColour = randomColor({luminosity: 'light'});
//            var borderColour = colorLuminance(mainColour, -0.2);
// $('.letters').append('<li class="letter" id=' + i + '" style="background-color: ' + mainColour + '; border: 3px solid ' + borderColour + '; color: ' + colorLuminance(borderColour, -0.2) + '">' + letterset[i] + '</li>');
//        }
//    }
//
//    function randomLetters(difficulty) {
//        $.ajax({
//            url: '/_ajax/random_letters',
//            type: 'POST',
//            data: difficulty,
//            success: function (data) {
//                console.log(difficulty + ' mode chosen.');
//                console.log('Letters: ' + data['letterset']);
//                displayLetters(data['letterset']);
//            }
//        })
//    }
//
//    function checkDictionary(word) {
//        $.ajax({
//            url: '/_ajax/check_dictionary',
//            type: 'POST',
//            data: word,
//            success: function (data) {
//                if (data == 'valid') {
//                    genericAnimation($('.formed-word'), 'rubberBand', true);
//                    changeComputerText('The computer is thinking!', 20000000);
//                    showComputerWord();
//                } else {
//                    genericAnimation($('.formed-word'), 'wobble', true);
//                    changeComputerText('Sorry, that isn\'t a real word!', 2000);
//                }
//            }
//        });
//    }
//
//    function showComputerWord() {
//        $.ajax({
//            url: '/_ajax/generate_computer_word',
//            type: 'POST',
//            data: difficulty,
//            success: function (word) {
//                console.log(word);
//                word.split();
//                $('.word-message-computer').remove();
//                for (var i = 0; i <= word.length -1; i++) {
//                    var mainColour = randomColor({luminosity: 'light'});
//                    var borderColour = colorLuminance(mainColour, -0.2);
//                    $('.computer-word').append('<li class="letter" id=' + i + '" style="background-color: ' + mainColour + '; border: 3px solid ' + borderColour + '; color: ' + colorLuminance(borderColour, -0.2) + '">' + word[i] + '</li>');
//                }
//            }
//        });
//    }
//
//
//    function addToWord($letter) {
//        var letter = $letter.text();
//        if (wordMessage == true) {
//            $('.word-message').remove();
//            wordMessage = false;
//        }
//        currentWord.push(letter);
//        $letter.addClass('added');
//        $('.formed-word').append('<li class="letter" id="' + letter + '" style="background-color: ' + $letter.css('background-color') + '; border: 3px solid ' + $letter.css('border-color') + '; color: ' + $letter.css('border-color') + '">' + letter + '</li>');
//        $letter.remove();
//        console.log(currentWord);
//    }
//
//    function addToTray($letter) {
//        var letter = $letter.text();
//        $('.letters').append('<li class="letter" id=' + letter + '" style="background-color: ' + $letter.css('background-color') + '; border: 3px solid ' + $letter.css('border-color') + '; color: ' + $letter.css('border-color') + '">' + letter + '</li>');
//        $letter.remove();
//    }
//
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
//
//    function genericAnimation($element, animation, timeout) {
//        $element.addClass('animated ' + animation);
//        if (timeout == true) {
//            setTimeout(function () {
//                $element.removeClass('animated ' + animation);
//            }, 1400);
//        }
//    }
//
//    function changeComputerText(message, timeout) {
//        $('.word-message-computer').text(message);
//        setTimeout(function () {
//            $('.word-message-computer').text('Computer\'s word goes here!');
//        }, timeout)
//    }
//
//    $('.formed-word').on('click', '.letter', function () {
//        addToTray($(this));
//    });
//
//    $('.letters').on('click', '.letter', function () {
//        addToWord($(this));
//    });
//
//    $('.finished').click(function () {
//        currentWord.length = 0;
//        $('.formed-word .letter').each(function () {
//            currentWord.push($(this).text())
//        });
//        if (currentWord.length > 0) {
//            checkDictionary(currentWord.toString());
//        } else {
//            genericAnimation($('.formed-word'), 'wobble', true);
//        }
//
//    });
//
//    $('.change-colours').click(function () {
//        calculateColours();
// $('.letters .letter').each(function () {
//     var background = randomColor({luminosity: 'light'});
//     var border = colorLuminance(background, -0.2);
//     $(this).css('background-color', background).css('border-color', border).css('color', colorLuminance(border, -0.2));
// });
// $('.formed-word .letter').each(function () {
//     var background = randomColor({luminosity: 'light'});
//     var border = colorLuminance(background, -0.2);
//     $(this).css('background-color', background).css('border-color', border).css('color', colorLuminance(border, -0.2));
// });
// $('.computer-word .letter').each(function () {
//     var background = randomColor({luminosity: 'light'});
//     var border = colorLuminance(background, -0.2);
//     $(this).css('background-color', background).css('border-color', border).css('color', colorLuminance(border, -0.2));
// });
//    });
//
//    $('.vowel').click(function () {
//        if (lettersAdded < 2) {
//var vowels = ['a', 'e', 'i', 'o', 'u'];
//var letterset = [vowels[Math.floor(Math.random() * vowels.length)]];
//            displayLetters(letterset);
//            lettersAdded++;
//        } else {
//            genericAnimation($(this), 'shake', true);
//            changeComputerText('You can only have two extra letters per round!', 2000);
//        }
//    });
//
//    $('.consonant').click(function () {
//        if (lettersAdded < 2) {
//            var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y'];
//            var letterset = [consonants[Math.floor(Math.random() * consonants.length)]];
//            displayLetters(letterset);
//            lettersAdded++;
//        } else {
//            genericAnimation($(this), 'shake', true);
//            changeComputerText('You can only have two extra letters per round!', 2000);
//        }
//    });
//
//    calculateColours();
//    mainMenu();
//
//});

var module = angular.module('wordsWithEnemies', ['ng-sortable']),
    letterListLength = 0;

// Sets the AngularJS template symbols to prevent conflict with Jinja2.
module.config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);

// Sets and mofifies the colour of the dynamic elements.
module.controller('MainCtrl', ['storeLettersService', function (storeLettersService) {
    var self = this,
        colourChoices = ['blue', 'red', 'orange', 'purple'];

    self.updateColours = function () {
        self.mainColour = randomColor({
            luminosity: 'light',
            hue: colourChoices[Math.floor(Math.random() * colourChoices.length)]
        });
        self.gameColour = colorLuminance(self.mainColour, -0.2);
        self.buttonColour = colorLuminance(self.mainColour, -0.3);
        self.userColour = randomColor({luminosity: 'light'});
        self.userWordBackground = colorLuminance(self.userColour, 0.1);
        self.userWordBorder = colorLuminance(self.userWordBackground, -0.2);
        self.computerColour = randomColor({luminosity: 'light', hue: 'red'});
        self.computerWordBackground = colorLuminance(self.computerColour, 0.1);
        self.computerWordBorder = colorLuminance(self.computerWordBackground, -0.2);

        var letterBank = storeLettersService.getLetterBank(),
            formedWord = storeLettersService.getFormedWord();

        // Loops through every letter and calls the changeColours() prototype function.
        for (var i = 0; i < letterBank.length; i++) {
            letterBank[i].changeColours();
        }

        for (var i = 0; i < formedWord.length; i++) {
            formedWord[i].changeColours();
        }

    };

    self.updateColours();
}]);

// Controls the animations in the menu.
module.controller('MenuCtrl', ['menuAnimateService', function (menuAnimateService) {
    var self = this;

    // Rotates the different elements in the menu.
    setTimeout(function () {
        $('.setup-text, .setup-buttons').addClass('rotate');
        $('.setup-buttons').removeClass('animated bounceInUp')
    }, 1000);

    // Animates the instructions button.
    self.showInstructions = function () {
        menuAnimateService.animateMenu('main-buttons', 'bounceOutRight', 'instructions', 'bounceInLeft');
    };

    // Animates the menu return button.
    self.returnToMenu = function () {
        menuAnimateService.animateMenu('instructions', 'bounceOutLeft', 'main-buttons', 'bounceInRight');
    };

    // Animates the start game button.
    self.startGame = function () {
        menuAnimateService.animateMenu('setup', 'bounceOutLeft', 'game', 'bounceInRight');
    }
}]);

module.controller('GameCtrl', ['storeLettersService', '$http', function (storeLettersService, $http) {
    var self = this;

    // Sets all the game board elements
    self.letters = [];
    self.formedWord = [];
    self.roundNumber = 1;
    self.userScore = 0;
    self.computerScore = 0;
    self.extraLetters = 5;
    self.userMessage = 'Make a word with the letters!';
    self.computerMessage = 'Computer\'s word goes here!';

    // Adds an extra letter to the letter bank.
    self.addNewLetter = function (type) {
        var alphabet = {
                vowels: ['a', 'e', 'i', 'o', 'u'],
                consonants: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y']
            },
            letter = new LetterBlock(alphabet[type][Math.floor(Math.random() * alphabet[type].length)]); // Creates a new letter instance.

        if (self.extraLetters > 0) {
            storeLettersService.addToLetterBank(letter);
            self.extraLetters -= 1;
        }
    };

    // Requests 10 random letters from the API.
    self.getRandomLetters = function () {
        $http.post('/letters/10').then(function (response) {
            self.createLetterBlocks(response.data)
        }, function () {
            console.log('Error while fetching letters.');
        });
    };

    // Creates the actual letter blocks for the letter bank.
    self.createLetterBlocks = function (randomLetters) {
        for (var i = 0; i < randomLetters.length; i++) {
            var letter = new LetterBlock(randomLetters[i]);
            storeLettersService.addToLetterBank(letter);
        }
    };

    // Adds the letter to the formed word area, and removes it from the letter bank. At least, it should do; it's not working yet.
    self.addLetterToWord = function (id) {
        var letterToAdd = storeLettersService.getLetterBank()[id - 1];
        $('.word-message').hide();
        storeLettersService.addToFormedWord(letterToAdd);
        // storeLettersService.removeFromLetterBank(id);
    };

    self.getRandomLetters();
    self.letters = storeLettersService.getLetterBank();
    self.formedWord = storeLettersService.getFormedWord();
}]);

module.service('menuAnimateService', [function () {
    var self = this;

    self.animateMenu = function (hideElement, removeAnimation, showElement, addAnimation) {
        $('.' + hideElement).addClass('animated ' + removeAnimation);
        setTimeout(function () {
            $('.' + hideElement).css('display', 'none').removeClass('animated ' + removeAnimation);
            $('.' + showElement).css('display', 'block').addClass('animated ' + addAnimation);
        }, 500);
    };
}]);

// Service for reading and updating the numerous lists of letters throughout the game.
module.service('storeLettersService', [function () {
    var self = this;

    self.letterObjects = {
        letterBank: [],
        formedWord: [],
        computerWord: []
    };

    // Adds letter objects to the letter banks.
    self.addToLetterBank = function (letterObject) {
        self.letterObjects.letterBank.push(letterObject);
        letterListLength = self.letterObjects.letterBank.length;
    };

    // Removes letters from the letter bank. Doesn't work.
    self.removeFromLetterBank = function (letterObject) {
        var result = $.grep(self.getLetterBank(), function(e) { return e.id === letterObject.id });
    };

    // Returns the letter bank.
    self.getLetterBank = function () {
        return self.letterObjects.letterBank;
    };

    // Adds letter objects to the formed word array.
    self.addToFormedWord = function (letterObject) {
        self.letterObjects.formedWord.push(letterObject);
    };

    // Returns the formed word.
    self.getFormedWord = function () {
        return self.letterObjects.formedWord;
    };
}]);

// Letter block class that represents every individual letter; they can be tracked using their ID.
var LetterBlock = function (letter) {
    this.id = letterListLength + 1;
    this.value = letter;
    this.bgColour = randomColor({luminosity: 'light'});
    this.borderColour = colorLuminance(this.bgColour, -0.2);
    this.textColour = colorLuminance(this.borderColour, -0.2);
};

// LetterBlock method that modifies the colours of the individual letter block.
LetterBlock.prototype.changeColours = function () {
    this.bgColour = randomColor({luminosity: 'light'});
    this.borderColour = colorLuminance(this.bgColour, -0.2);
    this.textColour = colorLuminance(this.borderColour, -0.2);
};