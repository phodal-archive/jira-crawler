(function () {
    "use strict";
    var message = {
        user: "Phodal",
        story_number: "001",
        story_type: "bug",
        story_title: "title",
        story_day: 2,
        story_description: "description",
        message_type: "story"
    };
    chrome.extension.sendRequest(message, function (response) {
        if (response.status === 201) {
            console.log("Success");
        } else {
            console.log("Failure");
        }
    });
}());
