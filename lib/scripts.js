
// hide most stuff
$( function() {
	$('.cycle1').hide().fadeIn(1000); // fade in cycle1
	$('.cycle2').hide(); // hide cycle2;
	$('.button').hide(); // hide submit;
	$('.error').hide(); // hide errors;
	$('.cycle-length').hide(); // hide results;
	$('.cycle-start').hide(); // hide results;
});

// set up function to show more (either next section, or an error)
var getAnyStartCycle = function (id) {
	return moment( $(id).val() );
};
var doAnyCycle = function (id, nextId) {
	var cycle = getAnyStartCycle(id);
    if (!cycle.isValid()) {
    	$('.error').hide().fadeIn(100);
    	$(id).focus();
    	return;
    } else {
    	$(nextId).hide().fadeIn();
    }
};

// ok let's go

$(document).ready(function() {

	$('#start-cycle1').blur(function() { // when user exits cycle1 field
		doAnyCycle("#start-cycle1", ".cycle2");
	});  

	$('#start-cycle2').blur(function() { // when user exits cycle2 field
		doAnyCycle("#start-cycle2", ".button");
	});

	$('.button').click(function() {

		// define input values as dates
		var startCycle1 = moment( $('#start-cycle1').val() );
		var startCycle2 = moment( $('#start-cycle2').val() );
		var cycle = startCycle1.diff(startCycle2, "days");
		var next = startCycle1.add(cycle, "days");

		// give info to the user
		$('.error').hide();
		$('.cycle-length').hide().fadeIn();
		$('.cycle-start').hide().fadeIn();
		$('.cycle-length strong').text(cycle + ' days');
		$('.cycle-start strong').text(moment(next).format("dddd, MMMM Do YYYY"));
		return false;

	}); // end .click();

});