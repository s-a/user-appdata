"use strict";


var fs = require("fs");
var path = require("path");

var UserAppData = function(config) {
	if (!config){
		config = {};
	}
	this.settings = config.defaultSettings || {};
	this.appFolder = path.dirname(require.main.filename);
	this.appPackageFilename = path.join(this.appFolder, "package.json");
	this.appPackage = {};
	if (fs.existsSync(this.applicationPackageFilename)){
		this.appPackage = JSON.parse( fs.readFileSync(this.applicationPackageFilename).toString() );
	}
	this.appName = config.appname || this.appPackage.name;
	
	this.dataFolder = process.env.APPDATA || (process.platform === 'darwin' ? path.join(process.env.HOME, 'Library/Preferences') : (process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE)) 
	this.dataFolder = path.join(this.dataFolder, this.appName); 
	
	this.setConfigFilename(config.filename || "config.json");

	if (fs.existsSync(this.filename)){
		this.load();
	} else {
		this.save();
	}
	
	return this;
};


UserAppData.prototype.setConfigFilename = function (filename) {
	this.filename = path.join(this.dataFolder, filename);
};

UserAppData.prototype.save = function () {
	if (!fs.existsSync(this.dataFolder)){
		fs.mkdirSync(this.dataFolder);
	}
	fs.writeFileSync(this.filename, JSON.stringify(this.settings, null, 4));
};

UserAppData.prototype.load = function () {
	this.settings = fs.readFileSync(this.filename).toString();
};

UserAppData.prototype.uninstall = function () {
	fs.unlink(this.filename);
};

module.exports = UserAppData;