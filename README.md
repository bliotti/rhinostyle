#test
# RhinoStyle <img src="http://rhinogram.github.io/rhinostyle/media/rhinogram-logo.svg" height="30px;">

## Documentation

[https://rhinogram.github.io/rhinostyle/](https://rhinogram.github.io/rhinostyle/)

## Setup

* Make sure you have the following installed:
  * [NodeJS](http://nodejs.org) `>= 6.9.1`
  * [yarn](https://www.npmjs.com/) `>= 0.23.4`
  * [Gulp](http://gulpjs.com) `yarn global add gulp-cli`


## Development Workflow

Individual gulp tasks can be found in [gulpfile.babel.js](gulpfile.babel.js), but for development you will run:

* `gulp serve` Starts BrowserSync instance, watches for file changes, and automatically reloads your browser.

When adding / deleting any of the media, audio, or animation files, it may be necessary to run `gulp build` to capture those changes.

## Releasing

To release a new version of RhinoStyle, commit your changes and create a PR into master. Once merged, the changes will automatically be updated on the live site.

After your changes have been merged into master, click on the `releases` tab, then the `Draft a new release` button. Increase the tag number from the previous build, and then press the `Publish Release` button.

In [Rhinofront](https://github.com/rhinogram/rhinofront.git), edit `package.json` to the following:
```
"rhinostyle": "https://github.com/rhinogram/rhinostyle.git#<TAG_NUMBER>",
```
Test locally to ensure that your changes are coming through, then submit a PR to [Rhinofront](https://github.com/rhinogram/rhinofront.git) with the updated `package.json`.


## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png)
![iOS Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png)
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 11+ ✔ | 9+ ✔ | 10+ ✔
