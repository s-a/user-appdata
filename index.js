"use strict";


var fs = require("fs");
var fse = require('fs-extra')
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
	
	this.dataFolder = process.env.APPDATA || (process.platform === 'darwin' ? path.join(process.env.HOME, 'Library/Preferences') : '/var/local') 
	this.dataFolder = path.join(this.dataFolder, this.appName); 
	
	this.setConfigFilename(config.filename || "config.json");

	if (fs.existsSync(this.filename)){
		this.load();
	} else {
		fse.ensureDir(this.dataFolder);
		this.save();
	}
	
	return this;
};


UserAppData.prototype.setConfigFilename = function (filename) {
	this.filename = path.join(this.dataFolder, filename);
};

UserAppData.prototype.save = function () {
	fs.writeFileSync(this.filename, JSON.stringify(this.settings, null, 4));
};

UserAppData.prototype.load = function () {
	this.settings = fs.readFileSync(this.filename).toString();
};

UserAppData.prototype.uninstall = function () {
	fse.removeSync(this.filename);
};

module.exports = UserAppData;