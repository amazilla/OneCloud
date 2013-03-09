 __        ___  __        __        __  
/  \ |\ | |__  /  ` |    /  \ |  | |  \ http://onecloud.amazilla.org
\__/ | \| |___ \__, |___ \__/ \__/ |__/ help@amazilla.org
                                        
OneCloud is released under the GNU Affero General Public License Version 3 (AGPL3)
 -> provided with this release in license.txt
 -> or via web at www.gnu.org/licenses/agpl-3.0.txt

Copyright © 2011 - 2012 Amazilla (help@amazilla.org)

What's new in OneCloud 0.9.0
 * Added um('isValidUsername') and vGroups('isValidGroupname').
 * Improved uninstalling.
 * Fixed non-repeating wallpaper setting.
 * Fixed selecting an ACL group in eyeControl.
 * Fixed missing PHP constant "ACL".
 
What's new in OneCloud 0.9.0 (RC 1)
 * Added PHP 5.4.0 compatibility.
 * Added official IIS 7 compatibility. The system folder is secured using a "web.config" file.
 * Added pre-configured "php.ini" and ".htaccess" files.
 * Added PHP settings checks to installer.
 * Added rewritten ACL management section to eyeControl.
 * Added username to window title of processes from different users.
 * Added "Bring to Front" feature to Process Manager.
 * Added iOS homescreen icon.
 * Added eyeShare feature, to ask, whether an existing file or folder should be replaced.
 * Added user management module for logins via LDAP.
 * Added eyeMail compatibility layer from SQLite to SQLite2.
 * Added new logs service.
 * Added new UTF-8 library for improved PHP function compatibility and better performance.
 * Added possibility to add ACL rules based on user privilegs.
 * Added Iframe widget method "focus".
 * Added warning when an ACL rule is reached.
 * Changed default temporary folder to the internal one. This should finally prevent ugly problems on shared hosters.
 * Changed eyeSheets and eyeShow design to better fit the native one.
 * Changed eyePear library to hold all PEAR modules in one folder. It allows simple module loading and fixes previous path problems by setting changing the include path.
 * Updated a lot of our dependencies (see below).
 * Improved handling of "bmp" files.
 * Improved thumbnail creation.
 * Improved import and export of vCards.
 * Improved PHP error reporting.
 * Improved usage of UTF-8 related functions.
 * Improved JavaScript files using JSLint.
 * Fixed browser compatibility of eyeSheets and eyeShow. Both should finally be compatible with all major browsers.
 * Fixed "Default User" in eyeControl.
 * Fixed windows, that were placed outside of the viewable area.
 * Fixed eyeUpload Flash plugin check.
 * Fixed login window problems on smaller screens.
 * Fixed the session timeout.
 * Fixed sorting table columns.
 * Fixed logout in case sounds are deactivated.
 * Fixed eyeGroup application.
 * Fixed vCardImport application.
 * Fixed a lot PHP notices, warnings, strict warnings and errors.
 * and a lot more under-the-hood improvements

Updated Dependencies
 * Flowplayer 3.2.10
 * iui 0.31
 * JSColor 1.3.12
 * PEAR 1.9.4
   * Contact_Vcard_Build 1.32.0
   * Contact_Vcard_Parse 1.1.2
   * Crypt_RC42 0.9.0
   * Crypt_XXTEA 0.9.0
   * File_Archive 1.5.5
   * HTTP_Request2 2.1.1
   * MIME_Type 1.3.1
   * Net_URL2 2.0.0
   * Numbers_Roman 1.0.2
   * System_Command 1.0.8
   * System_SharedMemory 0.9.0 RC1
 * php.js 1109.2015
   * html_entity_decode
   * htmlspecialchars
   * get_html_translation_table
   * md5
   * encode
 * SimplePie 1.2.1
 * SoundManager 2.97a.20101221
 * TinyMCE 3.4.9
 * xLibrary 4.23
 * XML-RPC 3.0.0 Beta

Fixed Reported Bugs

=== S I T E S ===

Website: http://onecloud.amazilla.org/
Report Bugs: http://help.amazilla.org/

=== H E L P ===

Requirements
	Server
		The main requirement for an OneCloud installation is a PHP 5 running web server.
		OneCloud has its own virtual file system and does not require a database to work. You will however need the capability of uploading files and directories to the webspace and to be able to change folder permissions.
	Client (Web Browser)
		Your browser needs to be standards-compliant and support CSS. This includes the common modern browsers:
			* Mozilla Firefox
			* Google Chrome
			* Internet Explorer
			* Opera
		Lower versions and other browsers may also work. We strongly recommend the use of Mozilla Firefox or Google Chrome to be able to use all OneCloud effects!

Installing OneCloud
	Once you have downloaded OneCloud, follow these instructions to install:
		* Extract the package you downloaded.
		* Copy the extracted files to your web directory (e.g. via FTP).
		* Start your web browser and browse to the folder "installer".
		* Follow the instructions the OneCloud installer gives you.
		* Log into your new OneCloud system. (username: "root")

Updating OneCloud
	The updater works with previous OneCloud and eyeos versions 1.5 and higher.
		* Follow the instructions from "Installing OneCloud".
		* Click "Update OneCloud!" to start updating.

Office Support
	OneCloud allows you to open and (partly) to save Microsoft Office and Open Document files. It uses LibreOffice (or OpenOffice.org) as backend. It can be set up on Linux and Windows servers only.
		* To install Office Support login as "root" user and start the OneCloud "System Preferences".
		* Select "System" from the left bar and go to the tab "Office Support".
		* Follow the given instructons.

Uninstalling OneCloud
	* Login as root user and start "System Preferences" (eyeControl).
	* Select "Uninstall OneCloud" tab under "System".
	* Enter your root password, click on "Uninstall OneCloud" and confirm the dialog box, which appears.

Remove broken installations
	* Follow the instructions from "Installing OneCloud".
	* Select "Uninstall OneCloud" form the select box and click "Continue...".
	* Click "Yes" to confirm uninstalling OneCloud.
