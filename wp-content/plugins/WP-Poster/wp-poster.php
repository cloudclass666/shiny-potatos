<?php

/*
Plugin Name: 文章分享海报
Version:     1.2
Plugin URI:  https://www.xintheme.com/xin-plugins/72965.html
Description: 为你的网站添加文章分享海报功能，显示在文章内容底部，由Canvas绘图生成，非PHP后端生成，节省服务器资源。
Author:      大胡子
Author URI:  https://xintheme.com
*/

function xintheme_excerpt_more($more) {
    return ' ...';
}
add_filter('excerpt_more', 'xintheme_excerpt_more');

// 载入css和js文件
add_action('wp_enqueue_scripts', function () {
	if(is_single()){
		wp_enqueue_style('poster-style', WP_PLUGIN_URL.'/'.dirname(plugin_basename(__FILE__)) .'/static/css/style.css');
      	wp_enqueue_script('poster-main', WP_PLUGIN_URL.'/'.dirname(plugin_basename(__FILE__)) . '/static/js/main.js', ['jquery'], '', true);
	}
});

function wp_poster_scripts() {
  	echo "<script type='text/javascript' src='".WP_PLUGIN_URL.'/'.dirname(plugin_basename(__FILE__))."/static/js/require.min.js?ver=2020.01.11'></script>";
}
add_action( 'wp_footer', 'wp_poster_scripts', 100 );

// 在文章内容底部添加文章分享海报
function xintheme_poster( $content )  {

	if( is_single() ) {

		$xintheme = get_option('Poster');
		$category = get_the_category();

		if ( wp_is_mobile() ) {
			$download = '长按图片即可保存';
		}else{
			$download = '下载海报';
		}
		
		$content .='<div id="post-poster" class="post-poster action action-poster">
			<a href="javascript:;" class="item" data-event="poster-popover">
				<span>生成海报</span>
			</a>
			<div class="poster-qrcode" style="display:none;"></div>
			<div class="poster-popover-mask" data-event="poster-close"></div>
			<div class="poster-popover-box">
				<a class="poster-download btn btn-default" download="'.get_the_id().'.jpg">
					<span>'.$download.'</span>
				</a>
			</div>
		</div>';
			
		$content .= "<script>
			window.poster_img={
				uri        : '".WP_PLUGIN_URL.'/'.dirname(plugin_basename(__FILE__))."',
				ver        : '1.0',
				bgimgurl   : '".WP_PLUGIN_URL.'/'.dirname(plugin_basename(__FILE__))."/static/images/xuxian.png',
				post_title : '".get_the_title()."',
				logo_pure  : '".$xintheme['logo']."',
				att_img    : '".poster_thumbnail()."',
				excerpt    : '".get_poster_excerpt($post, 250)."',
				author     : '".get_the_author()."',
				cat_name   : '".$category[0]->cat_name."',
				time_y_m   : '".get_the_time("Y年m月")."',
				time_d     : '".get_the_time("d")."',
				site_motto : '".$xintheme['motto']."'
			};
		</script>";
	}
	return $content;

}
add_filter('the_content', 'xintheme_poster');

// 插件设置菜单
add_action('admin_menu', 'poster_submit_menu'); 
function poster_submit_menu() {
	add_submenu_page('options-general.php','文章分享海报', '文章海报', 'manage_options', 'poster_xintheme','poster_submit_options', '');
}

// 添加插件链接
add_filter( 'plugin_action_links', 'poster_submit_Link', 10, 2 );
function poster_submit_Link( $actions, $plugin_file ) {
	static $plugin;
	if (!isset($plugin))
		$plugin = plugin_basename(__FILE__);
	if ($plugin == $plugin_file) {
			$site_link	= array('support' => '<a href="https://www.xintheme.com/xin-plugins/72965.html" target="_blank">来源</a>');
			$settings	= array('settings' => '<a href="options-general.php?page=poster_xintheme">设置</a>');
			$actions 	= array_merge($settings, $actions);
			$actions	= array_merge($site_link, $actions);
	}
	return $actions;
}

