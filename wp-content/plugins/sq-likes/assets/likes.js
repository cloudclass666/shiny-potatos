(function ($) {
	'use strict';
	var doingLikesRequest = false;

	$('body').on('click', '.sq-likes', function () {
		var link = $(this);

		if (link.hasClass('vote') || doingLikesRequest === true) {
			return false;
		}

		var id = $(this).attr('id');

		$.ajax({
			type: 'POST',
			url: sqLikes.ajaxUrl,
			data: {
				action: 'sq-likes',
				likes_id: id
			},
			beforeSend: function () {
				doingLikesRequest = true;
			},
			success: function (data) {
				link.html(data).addClass('vote').attr('title', sqLikes.alreadyLiked);
			},
			complete: function () {
				doingLikesRequest = false;
			}
		});

		return false;
	});
})(jQuery);
