=== Super CAPTCHA Security Suite - Hardened 3D CAPTCHA ===
Contributors: leewells
Donate link: http://goldsborowebdevelopment.com/product/super-captcha/
Tags: CAPTCHA, spam, anti-spam, splog, anti-splog, super-captcha, bot, anti-bot, security, protection, buddypress, bbpress, 3D, admin, multisite, login, registration, comments, dashboard
Requires at least: 4.0.0
Tested up to: 4.5.2
Stable tag: 3.1.0
License: Copyright (C) 2015 Goldsboro Web Development, AGPLv3
License URI: http://www.gnu.org/licenses/agpl.html

Scientifically proven by research from the University of Wollongong as the most secure text-based 3D CAPTCHA available -- on the most simple settings.

== Description ==

Read the [SCIENTIFIC RESEARCH](http://ro.uow.edu.au/cgi/viewcontent.cgi?article=4088&context=eispapers) by the University of Wollongong, Australia. Spoiler: the results are around page 20.

You've been there, you have installed *20 or more* CAPTCHA plugins for WordPress to see them ultimately **fail** in even slowing down spam bots. We know, **we have been there too**. I used to run a
a very high-profile BuddyPress community website that lost its moderators and administrators because of the web-spam issue.  We tried everything, Aksmet, ReCaptcha, and nothing seemed to work.
This is because spam bots are reading images with OCR technology. With only 3 minutes of setup on your site, their accuracy at solving your CAPTCHAs are a stunning 92%. This made me think outside the box and answer my own question: What
can I do to make it virtually impossible for a computer to know what a human would know.  

This lead to the first-ever text-based 3-D CAPTCHA and it was born right here on WordPress.org.  The 
technology is so incredibly simple it is mind-blowing -- render a transparent image of text and lay lines on top of it.  Sounds too easy right?  It is for a human.  You can see this image and
can immediately see what's missing.  A computer however would have to employ reasoning engines to determine what is missing.  Our CAPTCHA has been broken by OCR bots programmed specifically
for the easiest setting, but only at a 27% success rate. Most other plugins you will find on WordPress.org has a 70-99% success rate!  

The same [university study](http://ro.uow.edu.au/cgi/viewcontent.cgi?article=4088&context=eispapers) that broke our captcha admitted,
ramping up the settings will make it ' UNBREAKABLE '. While everyone is trying to complicate their CAPTCHAs with images, flash puzzles, and coloring it like a 2 year old with
eight-inch markers, we decided to make an image provoke deduction skills.

This plugin no longer offers the CAPTCHA programming itself and the core image generation is hosted by [Goldsboro Web Development](http://goldsborowebdevelopment.com/) and you are granted
FREE API access through via [MyGWD Spam Database](http://spam.goldsborowebdevelopment.com).  This means you are not required to have GD or Freetype installed.
This was a decision made to ensure compatibility and to maintain rights to the future development of the platform. By passing the CAPTCHA code to our server, allowing us to process it and
display the CAPTCHA in an iFrame on your site, we are able to ensure that 100% of WordPress administrators with up-to-date servers are able to use this stunning CAPTCHA. Also, we are able to grab, 
monitor, and detect when bots are attacking, find their routines and even stop them from using your precious bandwidth.

The service provided by [Goldsboro Web Development](http://goldsborowebdevelopment.com/) is free and no API key or code is ever required.  At any time you can upgrade to Pro, in which you will be issued a license key.  The price
we charge for Pro is just enough to cover our basic costs, $1.99/mo (basically you're buying us a coffee).  Your price does not increase due to volume.

We didn't aim to just band-aid the spam issue, we aspire to permanently fix it.  To know what I mean, you really have to download the plugin and see for yourself all the features we added to make
securing your site and reporting spamers as easy as possible!  Here is a teaser, we automatically query the abuse email for a spamming IP and pre-populate an Abuse Report email so all you have to do is hit 
"Send".

This plugin is revolutionary in the sense that it employs the most simple technique to solve a very complex problem.  Deduction.  You do it every day, and don't even realize it.  Every time
you feel for your keys in your pocket, or swerve to avoid a pot-hole, you have employed deduction to realize something is missing.  This is a human only feature that isn't available to any other
animal or computer.  By laying lines over a transparent word, a human can easily see the word by deducing from what is missing.  A computer simply looks for edges, and all they find is lines!

Super Captcha uses cloud processing by working in cooperation with your website to identify, stop, and ban spammers. The best way to flag a spammer is repeated failure of a CAPTCHA, but we understand
humans make mistakes too, so we don't kick off a ban from one or even 5 failures.  A spam bot however will visit multiple Super Captcha enabled websites and will try and spam each one.  Users that
fail the captcha on multiple websites, are indeed banned.  When your site helps us pop a spammer, 10 others do the same.  Over the past year, we have identified over 11,000,000 spam bots!  We have
also determined some other interesting data, such as more than 70% of these bots are from China, 10% from Russia, and 10% from the USA.

Why are we doing this?  I've seen some really awesome WordPress communities out there and am a WordPress fan myself, but what gets me cracking on this code in the mornings is the memory of some of these
awesome sites closing down because a spam bot was paid to run over this site, blasting their links every where so the page owner could gain 0.0001% in page ranking, leaving the admin with hours of work
cleaning up after the bot.  Many admins just give up hope and shut the site down - I did once, but I hope this never has to happen again because of a spam bot!

**This CAPTCHA is pre-programmed for the following forms:**

*	WordPress Login
*	WordPress Registration
*	Buddypress Login
*	Buddypress Registration
*	Comment Forms
*	WordPress MU Blog Creation form
*	BuddyPress Blog Creation Form

LEGAL: [GWD Privacy Policy](https://goldsborowebdevelopment.com/privacy-policy/) | [GWD Terms of Service](https://goldsborowebdevelopment.com/legal/terms-of-service/) | [GWD Acceptable Use Policy](https://goldsborowebdevelopment.com/legal/acceptable-use-policy/)

SERVER REQUIREMENTS:

*	PHP v5.3.0 or greater (Highly recommended)
*   Wordpress 4.0 or greater (Previous versions untested)

== Upgrade Notice ==
If you are using Super Captcha versions 2.9 or EARLIER, please uninstall them before installing this product.

== Installation ==

1. Upload the `super-captcha` folder and ALL its contents to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
4. Configure the plugin (if you are running a multi-site install, you must do this from the network administration panel).
5. Read the in-plugin help panel on the configuration page.
 
== DEVELOPERS ==

Please read our forums on WordPress.org for integration development, hooks, and more.  If you need help integrating this plugin into your plugin please ask on our forums.
 
== Frequently Asked Questions ==
= Is this a service? =

Yes.  The CAPTCHA image as well as our black list is all housed on our servers for safe keeping and hardening.  We realize that closing pieces of the source is generally a bad idea, which is why we invite any software engineers to contact us for a copy of the software for security audits (A NDA for anything but security results is required).

= Is a subscription or account registration required? =

Absolutely not.  In fact the only feature behind a paywall is access to the blacklist database which requires a lot of strain on our servers and for security purposes, we cannot just allow anyone to download this database.  However, you can view the statistics of this database here: https://spam.goldsborowebdevelopment.com

= Is there a Pro Version? =

Yes.  The Pro Version does require signup and an API key because you will be allowed direct query access to our database.  It is a nominal fee of $1.95/mo, or the price of a cup of joe.

= How secure is this CAPTCHA?  Will it work? =

According to the scientific research conducted by the University of Wollongong, our CAPTCHA out-preforms any and all others.
http://ro.uow.edu.au/cgi/viewcontent.cgi?article=4088&context=eispapers 
They were also very careful to notate that customizing your CAPTCHA (which this plugin allows you to do for free) will make it exponentially harder to solve by OCR.

= The CAPTCHA and input box does not show up on my forms =

Your theme author is using some crazy stuff or another plugin has driven a wrecking ball through the WordPress hooks process.  In short, you have non-standard output on your site and you need to contact your theme author to have it changed.  You can follow the "Manual Override" instructions in the help context to overcome this yourself, but it is recommended that you encourage your theme/plugin authors to use WordPress at it was intended for cross-compatibility.  

= Do you guys offer any other plugins? =

YES! Several in fact, most of which are not on WordPress YET.  A few we are anticipating uploding in the upcomming quarter is:

* TeamSpeak Auto-Attendant (for automatically generating Server Privilege Keys for your users -- improved security)
* Teamspeak Auto-Join (a simple short-code to place in a widget that allows members to one-click join your server.
* Contact Forms 7 Short Codes (allows use of any shortcode in WordPress inside your Contact Forms 7 forms.
* Feed Runner (a simple plugin that allows you to auto-post feeds from your other WordPress sites)

== Screenshots ==

1. Display of the 3-D captcha protecting BuddyPress signup forms.
2. Display of the 3-D captcha protecting WP signup forms.
3. Display of Super Captcha Pro Control Panel

== Changelog ==
= 3.1.0 =
* :: FEATURE :: We have added the honeypot feature which adds an entirely new layer of security to your website and forms.
* :: COSMETIC :: We have enabled a much easier way to use the API so plugin authors can easily include the functions of this plugin.
* :: INFO :: The help menus have been updated and can be set to dynamically pull in more information about your install.
* :: INFO :: Better statistics have been added to show you how well the plugin is performing.
* :: MISC :: 3.0.7 preimpted this update.

= 3.0.7 =
* :: SECURITY :: Some plugins caused the verification hook for the default login to "unhook".  This has been fixed by adding a unique error identification.
* :: COSMETIC :: The login form will no longer display CAPTCHA error when you first visit it.

= 3.0.6 =
* :: SECURITY :: Added Checksums to Super CAPTCHA images and iframes.  YOU MUST UPDATE TO THIS VERSION TO KEEP USING THE SUPER CAPTCHA SERVICE.

= 3.0.5 =
* :: FEATURE :: Log added.
* :: FEATURE :: Report IP's from the logs or report them to the ISP.
* :: FEATURE :: Service status widget added to let you know how our servers are performing as well as alerting you to any maintenance windows.
* :: FUTURE :: Will be adding the "report IP" button to the logs soonish.

= 3.0.4 THIS IS A HOTFIX RELEASE =
* :: FIX :: The broken link in the update notification has been fixed.

= 3.0.3 =
* :: FEATURE :: Reimplemented previous features that were requested by Wordpress.org to remove.  In order to comply with their rules we have placed a check box that will allow you to turn these features on.
* :: FEATURE :: If your license key is invalid, the system is now more verbose in letting you know why.
* :: FEATURE :: Font size can now be adjusted and tweaked.
* :: FEATURE :: Some back-end work that is preparing the code for the addition of security levels.
* :: FIX :: Error message will no longer display when visiting the login page for the first time.
* :: FIX :: Failed CAPTCHA tests are now being properly reported.
* :: FIX :: IPv6 Support added.

= 3.0.2 =
* :: IMPORTANT:: This version contains "COMPLIANCE" changes to have the plugin listed at WordPress.org.  See our blog for details http://goldsborowebdevelopment.com/blog/
* :: -FEATURE:: Removed ability to test the plugin in your admin panel.  Sorry, this was demanded by WordPress.org
* :: -FEATURE:: Removed ability to request a accidentally submitted IP to be removed. Again this was demanded by the WordPress.org team 
* :: FIX:: Undefined index soft warning from $_REQUEST['page'] has been fixed with !empty( $_REQUEST['page'] ) && ....
* :: FIX:: Readme updated to include Upgrade Options and meet license validation.
* :: FIX:: Suppressed the error generated when using older versions of PHP but other functions will still not work.

= 3.0.1 =
* :: FEATURE:: Dashboard widgets added to allow for quick IP bans and (pro-only) quick IP checking.
* :: FEATURE:: One-Click ISP Abuse Reporting.
* :: FIX:: Fixed some spelling errors.
* :: FIX:: Changed the position of the bottom statistics box.

= 3.0.0 =
* :: FEATURE:: COMPLETELY NEW PLUGIN WITH BRAND NEW AND FRESH SOURCE CODE.
* :: FEATURE:: Image is now remotely hosted and checked -- no more using your bandwidth or worrying about compatibility issues.
* :: FEATURE:: Automatic submission of spam bots to Goldsboro Web Development's Spam Database.
* :: FEATURE:: You can now "Network Activate" and allow everyone to use this plugin on a BuddyPress or MU Install.
* :: FEATURE:: Code now conforms to new PHP 5 syntax.
* :: FEATURE:: No more custom queries which means no more site slowdowns.
* :: FEATURE:: Comprehensive help context added within the plugin.
* :: FIX:: No more credit by-line in your footer.

= 2.5.1 =
* :: FEATURE :: You can now protect your comments with Super CAPTCHA and Super CAPTCHA Pro.  This comes with several new features.
* :: MISC :: Code cleanup

= 2.4.10 = 
* :: MISC :: Visual plugin menu improvments.
* :: MISC :: The sanity checker should now stop nagging you to upgrade your tables every time you save your configuration.

= 2.4.9 =
* :: BUG FIX :: Fixed a php error on the configuration page that caused it to error out or turn white.
* :: BUG FIX :: Admin notices will work again on non-multi site installs (this had been broken by WP for a very long time).
* :: FEATURE :: You can now turn off the banner on the configure page.
* :: FEATURE :: Global notice now appears at the top of the site nagging once to upgrade to Pro.  You can disable this on the configure page or by following the "dismiss" link.
* :: FEATURE :: Super CAPTCHA now lets you know what version you have installed on your Dashboard where it shows you its statistics.

= 2.4.8 =
* :: MISC :: We now have 2 license options for Pro: Lifetime Owned, and Leased. Updated the order link to reflect this.
* :: MISC :: We now have a free trial for pro. This link has been added in various areas without nagging.
* :: SPELLING :: Corrected some typos.

= 2.4.7 =
* :: BUG-FIX :: Logs have been greatly improved HTML/CSS wise
* :: PRO-FEATURE :: You can turn off the Pro auto-bans by disabling the IP-Filter
* :: FEATURE :: Your software type and version is now very clear on the Super-CAPTCHA Plugin page and on your dashboard -- there is still no nagging to upgrade

= 2.4.6 =
* :: PRO-FEATURE :: Query an IP against the MyGWD Spam database from the logs page.
* :: PRO-FEATURE :: IPs listed in the MyGWD Spam Database are automatically banned from your site.
* :: BUG-FIX :: Fix an issue where some websites were stalling on install/upgrade.
* :: BUG-FIX :: Software will no longer self-destruct (unlink) if you uncheck "Show credits".
* :: OTHER :: Heavy FAQ and Description rewrites.

= 2.4.5 =
* :: SPELLING :: Fixed a lot of spelling errors
* :: BUG-FIX :: License check should work without slowing down your site.
* :: FEATURE :: Auto-submission of identified spammers to GWD's spammer's database.
* :: PRO-FEATURE :: Spam database checks and log quick-links added.
* :: PRO-FEATURE :: Smart-ban bots and auto-submission to spam databases.
* :: PRO-FEATURE :: Auto-check signups through GWD's spammer's database (currently over 8,000,000 IP's)
* :: BUG-FIX :: Order links fixed.
* :: BUG-FIX :: License check is more obscure
* :: FEATURE :: Attempting the removal of the license checking mechanism will result in software self-destruct.
* :: BUG-FIX :: Links in the logs will not display as they were intended and updated for the new JS libraries.


= 2.4.4 =
* :: FEATURE :: No more split downloads for SuperCAPTCHA Free and SuperCAPTCHA Pro.  Entering a valid Pro license will automatically download and update your install.
* :: FEATURE :: Check your license key from the SuperCAPTCHA admin panel and buy a key just as easy.
* :: FEATURE :: Buying a license key automatically removes the credits and "Secured by" footer line legitimately.

= 2.4.3 =
* :: FEATURE :: Major cleaning up of code, better interface and admin css fixes.  The configure page looks much better as well as the logs page
* :: BUG-FIX :: Confirmed SEF image now works.

= 2.4.2 =
* ::M A J O R BUG-FIX:: Thanks to some help from a few of our users, we have found the issue causing the get_var error on wordpress installs where it is not the site root.  Because we call the SCAPTCHA image from the literal location in your wp-content/plugins directory, if your install differs from this default structure, you MUST open the config.php file in this plugin's folder and specify the actual path to the plugin.

= 2.4.1 =
* ::FEATURE:: Backgrounds now available for 3D Captcha
* ::FEATURE:: Distortion now available for 3D Captcha

= 2.4.0 =
* ::BUG-FIX:: Issues regarding file not found errors while including the TTF fonts has been fixed with a new configuration option.
* ::INFO:: All 2-D CAPTCHAing has been removed from this major version.  To get stable 2-D CAPTCHA support please see version 2.2.x

= 2.3.3 =
* ::BUG-FIX:: issues with the captchas not letting "anyone" through has been fixed.  This was a session issue in trying to pass session back and forth from the image rendering to the code checking.  This should be fixed now.
* ::MISC:: Some of the features not working as part of the switch from the 2-D Captchas to 3-D, we have notated them in the configuration as they do still work on some systems and setups.  We are still unsure as to what is making this behave so erratically between Wordpress installs.
* ::TESTED:: This has been tested with the latest version of Buddypress (as of 12-19-2011), Latest Version of Wordpress with both multisite disabled and enabled.
* ::MISC:: Added a warning to IP filtering.  If you are running cloud services like Cloud Flare, you will need to disable this and trust them with the IP filtering as IP addresses aren't passed to your server from these systems as they act as proxies.

= 2.3.2 =
* ::MISC:: Added option to disable the new image URL system if your image is broken or does not display properly.

= 2.3.1 =
* ::MISC:: Better image url mapping. The image is now called by WordPress's ModRewrite library instead of a direct /wp-content/plugins/ call.  This should add better security, and a wider compatibility with login forms.
* ::BUG-FIX:: Minor bugs fixed (image displaying bugs)
* ::ALERT:: YOU MUST RUN THE UPDATER WHEN UPGRADING OR PRESS THE "Restore Defaults" BUTTON OR YOU WILL BE LOCKED OUT OF YOUR SITE or change the Font Path from ./includes/ to includes/!

= 2.3.0 =
* ::MAJOR-FEATURE:: [MikeW] 3-D CAPTCHA added.  This is out of beta but has little controllable features.  Planned to add more features over the next few releases.
* ::MISC:: [MikeW] Update for Buddypress
* ::MISC:: [WaltE] Registration layout for Buddypress looks much better.

= 2.2.5 =
* ::SECURITY:: A SQL injection vulnerability in the Logs no longer exists.  This security risk was rated as a low security risk as you have to be logged in as site-wide administrator in order to exploit it.

= 2.2.4 =
* ::FEATURE:: Help area added to better educate people to how to use Super CAPTCHA as well as an added support link.

= 2.2.3 =
* ::BUG-FIX:: Words.txt was damaged during previous version commit.  It has now been fixed for this version.
* ::BUG-FIX:: Dashboard overview now displays properly on the network admin dashboard and will not display on admin dashboard if in multi-site mode.

= 2.2.2 =
* ::BUG-FIX:: Now installs flawlessly and automatically fixes many database errors that it may come across.
* ::FEATURE:: Intelligent sanity detection - prompts to fix errors in the database automagicly.

= 2.2.1 =
* ::FEATURE:: [MikeW] Super CAPTCHA menu only available in the Network Admin interface if running in multi-site mode.
* ::FEATURE:: [WaltE] You can now disable the copyright by-line.
* ::BUG-FIX:: [MikeW] Fixed very old bug that causes some pages in some versions of wordpress not to display properly.
* ::MISC:: [MikeW] Removed unnecessary pages from the admin panel.
* ::MISC:: [MikeW] Combined the Readme and Home page into one page (only 3 admin pages now are loaded)
* ::MISC:: [WaltE] Changed the readme.
* ::MISC:: [MikeW] Donation link fixed!
* ::SECURITY:: [WaltE] No admin pages can be accessed by non-authenticated or users without proper access levels.

= 2.2.0 =
* ::FEATURE:: IP Filtering and Cross-Linking
* ::FEATURE:: One-Click IP Banning
* ::FEATURE:: SECURED Blog Creation Page (even after login!)
* ::BUG-FIX:: Can now mark users as spam from the main wordpress profile page
* ::MISC:: Entire program reworked for speed and security as well as easier co-development

= 2.1.5 =
* ::BUG-FIX:: Super CAPTCHA now works with single WordPress installs.
* ::FEATURE:: Now have the ability to clear the logs.
* ::FEATURE:: NEW!!! Upgrade script added so this should fix all the problems with WordPress not creating all the tables when you upgrade..
* ::MISC:: We have tested this on a Wordpress 2.9.2 MU (with Buddy Press) and Wordpress 2.9.2 single blog install.  We have not yet tested it on Wordpress 2.9.2 MU (without buddypress) and earlier versions.

= 2.1.4 =
* ::BUG-FIX:: Log sorting has been fixed.  Had some sloppy code that was causing the GROUP BY and SORT BY statements to run a muck.
* ::FEATURE:: Auto-Ban Added (will now stop any attempts for 24 hours when a user fails more than 5 CAPTCHA tests in a 15 min time frame)
* ::MISC:: Logging is now prettier and better sorted.
* ::FEATURE:: Logging now automagically associates the IP address of someone blocked by the CAPTCHA system to any IP's matching registered users for your examination.
* ::FEATURE:: Thickboxed IP-Whois added to the logging feature.  Clicking on the DNS Name of the host will result in a thickboxed lookup of spam records on that IP.  Hovering over the DNS name and clicking the IP address will initiate a thickbox of the IP-Whois information for quick access to abuse.
* ::NOTIFICATION:: Bug identified:  Please do not use version 2.1.0 and later on single-WP installs for registration bot security.  Currently the CAPTCHA system is not setup to handle the single-version registration displays.  You may still use it for brute force login security.

= 2.1.3 =
* ::FEATURE:: Some hardening features were added.

= 2.1.2 =
* ::BUG-FIX:: SQL Statement on setup has been fixed.
* ::BUG-FIX:: Better page navigation for logging.
* ::BUG-FIX:: Bot detection fixed to include all bots, even those that make themselves appear to be legitimate bots.

= 2.1.1 =
* ::FEATURE:: Logging added. (leewells)
* ::SECURITY-FIX:: All Dashboard widgets now working (leewells)
* ::NOTES:: 2.1.0 removed from repository.

= 2.1.0 =
* ::FEATURE:: Compatible with Buddypress!
* ::FEATURE:: Auto-blocking of known bots.
* ::BUG-FIX:: All Dashboard widgets now working (affinityx)

= 2.0.6 =
* ::BUG:: "Refresh only works once" bug has been resolved for both the login and registration CAPTCHAs.
* ::PRESENTATION:: The login CAPTCHA form has been drastically improved to "fit" with the flow of your Admin theme (sorry this should have been distributed with the last update).
* ::FEATURE:: Licensing violators are added to the "Wall of Shame" that is viewable in everyone's Admin Panel after clicking on the plugin's page.

= 2.0.5 =
* ::FEATURE:: Super CAPTCHA now displays its statistics in the Administrative Dashboard's "Right Now" widget.
* ::FEATURE:: Super CAPTCHA will now add an Administrative Dashboard widget with the latest news relating to Super CAPTCHA.
* ::FEATURE:: Added navigation to the plugin home, configuration, README, and LICENSE pages.
* ::FEATURE:: Plugin home page will not read from a dynamic page keeping you informed on the latest changes LIVE.

= 2.0.4 =
* ::BUG:: Fixed validation errors in the credits.  Your site should now validate with the http://validator.w3.org/ .

= 2.0.3 =
* ::FEATURE:: Donate links added.
* ::FEATURE:: Added feature to remove copyrights legitimately from the bottom of your site.
* ::FEATURE:: Added some AJax capabilities.
* ::SECURITY:: Fixed some audible bugs and added more static to background.

= 2.0.2 =
* There is a bug where the audible read-out is not in sync with the CAPTCHA image -- Image, audio, and Verification are in sync now.

= 2.0.1 =
* Fixed the issue where the sign-up captcha was not being displayed entirely.
* Fixed image path issue on the sign-up captcha.
* Fixed image path issue on the login captcha.
* Fixed/Tweaked session handling for more security and stability.

= 2.0.0 =
* New release, featured a fully configurable CAPTCHA system!
* Integrated the image into the plugin file itself for better security!
* Option added to allow the admin to control where and when the plugin is displayed.
* Default Permissions should now be fixed (for the 500 error for those folks running mod_security on Apache).

= 1.2 =
* Package updated for Wordpress.org "Extend" site.

= 1.1 =
* Bug "Registration Loop" fixed.
* Bug "Login Not Locked Down" fixed.

= 1.0 =
* Innitial Release