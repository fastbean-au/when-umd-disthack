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

let sequence = Promise.resolve();

process.argv.slice(2).forEach((command) => {
    command = command.toLowerCase();
    console.log(`*** Executing step '${command}'`);
    if (command === 'clean') {
        sequence = sequence.then(() => {
            shell.rm('-fr', 'when/*');
        });
    } else if (command === 'build') {
        sequence = sequence.then(() => { 
            execCommand('npm install --save when')
            .then(() => shell.cp('-Rf', 'node_modules/when/dist/browser/*', 'when'))
            .then(() => execCommand('npm view when dist-tags.latest'))
            .then((version) => execCommand(`git commit -a -m "Release ${version}""`));
        });
    } else if (command === 'release') {
        sequence = sequence.then(() => { 
            execCommand('npm view when dist-tags.latest')
            .then((version) => execCommand(`npm version ${version}`))
            .then(() => execCommand(`git push`))
            .then(() => execCommand('git push --tags'))
        });
    } else {
        sequence.reject(`unknown command '${command}'`);
    }
});

sequence = sequence.catch((err) => {
    console.error(`ERROR: ${err}`);
    process.exit(1)}
);
