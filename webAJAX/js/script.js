$(document).ready(function() {

	var content = $('#main');
	var hash = window.location.hash.substr(1);

	content.load("userList.html");


	$('.nav li').click(function(event) {
		event.preventDefault();
		$('.nav li').removeClass('active');
		$(this).addClass('active');
	});

	var toHref = $('.nav a').each(function(){
		var href = $(this).attr('href');
		if(hash == href.substr(0, href.length-5)){
			var contentToLoad = hash + '.html';
			content.load(contentToLoad);
		}
	});


	$('.nav a').click(function(event) {
		event.preventDefault();
		
		var href = $(this).attr('href');
		content.html(loadContent);

		window.location.hash = href.substr(0, href.length-5);
		function loadContent() {
			content.load(href);
		};
	});


});
