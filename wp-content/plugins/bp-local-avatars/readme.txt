=== BP Local Avatars ===
Contributors: shanebp
Donate link: https://www.philopress.com/donate/
Tags: BuddyPress, members, groups, avatars, gravatars
Author URI: https://philopress.com/
Plugin URI: https://philopress.com/
Requires at least: 4.0
Tested up to: 5.4
Stable tag: 3.0
License: GPLv2 or later

A BuddyPress plugin that creates Gravatar avatars for any user or group without one, and stores them locally.

== Description ==

BP Local Avatars is a BuddyPress plugin.

Do you have members or groups on your BuddyPress site who do not have an Avatar?
And you do not want to show the generic default avatar?
Or maybe you do not want each page view to include a lot of calls to gravatar.com to load avatars?

* This plugin will create a Gravatar Identicon avatar, thumb and full versions, for any user who does not already have an Avatar, and save it locally.
* Supports user creation, user registration, user login, and Bulk Generation for user and groups.
* Uses the existing BuddyPress avatar directory structure.
* Conforms to the defined sizes for BuddyPress thumb and full avatars.
* Users can still upload an avatar via their profile.
* Groups can still upload an avatar via Group > Manage > Photo.


Usage:

1. Provides an option in wp-admin under:
Settings -> Discussion > Default Avatar > BuddyPress Identicon (Generated and Stored Locally).

2. Select and Save. Otherwise this plugin will not do anything.

3. After saving, you will see a link to 'Bulk Generate' avatars for all users and groups who do not have a local avatar. If a user already has their own Gravatar, it will save it locally.


For more BuddyPress plugins, please visit [PhiloPress](https://www.philopress.com/)


== Installation ==

1. Unzip and then upload the 'bp-local-avatars' folder to the '/wp-content/plugins/' directory

2. Activate the plugin through the 'Plugins' menu in WordPress

3. Go to Settings -> Discussion and scroll down to 'Default Avatar'. Select and Save the option called 'BuddyPress Identicon (Generated and Stored Locally)'.


== Frequently Asked Questions ==

= Does it support Monsterid and Wavatar? =
 Yes, but it defaults to Identicon.
 You can change the type of avatar created by adjusting the calls in 'public function create()'

= Are there any server requirements? =
 Just this: requires that 'allow_url_fopen' is set to true.  Which is the default setting on most servers.


== Screenshots ==
1. Shows the new Default Avatar option and Bulk Generation link in Settings > Discussion > Avatars


== Changelog ==

= 3.0 =
Tested with WP 5.4
Now generates avatars if a dir exists but is empty

= 2.2 =
Bug that caused broken avatars on comments by anonymous users - Fixed

= 2.1 =
Tested with WP 4.7 and BP 2.7.2

= 2.0 =
Updated call to gravatar.com to conform with new request format.

= 1.9 =
Tested in WP 4.3

= 1.8 =
Add admin notice after avatars are generated

= 1.7 =
Tweak for icon in Settings > Discussion > Default Avatar option

= 1.6 =
Tested with WP 4.2, adds check for BP, on deactivation will reset default avatar to Mystery

= 1.5 =
Added support for Group avatars

= 1.4 =
Tested with WP 4.1.1

= 1.2 =
* remove global

= 1.1 =
* readme spelling

= 1.0 =
* Initial release




== Upgrade Notice ==

= 3.0 =
Tested with WP 5.4
Now generates avatars if a dir exists but is empty

= 2.2 =
Bug that caused broken avatars on comments by anonymous users - Fixed

= 2.1 =
Tested with WP 4.7 and BP 2.7.2

= 2.0 =
Updated call to gravatar.com to conform with new request format. You may need to deactivate & reactivate this plugin after updating.

= 1.9 =
Tested in WP 4.3

= 1.8 =
Add admin notice after avatars are generated

= 1.7 =
Tweak for icon in Settings > Discussion > Default Avatar option

= 1.6 =
Tested with WP 4.2, adds check for BP, on deactivation will reset default avatar to Mystery

= 1.5 =
Added support for Group avatars

= 1.4 =
Tested with WP 4.1.1

= 1.2 =
Remove global

= 1.0 =


