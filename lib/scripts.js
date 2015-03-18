
/**** FORM ****/


$(function() {
	$('.error').hide();
	$('.button').click(function() {

		$( '.error' ).hide();

		var date0 = $('#date-range0').val();
		var date1 = $('#date-range1').val();
		var date2 = $('#date-range2').val();
		var date3 = $('#date-range3').val();

		if (date0 == "") {
			$('.error').show();
			$('#date-range0').focus();
			return false;
		}
		if (date1 == "") {
			$('.error').show();
			$('#date-range1').focus();
			return false;
		}
		if (date2 == "") {
			$('.error').show();
			$('#date-range2').focus();
			return false;
		}
		if (date3 == "") {
			$('.error').show();
			$('#date-range3').focus();
			return false;
		}


		// // turn values into dates

		var date0 = moment( $('#date-range0').val() );
		var date1 = moment( $('#date-range1').val() );
		var date2 = moment( $('#date-range2').val() );
		var date3 = moment( $('#date-range3').val() );


		// give info to the user

		$('div:last-child').append('<p>Your period occurred from ' + date0 + ' to ' + date1 + ' (' + '__' + ' days), and from ' + date2 + ' to ' + date3 + ' (' + '__' + ' days).</p>');
		$('div:last-child').append('<p>The length of your last cycle was ___ days.</p>');
		$('div:last-child').append('<p>Your next period is predicted to occur on __________.</p>');
		return false;

	}); // end .click();
});
