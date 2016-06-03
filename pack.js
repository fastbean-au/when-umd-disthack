var fs = require('fs-extra');

fs.emptyDirSync('./when', function (err) {
  if (err) {
    throw err;
  }
});

fs.copySync('./node_modules/when/dist/browser', './when', {clobber: true}, function (err) {
  if (err) {
    throw err;
  }
});