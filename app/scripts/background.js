define([
    "jquery"
], function ($) {
    chrome.extension.onRequest.addListener(
        function (request, sender, sendResponse) {
            console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
                "from the extension");
            if (request.message_type == "story") {
                console.log(request);
                $.post("http://localhost:5000/story", request, function(data,status){
                    console.log("Data: " + data + "\nStatus: " + status);
                });
                sendResponse({
                    status: 201
                });
            }
            else
                sendResponse({
                    status: 404
                });
        });

    chrome.runtime.onInstalled.addListener(function (details) {
        console.log('previousVersion', details.previousVersion);
    });

    chrome.browserAction.setBadgeText({text: 'Jira Crawler'});
});
