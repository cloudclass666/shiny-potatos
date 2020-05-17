/**
 * Author: Potent Plugins
 * License: GNU General Public License version 2 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
 */
function hm_bbpuip_file_upload(field_id) {
	// First of all, check the count limits if set
	if (jQuery('textarea#bbp_topic_content').length) {
		// The user is editing a topic
		if (typeof hm_bbpuip_count_limit != 'undefined' && hm_bbpuip_count_limit && hm_bbpuip_get_uploaded_image_count() >= hm_bbpuip_count_limit) {
			alert(hm_bbpuip_strings.count_limit_topic.replace('{limit}', hm_bbpuip_count_limit));
			return;
		}
	} else {
		// The user is editing a reply
		if (typeof hm_bbpuip_count_limit_reply != 'undefined' && hm_bbpuip_count_limit_reply && hm_bbpuip_get_uploaded_image_count() >= hm_bbpuip_count_limit_reply) {
			alert(hm_bbpuip_strings.count_limit_reply.replace('{limit}', hm_bbpuip_count_limit_reply));
			return;
		}
	}
	
	jQuery('#hm_bbpuip_file_form, #hm_bbpuip_file_frame').remove();
	
	jQuery('#' + field_id).parent().css('overflow', 'hidden')
		.append('<br /><form id="hm_bbpuip_file_form" action="?hm_bbpuip_do_upload=1" method="post" target="hm_bbpuip_file_frame" enctype="multipart/form-data" onsubmit="hm_bbpuip_file_upload_submit();" data-field-id="' + field_id + '">' +
		'<input type="file" name="hm_bbpuip_file" id="hm_bbpuip_file" onchange="jQuery(this).parent().submit();" />' +
		'<iframe id="hm_bbpuip_file_frame" name="hm_bbpuip_file_frame" style="width: 1px; height: 1px; border: 0;"></iframe>');
	jQuery('#hm_bbpuip_file').trigger('click');
}

function hm_bbpuip_file_upload_submit() {
	jQuery('#hm_bbpuip_file_frame').load(function() {
		var response = jQuery('#hm_bbpuip_file_frame').contents().find('body').text();
		if (response == 'Px_Size_Error') {
			if (hm_bbpuip_strings.px_size_upload_error && hm_bbpuip_px_size_limit)
				alert(hm_bbpuip_strings.px_size_upload_error.replace('{limit}', hm_bbpuip_px_size_limit));
			else
				alert('Error');
			response = '';
		} else if (response == '' || response == 'Error') {
			if (hm_bbpuip_strings.upload_error && hm_bbpuip_upload_size_limit)
				alert(hm_bbpuip_strings.upload_error.replace('{limit}', hm_bbpuip_upload_size_limit));
			else
				alert('Error');
			response = '';
		}
		jQuery('#' + jQuery('#hm_bbpuip_file_form').data('field-id')).val(response).prop('disabled', false);
		jQuery('#hm_bbpuip_file_frame').off('load');
	});
	jQuery('#' + jQuery('#hm_bbpuip_file_form').data('field-id')).prop('disabled', true).val('Please wait...');
	
	return true;
}