// ==UserScript==
// @name         AddQuicks
// @namespace    http://tampermonkey.net/
// @version      03
// @description  Add quick links to the google homepage.
// @author       Dor Fibert
// @match        https://www.google.com/
// @include      https://www.google.com/*
// @include      https://www.google.co.il/*
// @exclude      https://www.google.com/search*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.slim.min.js
// ==/UserScript==




(function() {
    'use strict';

    var quicks = [['YouTube','https://www.youtube.com/?gl=IL'],
                  ['Twitch', 'https://www.twitch.tv/'],
                  ['Drive','https://drive.google.com/drive/'],
                  ['Netflix','https://www.netflix.com']
                 ];

    $(document).ready(function() {

        var gmailDiv = $("div>a:contains('Gmail')").parent();
        var navBar = gmailDiv.parent();

        var divToAdd=gmailDiv.clone();
        divToAdd.children().removeAttr("data-pid");

        quicks.forEach(function(q){
            var tmpDiv = divToAdd.clone();
            tmpDiv.children().text(q[0]).attr("href",q[1]);

            navBar.prepend(tmpDiv);
        });
    })
})();
