
$(function() {
	$('.error').hide();
	$('.button').click(function() {

		// error messaging
		var startLast = $('#start-last').val();
		var startCurrent = $('#start-current').val();

		if (startLast == "") {
			$('.error').show();
			$('#start-last').focus();
			return false;
		}
		if (startCurrent == "") {
			$('.error').show();
			$('#start-current').focus();
			return false;
		}

		// redefine values into dates
		var startLast = moment( $('#start-last').val() );
		var startCurrent = moment( $('#start-current').val() );
		var cycle = startCurrent.diff(startLast, "days");
		var next = startCurrent.add(cycle, "days");

		// give info to the user
		$('div:last-child').append('<p>The length of your last cycle was <span>' + cycle + ' days</span>.</p>');
		$('div:last-child').append('<p>Your next period is predicted to occur on <span>' + moment(next).format("dddd, MMMM Do YYYY") + '</span>.</p>');
		return false;

	}); // end .click();
});
