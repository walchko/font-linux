
## Usage

To use the font, include `assets/font-linux.css` as well as the fonts in your project.

{% highlight html %}
<link href="/assets/stylesheets/font-linux.css" rel="stylesheet">
{% endhighlight %}

Or just link to it using [RawGit]("http://rawgit.com/") (served via [MaxCDN](http://www.maxcdn.com)'s network):

{% highlight html %}
<link href="https://cdn.rawgit.com/walchko/font-linux/v{{ site.data.fl.version }}/assets/font-linux.css" rel="stylesheet">
{% endhighlight %}

Use the CSS classes listed below like this:

{% highlight html %}
<i class="fl-archlinux"></i>
<i class="fl-archlinux fl-24"></i>
<i class="fl-archlinux fl-24" style="color:red"></i>
<i class="fl-archlinux" style="font-size:172px;color:red"></i>
{% endhighlight %}

*Note:* All brand icons are trademarks of their respective owners and should only be used to represent the company or product to which they refer.
