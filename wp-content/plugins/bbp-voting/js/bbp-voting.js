function bbpress_post_vote_link_clicked(post_id, direction) {
    var data = {
        'action': 'bbpress_post_vote_link_clicked',
        'post_id': post_id,
        'direction': direction
    };
    jQuery.post(ajax_object.ajax_url, data, function(response){
        if(response !== "0") {
            console.log('Voted ' + direction + ' for ' + post_id + ': ' + response);
            jQuery('.bbp-voting.bbp-voting-post-'+post_id).each(function() {
                var wrapper = jQuery(this);
                var score_el = jQuery(this).find('.score');
                var score = parseInt(response); //score_el.text()) + +direction;
                score_el.html(score);
                var up_el = jQuery(this).find('.up');
                var down_el = jQuery(this).find('.down');
                if(direction > 0) {
                    var up = parseInt(up_el.attr('data-votes') || 0) + +direction;
                    up_el.attr('data-votes', '+' + up).css('border-bottom-color', '#1e851e');
                    wrapper.removeClass('voted-down').addClass('voted-up');
                } else if (direction < 0) {
                    var down = parseInt(down_el.attr('data-votes') || 0) + +direction;
                    down_el.attr('data-votes', down).css('border-top-color', '#992121');
                    wrapper.removeClass('voted-up').addClass('voted-down');
                }
                console.log('Score: '+score);
            });
        } else {
            console.log('Already voted.');
        }
    });
}