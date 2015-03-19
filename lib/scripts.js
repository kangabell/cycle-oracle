
$(function() {
	$('.error').hide();
	$('.button').click(function() {

		// error messaging
		var startCurrent = $('#start-current').val();
		var startLast = $('#start-last').val();

		if (startCurrent == "") {
			$('.error').show();
			$('#start-current').focus();
			return false;
		}
		if (startLast == "") {
			$('.error').show();
			$('#start-last').focus();
			return false;
		}

		// redefine values into dates
		var startCurrent = moment( $('#start-current').val() );
		var startLast = moment( $('#start-last').val() );
		var cycle = startCurrent.diff(startLast, "days");
		var next = startCurrent.add(cycle, "days");

		// give info to the user
		$('div:last-child').append('<p>Length of last cycle: <strong>' + cycle + ' days</strong>.</p>');
		$('div:last-child').append('<p>Predicted upcoming period: <strong>' + moment(next).format("dddd, MMMM Do YYYY") + '</strong>.</p>');
		return false;

	}); // end .click();
});
