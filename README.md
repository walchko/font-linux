# font-linux #

![Available logos](assets/preview.png)

Font-linux is an icon font containing logos of popular linux distributions for
inclusion in websites. Also borrowed some logos from [Font Mfizz](https://github.com/fizzed/font-mfizz).

## Usage ##

*Note:* All brand icons are trademarks of their respective owners and should only be used to represent the company or product to which they refer.

To use the font, include `assets/font-linux.css` as well as the
fonts in your project and use the CSS classes listed below.

```html
<link href="/assets/fontlinux.css" rel="stylesheet">
```

Or just link to it using [RawGit](https://rawgit.com) (served via [MaxCDN](https://www.maxcdn.com)'s network):

```html
<link href="https://cdn.rawgit.com/walchko/font-linux/v0.6/assets/font-linux.css" rel="stylesheet">
```

MaxCDN uses the following links:

	development: https://rawgit.com/user/repo/branch/file
	production: https://cdn.rawgit.com/user/repo/tag/file

The font size can be changed by using `fl-number` where `number` can be: 12, 14,
16, 18, 21, 24, 36, 48, 60, or 72.

Logos can be displayed by calling the class name and optional font size:

```html
<i class="fl-archlinux"></i>
<i class="fl-archlinux fl-36"></i>
<i class="fl-archlinux" style="font-size: 172px; color:red"></i>
<span class="css class you made"><span class="fl-archlinux"></i></span>
```

Available logos are:

| Logo         | CSS class                
| -------------|--------------------------
| Apple        | `fl-apple`
| Arch Linux   | `fl-archlinux`           
| Cassandra    | `fl-cassandra`
| CentOS       | `fl-centos`              
| Debian       | `fl-debian`              
| Docker       | `fl-docker`              
| Fedora       | `fl-fedora`              
| FreeBSD      | `fl-freebsd`             
| Gentoo       | `fl-gentoo`              
| Git          | `fl-git`              
| Github       | `fl-github`              
| JSFiddle     | `fl-jsfiddle`              
| Linux Mint   | `fl-linuxmint`           
| MongoDB      | `fl-mongodb`           
| Node.js      | `fl-nodejs`           
| NPM          | `fl-npm`           
| OpenSUSE     | `fl-opensuse`            
| Python       | `fl-python`           
| QR code      | `fl-qrcode`           
| Raspberry Pi | `fl-raspberrypi`           
| Red Hat      | `fl-redhat`              
| Slackware    | `fl-slackware`
| Stack Overflow | `fl-stackoverflow`
| Tux (linux)  | `fl-tux`
| Ubuntu       | `fl-ubuntu[-inverse]`
| Wireless     | `fl-wireless`    

## Dependencies ##

* This project uses [fontcustom](https://github.com/FontCustom/fontcustom) to compile vectors into fonts.
* [wkhtmltopdf](http://wkhtmltopdf.org/) is used to generate this readme's preview image.

### Setup Summary for OSX

	brew install fontforge --with-python
	brew install eot-utils
	gem install fontcustom
	brew cask install wkhtmltopdf

## Compilation of the vectors ##

After making changes to one of the vectors, the fonts have to be recompiled.
From the root directory, run:

	fontcustom compile

To compile everything including the readme's `preview.png`, run:

	sh ./compile.sh

## To Do

 - npm and jsfiddle icons aren't right
