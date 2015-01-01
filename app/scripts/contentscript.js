(function () {
    "use strict";
    chrome.extension.sendRequest({greeting: "hello"}, function (response) {
        console.log(response.farewell);
    });
}());
