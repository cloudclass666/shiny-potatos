/**
 * Created by Linnea on 9/13/2015.
 */
jQuery( document ).ready(function() {

    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // IE 12 => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }

    var IE = detectIE();

    var supports_shadow = function supports_shadow() {
        return document.createElement("detect").style.textShadow === "";
    };

    var compatible = !IE && supports_shadow();

    var $blur = jQuery(".blur"),
        $blur_hover = jQuery(".blur_hover"),
        $blur_click = jQuery(".blur_click");

    jQuery.fn.blur = function() {
        this.find('*').removeAttr('style');
        var c = this.css("color");
        this.attr('oldcolor', c);
        var background_color = this.css("background");
        this.attr('oldbackground', background_color);
        if(supports_shadow && !IE ) {
            this.css('color', 'transparent');
            this.css('text-shadow', '0px 0px 10px ' + c);
        } else {
            this.css('background', c);
            this.css('color', c);
        }
    };

    jQuery.fn.unblur = function() {
            var oldcolor = this.attr('oldcolor');
            var oldbackground = this.attr('oldbackground');
            this.css('color', oldcolor);
            this.css('text-shadow', 'none');
            this.removeAttr('oldcolor');
        if(IE) {
            this.css('background', oldbackground);
        }
    };

    // set up initial blur
    $blur_hover.each(function() {
        toggleblur(jQuery(this));
    });
    $blur.each(function() {
        toggleblur(jQuery(this));
    });
    $blur_click.each(function() {
        toggleblur(jQuery(this));
    });

    // register click action listener
    $blur_click.click(function() {
        toggleblur(jQuery(this));
    });
    // register hover action listener
    $blur_hover.hover(function() {
        toggleblur(jQuery(this));
    });

    function toggleblur($element) {

        if(!compatible && $element.hasClass('blur_nofallback')) {
            // do nothing
            return;
        } else if (!compatible && $element.hasClass('blur_hide')) {
            $element.hide();
            return;
        }
        var attr = $element.attr('oldcolor');
        // For some browsers, `attr` is undefined; for others,
        // `attr` is false.  Check for both.
        if (typeof attr !== typeof undefined && attr !== false) {
            $element.unblur();
        } else {
            $element.blur();
        }
    }



});