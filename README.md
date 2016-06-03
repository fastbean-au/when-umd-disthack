# when-umd-disthack

This is simply a nasty, dirty hack used as a stop-gap measure while an [issue with when.js](https://github.com/cujojs/when/issues/479) remains unresolved.

This repo merely exists to allow a [Bower](http://bower.io/) package to meet this specific need to serve the requirements of UMD users of [when.js](https://github.com/cujojs/when).  The [when.js npm package](https://www.npmjs.com/package/when) is used to obtain the already browserified code that this then publishes for Bower as `when-umd`.

If you have anything good (or bad) to say about when.js ....... this is not the place.  My contribution is no more than copying a small number of files and typing a couple of commands, that's it.

## Installation

```
bower install --save when-umd
```

## Use

```
<script src="bower_components/when-umd/when/when.js" type="text/javascript"></script>
```