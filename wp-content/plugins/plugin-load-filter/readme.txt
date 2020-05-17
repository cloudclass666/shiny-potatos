=== Plugin Load Filter ===
Contributors: enomoto celtislab
Tags: plugin, dynamic activate, dynamic deactivate, filter, logic, performance
Requires at least: 4.7
Tested up to: 5.3
Stable tag: 3.1.1
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Dynamically activate the selected plugins for each page. Response will be faster by filtering plugins.

== Description ==

Although you may have installed a lot of plugins, you may not want (or need) them activated for all of your posts and pages. With this plugin, you will be able to deactivate unnecessary plugins for each individual post and page.

By filtering the activation of plugins, you can significantly speed up your website.

Features

 * Support Post Format type
 * Support Custom Post type
 * Support Jetpack Modules filtering
 * Support WP Embed Content card (is_embed template)
 * Support URL Filter for Expert (REST API / Heartbeat / Ajax / AMP / etc)

In addition to blog posts and pages, for example providing services as a Web application, you can also distinguish the plugins for blog and Web applications.


= To further performance up plugin =

[YASAKANI Cache](https://wordpress.org/plugins/yasakani-cache/) is a simple and easy to use super high speed page cache.


For more detailed information, there is an introduction page in Japanese. Please translate it in Google Translate etc.

[日本語の説明](http://celtislab.net/wp_plugin_load_filter/ "Documentation in Japanese")


== Installation ==

1. Upload the `plugin-load-filter` folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the `Plugins` menu in WordPress
3. Set up from `Plugin Load Filter` to be added to the Plugins menu of Admin mode.

Note

 * This plugin is required PHP 5.6 or higher
 * This plugin to automatically activated as must-use plugin installed plf-filter.php file to MU-plugins folder. Depending on the permissions of the folders and files there is a possibility that it is not possible to install the plf-filter.php file.
 * There is also plugins that can not be filtering, such as cache plugins or must-use plugins.

Usage

 * URL Filter is normally all active. It is used when there is a plugin that you want to deactive specially for requests such as REST API, Ajax, AMP, etc.

  * REST API(wp-json) / Heartbeat(admin-ajax) / Ajax(admin-ajax) / amp / etc (custom url filter keyword)

 * In the Page Type Filter, you can choose from two types of filters as needed (Filter Registration)
 
  * Admin Page : Register the plugins to be used only in admin page.
  * Page Type : Register the plugins for selecting whether to activate each Page type or Post. Page Type registration plugins are once blocked, but is activated by `Page Type filter Activation` setting.

 * Select the plugins from `Page Type Filter` registration to activate (Page Type filter Activation)

  * Desktop/Mobile Filter : plugins to be used only in desktop/moble device. (wp_is_mobile function use)
  * Select the plugins that you want to activate for each Page type or Post Format type or Custom Post type.
  * Can be selected plugins to activate from Post content editing screen

 * Check

  * Please perform sufficient test whether the setting is working as expected.
  * Please also check the operation if you add or remove a plugin.
  * Filter priority : URL Filter > Admin Page > Each Post Filter > Page Type Filter

== Upgrade Notice ==

= 3.1.0 =
URL filter is changed incompatible with the old version, so if you used it you need to reset it. 

== Screenshots ==

1. Filter Registration setting.
2. Page Filter Activation setting.
3. Setting of each post

== Changelog ==

= 3.1.1 =
* 2019-12-2 Fixed bug where filtering did not work when the permalink structure was set to "Plain".

= 3.1.0 =
* 2019-2-25 change. URL Filter specification (available character types and maximum number of registrations) 　　

= 3.0.5 =
* 2019-2-18 Fixed. plf-filter PHP Warning (Illegal offset type). 　　

= 3.0.4 =
* 2018-8-15 Meta Boxes CSS adjustment when using gutenberg editor. 　　

= 3.0.3 =
* 2018-6-6  Fixed. Exclude plugin_load_filter action from Ajax URL Filter.　　　　　　　

= 3.0.2 =
* 2018-5-23  Fixed bug that the filter did not work on bbPress private page, and URL filter priority modification.　　　　　　　

= 3.0.0 =
* 2018-5-11  Add REST API and Ajax request judgment function to URL filter (incompatible with old version).

= 2.5.1 =
* 2017-5-11   Add confirmation dialog to clear setting button. And Fix regular expression for AMP / URL page judgment.

= 2.5.0 =
* 2017-1-20   AMP/URL page filter support. And addition of monitoring process of "rewrite_rule" data for custom post type.

= 2.4.1 =
* 2016-10-21  fix. Archive of judgment miss (category, tag), and corresponding at the time of custom post type used to "rewrite_rules", "wp_post_statuses". 

= 2.4.0 =
* 2016-08-31  Multisite support.

= 2.3.1 =
* 2016-06-20  When the plugin update, has been fixed because there was a case of plf-filter file of MU-plugins folder is not updated

= 2.3.0 =
* 2016-06-17  Change user interface option settings. And is_embed template support. (Filter for WP Embed content card API)

= 2.2.1 =
* 2016-04-18  WP4.5 support. (get_currentuserinfo is deprecated since version 4.5! change wp_get_current_user)

= 2.2.0 =
* 2015-07-23  Code cleanups (Stop the use of transient API cache of intermediate processing data)

= 2.1.0 =
* 2015-04-30  Change user interface option settings screen.

= 2.0.1 =
* 2015-04-22  Exclude GET request(with? Parameters) to the home page from the filter. For example, Link to download the Download Manager plugins.

= 2.0.0 =
* 2015-04-16  Release
 
