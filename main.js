$(document).ready(function() {

	// $('a.fancybox').fancybox();

	$('a.like').bind('click', function() {
		$this = $(this);

		if(! $this.parent().hasClass('highlighted')) { 
			count = parseInt($('.like-count').html())
			count++;
			$('.like-count').html(count);

			$this.parent().addClass('highlighted');
			$this.html("Liked!");
		}
	})

	
	
});