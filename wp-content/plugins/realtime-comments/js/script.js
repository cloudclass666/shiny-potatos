/*jslint browser: true, continue: true, regexp: true, plusplus: true, sloppy: true */
/*global $RTC */
/*global jQuery */
/*global console */

$RTC.debug = function (txt) {
    if (typeof $RTC.debuginfo === 'string') {
        console.debug(txt);
    }
}

$RTC.getAutoTheme = function () {
    if ($RTC.comment_list_class === 'commentlist') {
        // theme based on twentyten
        $RTC.comment_list_tag = 'ol';
        $RTC.comment_tag = 'li';
        $RTC.comment_id_prefix = '#li-comment-';
        $RTC.children_class = 'children';
    } else {
        // theme based on twentythirteen or newer themes
        $RTC.comment_list_tag = 'ul';
        $RTC.comment_tag = 'li';
        $RTC.comment_id_prefix = '#comment-';
        $RTC.children_class = 'children';
    }
}

$RTC.getCommentListContainer = function () {
    var parent_found = false;
    if (typeof $RTC.comment_list_class === 'string' && (jQuery($RTC.comment_list_el + ' .' + $RTC.comment_list_class).length > 0)) {
        parent_found = true;
    } else if (jQuery($RTC.comment_list_el +' .commentlist').length > 0) {
        $RTC.comment_list_class = 'commentlist';
        $RTC.getAutoTheme();
        parent_found = true;
    } else if (jQuery($RTC.comment_list_el + ' .comment-list').length > 0) {
        $RTC.comment_list_class = 'comment-list';
        $RTC.getAutoTheme();
        parent_found = true;
    }

    if (!parent_found) {
        // create root container
        if (typeof $RTC.comment_list_class !== 'string') {
            $RTC.comment_list_class = 'comment-list';
            $RTC.getAutoTheme();
        }
        jQuery($RTC.comment_list_el).prepend('<' + $RTC.comment_list_tag + ' class="' + $RTC.comment_list_class + '"></' + $RTC.comment_list_tag + '>');
    }
    $RTC.container = jQuery($RTC.comment_list_el + ' .' + $RTC.comment_list_class);
    $RTC.debug('Comment-list container is ' + $RTC.container);
};

$RTC.getCommentContainer = function (comment_id) {
    // returns 'li' type of object, false if not found
    // purpose: modify, append or remove 'li' object content
    var container = false;
    if (jQuery($RTC.comment_tag + $RTC.comment_id_prefix + comment_id).length > 0) {
        container = jQuery($RTC.comment_tag + $RTC.comment_id_prefix + comment_id);
    }
    return container;
};

$RTC.getParentContainer = function (parent_id) {
    // returns 'ol' type of container object, additionally 'is_root' parameter
    // purpose: get container where to add {append|prepend} child nodes (type of 'li')
    var parent_object = false,
        parent_container = false,
        is_root = false;
    if (parent_id > 0) {
        parent_object = $RTC.getCommentContainer(parent_id);
        if (typeof parent_object === 'object') {
            if (parent_object.children('.' + $RTC.children_class).length === 0) {
                // children container does not exist, create
                parent_object.append('<' + $RTC.comment_list_tag + ' class="' + $RTC.children_class + '"></' + $RTC.comment_list_tag + '>');
            }
            parent_container = parent_object.children('.' + $RTC.children_class);
        } else {
            return false;
        }

    } else {
        is_root = true;
        parent_container = $RTC.container;
    }

    return {container: parent_container, is_root: is_root};
};


$RTC.addComment = function (comment) {
    var parent = $RTC.getParentContainer(comment.parent),
        me = $RTC.getCommentContainer(comment.id),
        new_max = parseInt(comment.id, 10);
    if (new_max > $RTC.max_c_id) {
        $RTC.max_c_id = new_max;
    }
    $RTC.debug('Change of ' + comment.id);
    if (comment.status === 'I') {
        if (me) {
            // it already exists, update article content
            // Bug: if comment is parent, children will get lost
            $RTC.debug('Update');
            me.replaceWith(comment.html);
        } else if (typeof parent === 'object') {
            $RTC.debug('Insert');
            // exists parent, add to it
            if (parent.is_root && $RTC.order === 'desc') {
                parent.container.prepend(comment.html);
            } else {
                parent.container.append(comment.html);
            }
        }
    } else if (comment.status === 'D') {
          // delete
        if (me) {
            $RTC.debug('Delete');
            me.remove();
        }
    } else {
        $RTC.debug('Error: ' + comment.id + ' approved is ' + comment.approved + '?');
    }
};

