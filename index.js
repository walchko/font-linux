// This is taken from purecss

var fs = require('fs');
var path = require('path');
var cache = {};

module.exports = {
	getFile: function(name) {
		if (!cache[name]) {
			try {
				// cache[name] = fs.readFileSync(this.getFilePath(name), 'utf-8');
				cache[name] = fs.readFileSync(this.getFilePath(name));
			} catch(e) {
				throw new Error(name + ' does not exist');
			}
		}
		return cache[name];
	},
	getFilePath: function(name) {
		return path.resolve(__dirname, 'assets', name);
	},
	getCSS: function() {
		return this.getFile('techno-font.css');
	},
	getWOFF: function() {
		return this.getFile('techno-font.woff');
	},
	getEOT: function() {
		return this.getFile('techno-font.eot');
	},
	getSVG: function() {
		return this.getFile('techno-font.svg');
	},
	getTTF: function() {
		return this.getFile('techno-font.ttf');
	}
};
