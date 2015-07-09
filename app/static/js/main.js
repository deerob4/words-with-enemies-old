var bgMusic = new buzz.sound('../static/sounds/sand_castles.mp3');
bgMusic.play().loop().fadeIn();

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

var module = angular.module('wordsWithEnemies', ['ng-sortable']),
    letterListLength = 0;

// Sets and mofifies the colour of the dynamic elements.
module.controller('MainCtrl', ['storeLettersService', function (storeLettersService) {
    var self = this,
        colourChoices = ['blue', 'red', 'orange', 'purple'];

    /**
     * Randomises every coloured element.
     */
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
        $('.setup-buttons').removeClass('animated bounceInUp');
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
    };
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

    /**
     * Adds an extra letter to the letter bank.
     * @param {[type]} type [description]
     */
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

    /**
     * Requests 10 random letters from the API.
     * @return {function} createLetterBlocks()
     */
    self.getRandomLetters = function () {
        $http.get('/api/letters?quantity=10').then(function (response) {
            self.createLetterBlocks(response.data.letters);
        }, function () {
            console.log('Error while fetching letters.');
        });
    };

    /**
     * Creates the actual letter blocks for the letter bank.
     * @param  {array} randomLetters An array of random letters.
     * @return {function}               addToLetterBank()
     */
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
        storeLettersService.removeFromLetterBank(id);
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
        for (var i = 0; i < self.letterObjects.letterBank.length; i++) {
            console.log(letterObject);
            if (self.letterObjects.letterBank[i].id == letterObject) {
                self.letterObjects.letterBank.splice(letterObject, 1);
            }
        }
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