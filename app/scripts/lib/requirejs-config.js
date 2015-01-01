require.config({
	baseUrl: "scripts/",
	paths: {
		underscore: "lib/underscore",
		jquery: "lib/jquery.min"
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

