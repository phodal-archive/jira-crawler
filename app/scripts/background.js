'use strict';

chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.message_type == "story")
            sendResponse({
                status: 201
            });
        else
            sendResponse({
                status: 500
            }); 
    });

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: 'Jira Crawler'});
