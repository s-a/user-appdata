# user-appdata


[![NPM Version](http://img.shields.io/npm/v/user-appdata.svg)](https://www.npmjs.org/package/user-appdata)
[![Build Status](https://travis-ci.org/s-a/user-appdata.svg)](https://travis-ci.org/s-a/user-appdata)
[![Coverage Status](https://coveralls.io/repos/github/s-a/user-appdata/badge.svg?branch=master)](https://coveralls.io/github/s-a/user-appdata?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/b90f442f62ae44a4b95a07cbdd69fb85)](https://www.codacy.com/app/stephanahlf/user-appdata)
[![Dependency Status](https://david-dm.org/s-a/user-appdata.svg)](https://david-dm.org/s-a/user-appdata)
[![devDependency Status](https://david-dm.org/s-a/user-appdata/dev-status.svg)](https://david-dm.org/s-a/user-appdata#info=devDependencies)
[![NPM Downloads](https://img.shields.io/npm/dm/user-appdata.svg)](https://www.npmjs.org/package/user-appdata)
[![Massachusetts Institute of Technology (MIT)](https://s-a.github.io/license/img/mit.svg)](/LICENSE.md#mit)
[![Donate](http://s-a.github.io/donate/donate.svg)](http://s-a.github.io/donate/)


Load and save application data platform independent without additional configuration based on the current users system ```APP_DATA``` folder.


## Contructor parms
 - appname (not optional) - A unique app name. Best one is the ```name``` property from your ```package.json```.
 - filename (optional) - Default ```config.json```.
 - defaultSettings (optional).



## Methods
 - ```load()```
 - ```save()``` 
 - ```uninstall()```
 - ```setConfigFilename(filename /* string */)```

### Example
```javascript
var Config = require("user-appdata");
var config = new Config({appname : "myApp", defaultSettings : {"foo" : "bar"}});
console.log(config);
```

### Yields on Microsoft Windows:
```javascript
{
	settings: {
		foo: 'bar'
	},
	appName: 'myApp',
	dataFolder: 'C:\\Users\\Stephan\\AppData\\Roaming\\myApp',
	filename: 'C:\\Users\\Stephan\\AppData\\Roaming\\myApp\\config.json' 
}
```
