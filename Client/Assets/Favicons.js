/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


if (!window.__firefox__) {
  window.__firefox__ = {};
}

window.__firefox__.favicons = function() {
    // These integers should be kept in sync with the IconType raw-values
    var ICON = 0;
    var APPLE = 1;
    var APPLE_PRECOMPOSED = 2;
    var GUESS = 3;

    var selectors = { "link[rel~='icon']": ICON,
        "link[rel='apple-touch-icon']": APPLE,
        "link[rel='apple-touch-icon-precomposed']": APPLE_PRECOMPOSED
    };
  
    function getAll() {
        var favicons = {};
        favicons['documentLocation'] = document.location.href;
        favicons[document.location.origin + '/favicon.ico'] = '' + GUESS;

        for (var selector in selectors) {
          var icons = document.head.querySelectorAll(selector);
          for (var i = 0; i < icons.length; i++) {
            var href = icons[i].href;
            favicons[href] = '' + selectors[selector];
          }
        }

        return favicons;
    }
  
    function getFavicons() {
        var favicons = getAll();
        __bravejs___faviconsMessageHandler(favicons);
    }

    return {
        getFavicons : getFavicons
    };
  
}();