$RTC.countComments = function () {
    // .children() method differs from .find() in that .children() only travels a single level down the DOM tree
    return jQuery('.' + $RTC.comment_list_class).children($RTC.comment_tag).length;
};

$RTC.removeOldestComment = function () {
    if ($RTC.order === 'desc') {
        jQuery($RTC.container).children($RTC.comment_tag).last().remove();
    } else {
        jQuery($RTC.container).children($RTC.comment_tag).first().remove();
    }
    $RTC.debug('removed one oldest comment');
}

$RTC.paginate = function () {
    var numcomments = $RTC.countComments(), i;
    // tambov is here to avoid posting user to land to white page with only one comment
    // not sure if needed
    if ($RTC.comments_per_page > 0) {
        for (i = 0; i < (numcomments - $RTC.comments_per_page); i++) {
            $RTC.removeOldestComment();
        }
    }
}

$RTC.getComments = function () {
    var send = {
        'action': 'rtc_update',
        'rtc_bookmark': $RTC.bookmark,
        'postid': $RTC.postid,
        'max_c_id': $RTC.max_c_id,
        'nonce': $RTC.nonce
    },
        i;
    jQuery.ajax({
        url: $RTC.ajaxurl,
        data: send,
        dataType: 'json',
        // dataType: 'text',
        type: 'get',
        cache: false,
        success: function (response) {
            $RTC.debug(response);
            $RTC.bookmark = response.bookmark;
            if (response.status === 200) {
                // approve|hold|spam|trash
                for (i = 0; i < response.comments.length; i++) {
                    if (response.comments[i].parent > 0 || $RTC.is_last_page === '1') {
                        // to last page add all comments
                        // to not attempt to add root level comments to older comments pages
                        $RTC.addComment(response.comments[i]);
                        if ($RTC.is_last_page === '1' && $RTC.dyn_next === '0') {
                            // paginate is needed only on "newest comments" page, because others cannot have new toplevel comments
                            // paginate is needed only if dynamic pagination is not chosen
                            $RTC.paginate();
                        }
                    }
                }
            } else if (response.status === 304) {
                // console.debug('contents not modified, do nothing');
            } else {
                // not comments context, disable loop
                return false;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $RTC.debug('error: ' + textStatus);
            return false;
        }
    });
    return true;
};

$RTC.nextPage = function () {
    var send = {
        'action': 'rtc_next_page',
        'postid': $RTC.postid,
        'last_comment': $RTC.last_comment,
        'nonce': $RTC.nonce
    },
        i;
    jQuery.ajax({
        url: $RTC.ajaxurl,
        data: send,
        dataType: 'json',
        // dataType: 'text',
        type: 'get',
        cache: false,
        success: function (response) {
            $RTC.debug(response);
            $RTC.last_comment = response.last_comment;
            if (response.status === 200) {
                $RTC.container.append(response.html);
                $RTC.dynamic_pagination_not_used = false;
                if ($RTC.last_comment === 0 || $RTC.last_comment === '0') {
                    jQuery('#load_more_comments').remove();
                }
            } else {
                $RTC.debug('Unknown response');
                return false;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            $RTC.debug('error: ' + textStatus);
            return false;
        }
    });
    return true;
};


$RTC.init = function () {
    var success = true, interval;
    $RTC.debug('Is last page ' + $RTC.is_last_page);
    $RTC.debug('Debug: ' + $RTC.debuginfo);
    $RTC.getCommentListContainer();
    if ($RTC.dyn_next === '1') {
        $RTC.container.after('<button onClick="javascript:$RTC.nextPage();" id="load_more_comments">Load More Comments</button>');
    }
    $RTC.refresh_interval = parseInt($RTC.refresh_interval, 10);
    $RTC.max_c_id = parseInt($RTC.max_c_id, 10);
    $RTC.debug('This page has ' + $RTC.countComments() + ' toplevel comments');
    // new toplevel comments must be added only to "newest comments" page
    if ($RTC.refresh_interval > 100) {
        interval = setInterval(function () {
            success = $RTC.getComments();
            if (!success) {
                clearInterval(interval);
                $RTC.debug('stop');
            }
        }, $RTC.refresh_interval);
    }
};

jQuery(document).ready(function () { $RTC.init(); });
$RTC.debug('Realtime comments loaded');