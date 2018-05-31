$(function () {

	$('#sidebar-menu, #customize-menu').metisMenu({
		activeClass: 'open'
	});


	if ($.browser.mobile) {
		var $appContainer = $('#app ');
		var $mobileHandle = $('#sidebar-mobile-menu-handle ');

		$('#sidebar-collapse-btn').on('click', function(event){
			event.preventDefault();

			$("#app").toggleClass("sidebar-open");
		});

		$("#sidebar-overlay").on('click', function() {
			$("#app").removeClass("sidebar-open");
		});


		$mobileHandle.swipe({
			swipeLeft: function() {
				if($appContainer.hasClass("sidebar-open")) {
					$appContainer.removeClass("sidebar-open");	
				}
			},
			swipeRight: function() {
				if(!$appContainer.hasClass("sidebar-open")) {
					$appContainer.addClass("sidebar-open");
				}
			},
			// excludedElements: "button, input, select, textarea, .noSwipe, table", 
			triggerOnTouchEnd: false
		});
	} else {

		$('#sidebar-collapse-btn').on('click', function () {

			$('#app').toggleClass('sidebar-collapsed');
		});
	}
	
});