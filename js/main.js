$(document).ready(function(){
	// date
	var $billboard = $('.billboard');
	var date = new Date(), hour = date.getHours();
	if (hour > 5 && hour < 18) {
		$billboard.removeClass('dark').addClass('light');
	} else {
		$billboard.removeClass('light').addClass('dark');
	}
	//wow.js init
	var wow = new WOW (
	{
		  animateClass: 'animated',
		  mobile: false,
		  offset: 100
		}
	);
	wow.init();

});

