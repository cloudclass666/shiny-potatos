/**
* @name     Wp-Player Admin JS
* @desc     MetaBox JavaScript
* @depend   jQuery
* @author   M.J
* @date     2014-12-19
* @update   2015-02-06
* @URL      http://webjyh.com
* @version  2.5.1
* 
*/
jQuery(document).ready(function(){var a=window.send_to_editor;jQuery(".WP-Player-File").on("click",function(){var b=jQuery(this).prev(),c=b.attr("id");tb_show("","media-upload.php?media-upload.php?type=image&amp;TB_iframe=true");window.send_to_editor=function(e){var d=jQuery(e).attr("href"),f=b.val();tb_remove();jQuery("#"+c).val(f+"\r"+d);window.send_to_editor=a};return false});jQuery("#wp-player-tabs > li").on("click",function(){var b=jQuery(this).index();jQuery(this).addClass("current").siblings().removeClass("current");jQuery("#wp-player-row > div").hide().eq(b).fadeIn()});jQuery("#wp_player_get_xiami_id").on("click",function(){var i=jQuery("#wp_player_music_type"),d=i.find("option").length,b=jQuery("#mp3_xiami"),f=jQuery("#mp3_xiami_type"),j=b.val(),g=[/^http[s]?:\/\/\w*[\.]?xiami.com+\/(\w+)\/+(\d+).*$/,/^http:\/\/music.163.com\/#.*\/{1}(.+)\?id=(\d+)$/],h=["xiami","netease"],l={},e=null;if(typeof j===undefined||j==""){b.focus();return false}var c=(j.indexOf("163.com")>-1&&d>1)?e=1:e=0,k=j.match(g[e]);if(e==0&&!k&&!jQuery.isNumeric(j)){alert("\u83b7\u53d6\u97f3\u4e50ID\u5931\u8d25\uff01");return false}if(jQuery.isArray(k)){l.type=k[1];l.id=k[2]}else{if(!jQuery.isNumeric(j)){alert("\u83b7\u53d6\u97f3\u4e50ID\u5931\u8d25\uff01")}}if(jQuery.isArray(k)&&l.type&&l.id){if(l.type=="playlist"){l.type="collect"}b.val(l.id);i.children("option").prop("selected",false);f.children("option").prop("selected",false);i.find("option[value="+h[e]+"]").prop("selected",true);f.find("option[value="+l.type+"]").prop("selected",true)}})});