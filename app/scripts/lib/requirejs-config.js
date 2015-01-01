require.config({
	baseUrl: "scripts/",
	paths: {
		//underscore: "lib/underscore",
		//URIjs: "lib/URI",
		jquery: "scripts/lib/jquery.min"
		//backbone: "lib/backbone",
		//mustache: "lib/mustache",
		//text: "lib/text",
		//json: "lib/json"
	},
	shim: {
		jquery: {
			exports: "$"
		},
		underscore: {
			exports: "_"
		}
	}
});

require(["background"], function() {});

