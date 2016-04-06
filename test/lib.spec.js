"use strict";

var fs = require("fs");
// var path = require("path");
require("should");
var UserAppData; 

try {
	UserAppData = require("./../lib-cov/index.js");
} catch(e){
	UserAppData = require("./../lib/index.js");
}



describe("UserAppData.uninstall", function(){
	var config = new UserAppData({appname: "mocha-test-client", filename:"setup.json", defaultSettings: { foo:"bar" }});
	config.uninstall();
	it("should not exist a config file", function() {
		fs.existsSync(config.filename).should.be.false;
	});
});

describe("UserAppData.init without filename", function(){
	var config = new UserAppData({appname: "mocha-test-client", defaultSettings: { foo:"bar" }});
	it("should exist a config file", function() {
		fs.existsSync(config.filename).should.be.true;
	});
});
 