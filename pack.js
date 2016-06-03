var fs = require('fs.extra');

fs.rmrf('./when', function (err) {
  if (err) {
    throw err;
  }
});

fs.copyRecursive('./node_modules/when/dist/browser', './when', function (err) {
  if (err) {
    throw err;
  }
});