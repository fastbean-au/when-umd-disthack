console.log("Copying files for bower");
require('fs.extra').copyRecursive('node_modules/when/dist/browser', 'when', (err) => {
  if (err) {
    throw err;
  }
});