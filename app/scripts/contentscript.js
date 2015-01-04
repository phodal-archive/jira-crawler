(function () {
    "use strict";

    var getInfo = function (callback){
        console.log("--------------------");
        $(".ghx-first ul li:nth-child(3) .ghx-issue").each(
            function (data) {
                var results = [];
                results["story_number"] = $(this).find(".ghx-key a").text();
                results["story_description"] = $(this).find(".ghx-summary span").text();
                results["user"] = $(this).find(".ghx-avatar img").attr("alt");
                results["story_type"] = $(this).find(".ghx-type").attr("title");
                results["story_day"] = $(this).find(".ghx-days").attr("title").match(/[^% days]/i)[0];
                results["message_type"] = "story";
                console.log(results);
                callback(results);
            });
    };

    getInfo(function(message){
        chrome.extension.sendRequest(message, function (response) {
            if (response.status === 201) {
                console.log("Success");
            } else {
                console.log("Failure");
            }
        });
    });
}());
