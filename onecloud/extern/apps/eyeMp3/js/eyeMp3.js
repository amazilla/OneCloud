/*global Windows */
/*jslint browser: true, devel: true, newcap: true, sloppy: true, todo: true, windows: true */
/*
 __        ___  __        __        __  
/  \ |\ | |__  /  ` |    /  \ |  | |  \ http://onecloud.amazilla.org
\__/ | \| |___ \__, |___ \__/ \__/ |__/ help@amazilla.org
                                        
OneCloud is released under the GNU Affero General Public License Version 3 (AGPL3)
 -> provided with this release in license.txt
 -> or via web at www.gnu.org/licenses/agpl-3.0.txt

Copyright © 2011 - 2012 Amazilla (help@amazilla.org)

*/

function eyeMp3_loadSound(myPid, path, title) {
	var e = document.getElementById(myPid + '_eyeMp3_Flash');
	e.SetVariable('jsValue', path);
	e.SetVariable('jsMethod', 'newfile');
	Windows.SetTitle(myPid + '_eyeMp3_Window', title);
}