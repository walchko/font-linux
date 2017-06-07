#!/usr/bin/env node

// do npm link techno-font before running this

var http = require('http');
var tech = require('techno-font');
var path = tech.getFilePath('techno-font.css');
var css = tech.getCSS();
var woff = tech.getWOFF();

// console.log("path: " + path);
// console.log(css.toString());
// console.log(woff);

console.log(__dirname);

// var a = path.resolve(__dirname, '../assets', 'techno-font.css');
// console.log(a);
