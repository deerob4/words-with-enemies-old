module.exports = function(hideElement, removeAnimation, showElement, addAnimation) {
	$(hideElement).addClass('animated ' + removeAnimation);
	setTimeout(function () {
	    $(hideElement).css('display', 'none').removeClass('animated ' + removeAnimation);
	    $(showElement).css('display', 'block').addClass('animated ' + addAnimation);
	}, 500);
}