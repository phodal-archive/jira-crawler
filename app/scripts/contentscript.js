(function () {
    "use strict";
	var message = {
        user: "Phodal",
        story: {
            number: "001",
            type: "bug",
            title: "title",
            day: 2,
            description: "description"
        },
        message_type: "story"
    };
    chrome.extension.sendRequest(message, function (response) {
        if(response.status === 201){
            console.log("Success");
        } else {
            console.log("Failure");
        }
    });
}());