// 插件设置页面
function poster_submit_options() {

	// 保存数据
	if(isset($_POST['Poster'])){
		$logo = trim($_POST['logo']);
		$motto = trim($_POST['motto']);
		$default_timthumb = trim($_POST['default_timthumb']);
		$xintheme = array( 
			'logo'	=> $logo,
			'motto'	=> $motto,
			'default_timthumb'=> $default_timthumb,
		);
		@update_option('Poster', $xintheme);

		echo '<div class="updated" id="message"><p>保存成功</p></div>';
	}
	
	$xintheme = get_option('Poster');

	echo '<div class="wrap">';
	echo '<h2>文章分享海报</h2>';
	echo '<form method="post">';
	echo '<table class="form-table">';

	echo '<p><strong>注意事项</strong>：<br><br>
	为你的网站添加文章分享海报功能，显示在文章内容底部，由Canvas绘图生成，非PHP后端生成，节省服务器资源。<br><br>
	以下设置不要使用外链，不要使用外链，不要使用外链。如果网站使用了阿里云OSS，自己到阿里云设置「跨域设置」。<br><br>
	</p>';

	echo '<tr valign="top">';
	echo '<th scope="row">文章默认缩略图地址</th>';
	echo '<td><input style="width: 60%;" class="regular-text" type="url" name="default_timthumb" required="required" value="'.$xintheme['default_timthumb'].'" /><p>不要使用外链，文章内没有图片的时候，海报使用默认缩略图，建议尺寸：720*500</p></td>';
	echo '</tr>';

	echo '<tr valign="top">';
	echo '<th scope="row">海报Logo地址</th>';
	echo '<td><input style="width: 60%;" class="regular-text" type="url" name="logo" required="required" value="'.$xintheme['logo'].'" /><p>不要使用外链，建议尺寸：244*80(或同比放大)</p></td>';
	echo '</tr>';
	
	echo '<tr valign="top">';
	echo '<th scope="row">Logo标语</th>';
	echo '<td><input class="regular-text" type="text" name="motto" required="required" value="'.$xintheme['motto'].'" /><p>请输入一段简短的句子，显示在海报Logo下面</p></td>';
	echo '</tr>';

	
	echo '</table>';
	echo '<p class="submit">';
	echo '<input type="submit" name="Poster" id="submit" class="button button-primary" value="保存更改" />';
	echo '</p>';
	echo '</form>';

	echo '</div>';
}

// 海报文章摘要
function get_poster_excerpt($post, $excerpt_length=240){
    if(!$post) $post = get_post();

    $post_excerpt = $post->post_excerpt;
    if($post_excerpt == ''){
        $post_content = $post->post_content;
        $post_content = do_shortcode($post_content);
        $post_content = wp_strip_all_tags( $post_content );

        $post_excerpt = mb_strimwidth($post_content,0,$excerpt_length,'…','utf-8');
    }

    $post_excerpt = wp_strip_all_tags( $post_excerpt );
    $post_excerpt = trim( preg_replace( "/[\n\r\t ]+/", ' ', $post_excerpt ), ' ' );

    return $post_excerpt;
}


// 获取文章缩略图

function poster_thumbnail($width=720, $height=500,$echo = 1){

    $xintheme = get_option('Poster');
    $default_timthumb = $xintheme['default_timthumb'];

	global $post;

	if( has_post_thumbnail() ){
        $timthumb_src = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'full');
		$src = $timthumb_src[0];

	}else{
		ob_start();
		ob_end_clean();
		$output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches ,PREG_SET_ORDER);
		$cnt = count( $matches );
		if($cnt>0){
			$src = $matches[0][1];
		}else{
			$src = $default_timthumb;
		}
	}

	$poster_thumbnail_url = poster_crop_thumbnail($src,$width,$height);

	return $poster_thumbnail_url;
	
}

if( !defined( 'THEME_THUMBNAIL_PATH' ) ) define( 'THEME_THUMBNAIL_PATH', '/cache/poser-thumbnail' ); //存储目录
function poster_build_empty_index( $path ){ //生成空白首页
    $index = $path . '/index.php';
    if( is_file( $index ) ) return;
    wp_mkdir_p( $path );
    file_put_contents( $index, "<?php\n// Silence is golden.\n" );
}
function poster_crop_thumbnail( $url, $width, $height = null ){ //裁剪图片
    $width = (int) $width;
    $height = empty( $height ) ? $width : (int) $height;
    $hash = md5( $url );
    $file_path = constant( 'WP_CONTENT_DIR' ) . constant( 'THEME_THUMBNAIL_PATH' ) . "/$hash-$width-$height.jpg";
    $file_url = content_url( constant( 'THEME_THUMBNAIL_PATH' ) . "/$hash-$width-$height.jpg" );
    if( is_file( $file_path ) ) return $file_url;
    $editor = wp_get_image_editor( $url );
    if( is_wp_error( $editor ) ) return $url;
    $size = $editor->get_size();
    $dims = image_resize_dimensions( $size['width'], $size['height'], $width, $height, true );
    //if( !$dims ) return $url;
    $cmp = min( $size['width'] / $width, $size['height'] / $height );
    if( is_wp_error( $editor->crop( $dims[2], $dims[3], $width * $cmp, $height * $cmp, $width, $height ) ) ) return $url;
    poster_build_empty_index( constant( 'WP_CONTENT_DIR' ) . constant( 'THEME_THUMBNAIL_PATH' ) );
    return is_wp_error( $editor->save( $file_path, 'image/jpg' ) ) ? $url : $file_url;
}