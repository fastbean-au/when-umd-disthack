'use strict';

const shell = require('shelljs');
const process = require('process');

function execCommand (cmd) {
    let promise = new Promise( (resolve, reject) => {
    console.log(`CMD: ${cmd}`);
        shell.exec(cmd, (code, stdout, stderr) => {
            if (code !== 0 || stderr) {
                reject(stderr);
            }
            console.log('...ok');
            resolve(stdout);
        });
    });
    return promise;
}

//process.argv.slice(2).forEach((command) => {
//    command = command.toLowerCase();
const command = process.argv[2].toLowerCase();
    console.log(`*** Executing step '${command}'`);
    if (command === 'clean') {
        shell.rm('-fr', 'when/*');
    } else if (command === 'build') {
        execCommand('npm install --save when')
        .then(() => shell.cp('-Rf', 'node_modules/when/dist/browser/*', 'when'))
        .catch((err) => {
            console.error(`ERROR: ${err}`);
            process.exit(1)}
        );
    } else if (command === 'release') {
        execCommand('npm view when dist-tags.latest')
        .then((version) => execCommand(`npm version ${version}`))
        .then(() => execCommand(`git push`))
        .then(() => execCommand('git push --tags'))
        .catch((err) => {
            console.error(`ERROR: ${err}`);
            process.exit(1)}
        );
    } else {
        console.error(`ERROR: unknown command '${command}'`);
        process.exit(1);
    }
//});
