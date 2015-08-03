import $ from 'jquery';

export default (hideElement, removeAnimation, showElement, addAnimation) => {
	// Animates the initial element out using specified animation.
	$(hideElement).addClass('animated ' + removeAnimation);
	setTimeout(function () {
		// Hides the initial element and removes the added classes.
	  $(hideElement).css('display', 'none').removeClass('animated ' + removeAnimation);
	  // Sets the new element to show using specified animation.
	  $(showElement).css('display', 'block').addClass('animated ' + addAnimation);
	}, 500);
};
