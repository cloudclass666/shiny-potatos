jQuery(document).ready(function($) {
	'use strict';
	$('body').on('change', '.rainbow-categories-select', function() {
		var msg = $(this).closest('.column-color').find('.rainbow-categories-saving');
		msg.fadeIn();
		var value = $(this).find('option:selected').val();

		$.post(ajaxObject.ajaxUrl, {
			action: 'update_rainbow_category',
			termId: $(this).data('term-id'),
			taxonomy: $(this).data('taxonomy'),
			color: value,
			colornonce: ajaxObject.colornonce
		}, function(){
			msg.hide();
		});
	});
});