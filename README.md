# Technology Font (techno-font)

techno-font is an icon font containing logos of popular linux distributions and services.

## Usage

See https://walchko.github.io/techno-font for icons and examples.

To use the font, include `assets/techno-font.css` as well as the fonts in the project and use the CSS classes listed below.

```html
<link href="/assets/fontlinux.css" rel="stylesheet">
```

Or just link to it using [RawGit](https://rawgit.com) (served via [MaxCDN](https://www.maxcdn.com)'s network):

```html
<link href="https://cdn.rawgit.com/walchko/techno-font/v0.7.3/assets/techno-font.css" rel="stylesheet">
```

MaxCDN uses the following links:

	development: https://rawgit.com/user/repo/branch/file
	production: https://cdn.rawgit.com/user/repo/tag/file

# NPM

## Install

	npm install -g techno-font

## Development

	git clone https://github.com/walchko/techno-font.git
	cd techno-font
	npm install
	npm link

## Using

	var tech = require('techno-font');
	var path = tech.getFilePath('techno-font.css');
	var css = tech.getFile(path);

Or you can just call the helper functions:

	var tech = require('techno-font');
	var css = tech.getCSS();
	var woff = tech.getWOFF();
	var tff = tech.getTFF();
	var svg = tech.getSVG();
	var eot = tech.getEOT();

# Build Dependencies

* This project uses [fontcustom](https://github.com/FontCustom/fontcustom) to compile vectors into fonts.
* [wkhtmltopdf](http://wkhtmltopdf.org/) is used to generate this readme's preview image.

## Setup Summary for OSX

	brew install fontforge --with-python
	brew install eot-utils
	gem install fontcustom
	brew cask install wkhtmltopdf

## Compilation of the vectors

After making changes to one of the vectors, the fonts have to be recompiled.
From the root directory, run:

	fontcustom compile

To compile everything including the readme's `preview.png`, run:

	sh ./compile.sh

# Glyph Sources

*Note:* All brand icons are trademarks of their respective owners and should only be used to represent the company or product to which they refer.

- [Font-Awesome-SVG-PNG](https://github.com/encharm/Font-Awesome-SVG-PNG)
- [font-mfizz](https://github.com/fizzed/font-mfizz)

# MIT License

**Copyright (c) 2016 Kevin Walchko**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
