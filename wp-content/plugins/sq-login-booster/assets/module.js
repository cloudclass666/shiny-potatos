/*
 * AJAX Login Module
 * @author SeventhQueen
 * @package SeventhQueen Framework
 */

(function ($) {
	"use strict";

	$(document).ready(function() {

		var $body = $('body');

		var myHash = window.location.hash.substring(1).replace(',', '');
		if (myHash == 'show-login' && !$("body").hasClass('logged-in') && $('#svq-login-modal').length > 0) {
			$('#svq-login-modal').modal('show');
		}

		$body.on('click','.svq-open-login, .svq-ajax-login-nav > a, .must-log-in a', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$('.modal').modal('hide');
			$('#svq-login-modal').modal('show');

			return false;
		});
		$body.on('click', '.svq-open-register, .svq-ajax-register-nav a', function(e) {
			e.preventDefault();
			$('.modal').modal('hide');
			$('#svq-register-modal').modal('show');

			return false;
		});
		$body.on('click', '.svq-open-lost-pass, .svq-ajax-warning a[href*=lostpassword]', function(e) {
			e.preventDefault();
			$('.modal').modal('hide');
			$('#svq-lost-pass-modal').modal('show')

			return false;
		});

		$('.svq-login-form').on('submit', function (e) {
			if($('#svq-login-terms').length > 0 && ! $('#svq-login-terms').is(':checked')) {
				$('.svq-login-result', this).html(SqAjaxLoginLocale.agreeTerms).show();
				return false;
			}

			$('.svq-login-result', this).show().html(SqAjaxLoginLocale.loadingMessage);
			var data = $(this).serialize();
			var _self = this;
			data += '&action=svq-ajax-login';
			$.ajax({
				type: 'POST',
				dataType: 'json',
				url: SqAjaxLoginLocale.loginUrl,
				data: data,
				success: function (data) {
					$('.svq-login-result', _self).html(data.message);
					if (data.loggedin == true) {
						if (data.redirecturl == null) {
							document.location.reload();
						}
						else {
							document.location.href = data.redirecturl;
						}
					}
				},
				complete: function () {

				},
				error: function () {
					$(_self).off('submit').submit();
				}
			});
			e.preventDefault();
		});

		$(".svq-lost-form").on("submit", function () {
			var data = $(this).serialize();
			data += '&action=svq_lost_password';
			var resultDiv = $('.svq-login-result', this);

			resultDiv.show().html(SqAjaxLoginLocale.loadingMessage);
			$.ajax({
				url: SqAjaxLoginLocale.ajaxUrl,
				type: 'POST',
				data: data,
				success: function (data) {
					resultDiv.html(data);
				},
				error: function () {
					resultDiv.html(SqAjaxLoginLocale.errorOcurred).css('color', 'red');
				}

			});
			return false;
		});
	});

})(jQuery);
