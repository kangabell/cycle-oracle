
$(function() {
	$('.error').hide();
	$('.cycle-length').hide();
	$('.cycle-start').hide();
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
		$('.error').hide();
		$('.cycle-length').show();
		$('.cycle-start').show();
		$('.cycle-length strong').text(cycle + ' days');
		$('.cycle-start strong').text(moment(next).format("dddd, MMMM Do YYYY"));
		return false;

	}); // end .click();
});
