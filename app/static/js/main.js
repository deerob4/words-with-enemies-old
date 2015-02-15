$(document).ready(function() {
    $('h1').click(function() {
        $.ajax({
            url: '_ajax/get_letters',
            type: 'POST',
            success: function(data) {
                alert(data['letters'])
            }
        })
    });

    setTimeout(function() {
        $('.setup-text').addClass('rotate');
    }, 1000);

    var bgMusic = new buzz.sound('../static/sounds/space_adventure.mp3');
    bgMusic.play().loop().fadeIn();

});