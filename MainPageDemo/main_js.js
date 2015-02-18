// Change color of selected tab
$('.tab').on('click', function() {

	if (!($(this).hasClass('contract-tab'))) {
		$('.tab').removeClass('tab-selected');
		$(this).addClass('tab-selected');
	}

});

// Create function to get new date
function updateDate() {

    $('.middle-sub-tab').text($('.fc-toolbar h2').text());

}

// Set current date
$(document).ready(function() {

	updateDate();

});

// Go to previous month on click
$('.left-sub-tab').on('click', function() {

	$('#calendar').fullCalendar('prev');
	updateDate();
	resizeCalendar();

});

// Go to next month on click
$('.right-sub-tab').on('click', function() {

	$('#calendar').fullCalendar('next');
	updateDate();
	resizeCalendar();

});

// On middle sub-tab click (in calendar mode)
$('.middle-sub-tab').on('click', function() {

	// Display list of Months/Years to fast travel there
	// ALSO have a button to go back to TODAY

});

// Function to resize Calendar From Default Week/Row Height to fit into main-view
/* * * * * Doesn't work on window resize for some reason. Only on page load. Must fix * * * * */
function resizeCalendar()
{
	var mainViewHeight = ($(window).height() - $('.nav-bar').height() - $('.sub-tab').height() - 1);
	var weekHeaderHeight = $('#calendar thead').height();
	var heightForDaySquares = (((mainViewHeight - weekHeaderHeight) / 6) - 0.25) + 'px';
	$('.fc-week').attr('style', "height:" + heightForDaySquares);
}

// Calendar
$(document).ready(function() {

	resizeCalendar();

});
$(window).resize(function() {

	resizeCalendar();

});

// Creating function 'animateRotate' for use later
$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};

// Animate up/down account-info when clicking the '+' sign
$('.right-account-info').on('click', function() {

	if ($('.account-info').hasClass('account-info-open')) {
		$(this).animateRotate(0, {
			duration: 200,
			easing: 'linear',
			complete: function() {$('.account-info').toggleClass('account-info-open', 200, 'easeInSine');},
			step: function() {}
		});
	} else {
		$(this).animateRotate(-45, {
			duration: 200,
			easing: 'linear',
			complete: function() {$('.account-info').toggleClass('account-info-open', 800, 'easeOutBounce');},
			step: function() {}
		});
	}

});

// Scale based on window width/height on load
$(document).ready(function() {
	$('.main-view').css('height', $(window).height() - $('.nav-bar').height() - $('.sub-tab').height() - 1);
	$('.right-panel').css('height', $('.main-view').height() + $('.sub-tab').height() - $('.right-account-info').height() + 1);
});

// Scale based on window width/height on resize
$(window).resize(function() {
	$('.main-view').css('height', $(window).height() - $('.nav-bar').height() - $('.sub-tab').height() - 1);
	$('.right-panel').css('height', $('.main-view').height() + $('.sub-tab').height() - $('.right-account-info').height() + 1);
});