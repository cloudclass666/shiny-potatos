jQuery(document).ready(function() {
    var j = jQuery;
    gotogroupstab();


    j(".ls-bp-sug-gr-remove-from-widget a").live('click', function() {
        var li =j(this).closest( "li" );
        j(li).remove();
        var url = j(this).attr('href');
        var nonce = get_var_in_url(url, "_wpnonce");
        var suggested_group_id = get_var_in_url(url, "suggest_id");
        j.post(ajaxurl, {
            action: "group_suggest_remove_suggestion",
            cookie: encodeURIComponent(document.cookie),
            'suggestion_id': suggested_group_id,
            '_wpnonce': nonce
        }, function(response) {
            return false;
        });
        return false;
    });

//gmponarou added at 6/11/2014
   j(".suggested-group-item-list div.remove-group-suggestion2 a").live('click', function() {
        var tr = j(this).parent().parent().parent().parent();
        j(tr).remove();
        var url = j(this).attr('href');
        var nonce = get_var_in_url(url, "_wpnonce");
        var suggested_group_id = get_var_in_url(url, "suggest_id");
        j.post(ajaxurl, {
            action: "group_suggest_remove_suggestion",
            cookie: encodeURIComponent(document.cookie),
            'suggestion_id': suggested_group_id,
            '_wpnonce': nonce
        }, function(response) {
            return false;
        });
        return false;
    });

//remove button on groups directory page
    j(".remove-from-groups-page a").live('click', function() {
        var button = j(this);
        button.addClass('loading');
        var li = j(this).parent().parent().parent();
        var url = j(this).attr('href');
        var nonce = get_var_in_url(url, "_wpnonce");
        var suggested_group_id = get_var_in_url(url, "suggest_id");
        j.post(ajaxurl, {
            action: "group_suggest_remove_suggestion",
            cookie: encodeURIComponent(document.cookie),
            'suggestion_id': suggested_group_id,
            '_wpnonce': nonce
        }, function(response) {
            button.removeClass('loading');
            j(li).remove();

            var numhidden = parseInt(j("#num_hidden_groups").html()) + 1;
            j("#num_hidden_groups").html(numhidden);

            var lssuggestions = parseInt(j("#groups-lssuggestions span").html()) - 1;
            j("#groups-lssuggestions span").html(lssuggestions);

        });
        return false;
    });

//remove button on group home page
    j("a.removesuggestion-group").live('click', function() {

        var url = j(this).attr('href');
        var divit = j(this).parent();
        var button = j(this);
        button.addClass('loading');
        var nonce = get_var_in_url(url, "_wpnonce");
        var suggested_group_id = get_var_in_url(url, "suggest_id");
        j.post(ajaxurl, {
            action: "group_suggest_remove_suggestion",
            cookie: encodeURIComponent(document.cookie),
            'suggestion_id': suggested_group_id,
            '_wpnonce': nonce
        }, function(response) {
            button.removeClass('loading');
            divit.html("<p>" + l10nBpGrSug.remove_done + "</p><br/>");
            j(this).remove();
        });
      

        
        
        return false;
    });

//reset groups suggestions list
    j(".reset-group-suggestions a").live('click', function() {
        var url = j(this).attr('href');
        var button = j(this);
        button.addClass('loading');
        var nonce = get_var_in_url(url, "_wpnonce");
        j.post(ajaxurl, {
            action: "group_reset_suggestions",
            timeout: 50,
            cookie: encodeURIComponent(document.cookie),
            '_wpnonce': nonce
        }, function(response) {
            if (response > 0) {
                //copy from buddypress global.js
                if (j('.item-list-tabs li.selected').length)
                    var el = j('.item-list-tabs li.selected');
                else
                    var el = j('li.filter select');

                var page_number = 1;
                var css_id = el.attr('id').split('-');
                var object = css_id[0];
                var search_terms = false;
                bp_filter_request(object, j.cookie('bp-' + object + '-filter'), jq.cookie('bp-' + object + '-scope'), 'div.' + object, search_terms, page_number, j.cookie('bp-' + object + '-extras'));

                var lssuggestions = parseInt(j("#groups-lssuggestions span").html()) + parseInt(response);
                j("#groups-lssuggestions span").html(lssuggestions);
            }
            button.removeClass('loading');
        });
        return false;
    });


//helper
    function get_var_in_url(url, name) {
        if (url != '') {
            var urla = url.split("?");
            var qvars = urla[1].split("&");//so we hav an arry of name=val,name=val
            for (var i = 0; i < qvars.length; i++) {
                var qv = qvars[i].split("=");
                if (qv[0] == name)
                    return qv[1];
            }
            return '';
        }
        else {
            return false;
        }
    }

    function gotogroupstab() {
        var scope = get_var_in_url(location.search, "scope");
        if (scope) {
            var object = 'groups';
            if ('activity' == object)
                return false;
            var filter = j("#" + object + "-order-select select").val();
            var search_terms = j("#" + object + "_search").val();
            bp_filter_request(object, filter, scope, 'div.' + object, search_terms, 1, j.cookie('bp-' + object + '-extras'));
            return false;
        }
    }
});