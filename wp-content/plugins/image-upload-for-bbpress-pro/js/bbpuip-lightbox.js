/**
 * Author: Potent Plugins
 * License: GNU General Public License version 2 or later
 * License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
 */
var bbpuip_lightbox_imgurl_regex;
//jQuery(document).ready(function() {
	jQuery('#bbpress-forums .bbp-reply-content').each(function(index) {
		jQuery(this).find('img').each(function() {
			var img = jQuery(this);
			var imgUrl = jQuery(this).attr('src');
			var imgUrl2 = jQuery(this).data('lazy-src');
			
			// Check if this appears to be an uploaded image
			if (typeof bbpuip_lightbox_imgurl_regex == 'undefined') {
				bbpuip_lightbox_imgurl_regex = /^.+\/[0-9]+\/T?[a-z0-9]{32}\.(jpg|png|gif)(\?.*)?$/;
			}
			if (bbpuip_lightbox_imgurl_regex.test(imgUrl)
				|| (imgUrl2 && bbpuip_lightbox_imgurl_regex.test(imgUrl2))) {
				
				// If this is a thumbnail image, convert to the URL of the regular size image
				var imgUrlLastSlashPos = imgUrl.lastIndexOf('/');
				if (imgUrl.charAt(imgUrlLastSlashPos + 1) == 'T') {
					imgUrl = imgUrl.substr(0, imgUrlLastSlashPos + 1) + imgUrl.substr(imgUrlLastSlashPos + 2);
				}
				
				var link = jQuery('<a class="bbp-post-image-link" target="_blank" data-lightbox="bbp' + index + '">');
				link.attr('href', imgUrl);
				jQuery(this).wrap(link);
			}
		});
	});
//});