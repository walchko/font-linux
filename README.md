# techno-font

![Available logos](assets/preview.png)

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

## Dependencies

* This project uses [fontcustom](https://github.com/FontCustom/fontcustom) to compile vectors into fonts.
* [wkhtmltopdf](http://wkhtmltopdf.org/) is used to generate this readme's preview image.

### Setup Summary for OSX

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

# MIT License

*Note:* All brand icons are trademarks of their respective owners and should only be used to represent the company or product to which they refer.

- [Font-Awesome-SVG-PNG](https://github.com/encharm/Font-Awesome-SVG-PNG)
- [font-mfizz](https://github.com/fizzed/font-mfizz)
