# when-umd-disthack

This is simply a nasty, dirty hack used as a stop-gap measure while an [https://github.com/cujojs/when/issues/479](issue with when.js) remains unresolved.  Despite the presence of a script and an NPM script entry, this is a manual venture thanks in no small part to an urgent requirement and a non-functional Windows Node/NPM installation.

This repo merely exists to allow a [http://bower.io/](Bower) package to meet this specific need to serve the requirements of UMD users of [https://github.com/cujojs/when](when.js).  The [https://www.npmjs.com/package/when](when.js npm package) is used to obtain the browserified code that this helps to publish as a Bower component.

If you have anything good (or bad) to say about when.js ....... this is not the place.  My contribution is no more than copying a small number of files and typing a couple of commands, that is it.

## Installation

```
bower install --save when-umd
```

## Use

```
<script src="bower_components/when-umd/when/when.js" type="text/javascript"></script>
```