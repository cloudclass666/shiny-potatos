=== BuddyPress Create Group Type ===
Contributors: wbcomdesigns, vapvarun
Tags: buddypress,group-type, group type, create group, BuddyPress group, Group Filter
Donate link: https://wbcomdesigns.com/donate/
Requires at least: 4.6
Tested up to: 5.4.1
Stable tag: trunk
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

This plugin adds a Group Type search and filter at BuddyPress Group Directory. It also allows displaying group types as Tabs for Group Directory.

== Description ==
BuddyPress 2.6 introduced the concept of group types. It will help to create group type. This plugin adds a new feature to BuddyPress, group types that allow site admin to add group types.

If you have to display any number of group type as Tabs at group directory page which will list only a specific type of groups which belong to specific group type.

[youtube https://www.youtube.com/watch?v=ozOQz-z19cg]

**If you like the plugin functionality, please, leave a review to help the plugin grow!**

=== THEME - WORDPRESS THEME WITH OUTSTANDING BUDDYPRESS SUPPORT ===
* [FREE BuddyPress Theme: BuddyX](https://buddyxtheme.com/) - Offers unique layouts with clean code and easy-to-customize options giving you a whole new way to visualize BuddyPress. 

= Links =

*	[Plugin url](https://wbcomdesigns.com/downloads/buddypress-create-group-type/ "BuddyPress Create Group Type" )
*	[Demo]( https://demos.wbcomdesigns.com/ "BuddyPress Create Group Type")


If you need additional help you can contact us at [Wbcom Designs](https://wbcomdesigns.com/contact/).


Note: For Multisite please activate it at which site BuddyPress is activated. Like if BuddyPress is network activated so also network activate this plugin. and use define('BP_ENABLE_MULTIBLOG', true ); in config.php file for separate blog. if BuddyPress is activated separate domain so please activate this plugin to separate blog.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/buddypress-create-group-type` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the \'Plugins\' screen in WordPress
3. Use the Groups-> Group type screen to add group types


== Frequently Asked Questions ==
= What plugin does this plugin require? =
As the name of the plugin justifies, this plugin helps create Group Types for BuddyPress Groups, this plugin requires BuddyPress plugin to be installed and active.

= How does Pre-select Group Types setting work provided in general setting section? =
This setting will pre-select all the created group type while creating a new group.

= How does Enable Group Type Search setting work provided in general setting section? =
This setting provides filter at domain.com/groups page for searching groups by created group types.

= How to a create group type? =
A new group type can be created with help of interface provided at plugin settings page under Group Types tab section.

= How to go for any custom development? =
If you need additional help you can contact us for Custom Development(https://wbcomdesigns.com/contact/).

== Screenshots ==
1. screenshot-1 -
2. screenshot-2 -
3. screenshot-3 -
4. screenshot-4 -
5. screenshot-5 -
6. screenshot-6 -

== Changelog ==

= 2.2.0 =
* Fix - (#57)Load js and css files on plugin pages only.
* Fix - (#49)Added check for class exist
* Fix - (#50)Added check for define constant.
* Fix - Removed Display Directory view link
* Fix - Add Group Type Shortcode lists feature
* Fix - Fixed Network Create Group Type Url issue

= 2.1.0 =
* Fix - Add admin review notice.
* Fix - (#47) Functionality not working for boss theme issue fixed

= 2.0.3 =
* Fix - Reign theme specific issue: Group Types text not visible. #38

= 2.0.2 =
* Fix - Compatibility with BuddyPress 4.3.0. #41

= 2.0.1 =
* Fix - Admin Panel style css fixes

= 2.0.0 =
* Enhancement - Create group types as custom post type.
* Enhancement - Add dedicated directory page option where admin can add custom slug for every group type.
* Enhancement - Add option to show group type on create screen page.
* Enhancement - Add option to preselect group type on create screen page.
* Enhancement - Add option to show group types of a group in directory listing page.
* Enhancement - Improve Backend UI where you can all wbcom plugin's settings at one place.
* Fix - BuddyPress 4.1.0 Compatible

= 1.1.1 =
* Fix - BuddyPress 3.2.0 Compatible
* Fix - Merge display group type tab setting with create group type process.

= 1.1.0 =
* Multisite Fixes

= 1.0.5 =
* Enhancement - WPCS fixes
* Enhancement - Added support for Boss and Kleo theme for search option.
* Enhancement - Added support for Group Tabs
* Enhancement - Update Group Listing with Ajax Query search
* Fix - Layout fixes for group results

= 1.0.4 =
* Fix - All Types search issue
* Fix - Updated support section
* Fix- Added translation files

= 1.0.3 =
* Fix - Settings added to whether or not have all the group types pre checked during group creation.

= 1.0.2 =
* Fix - Plugin multisite support added

= 1.0.1 =
* Fix -  Option updates and JS fixes

= 1.0.0 =
* Fix - Initial Release
