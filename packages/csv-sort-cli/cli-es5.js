#!/usr/bin/env node
'use strict';

/* eslint array-callback-return:0, consistent-return:0, no-loop-func:0 */

// VARS
// -----------------------------------------------------------------------------

var chalk = require('chalk');
var csvSort = require('csv-sort');
var fs = require('fs');
var globby = require('globby');
var inquirer = require('inquirer');

var _console = console,
    log = _console.log;

var meow = require('meow');
var path = require('path');
var updateNotifier = require('update-notifier');
var pullAll = require('lodash.pullall');
var uniq = require('lodash.uniq');

var isArr = Array.isArray;

var state = {};
state.toDoList = []; // default
state.overwrite = false; // default
var ui = new inquirer.ui.BottomBar();
var cli = meow('\n  Usage\n    $ csvsort YOURFILE.csv\n  or, just type "csvsort" and it will let you pick a file.\n\n  Options\n    -o, --overwrite   Will overwrite the target file instead\n    -h, --help        Shows this help\n    -v, --version     Shows the version of your csv-sort-cli\n\n  Example\n    Just call it in the root, where your csv file is located\n', {
  alias: {
    o: 'overwrite'
  }
});
updateNotifier({ pkg: cli.pkg }).notify();

// FUNCTIONS
// -----------------------------------------------------------------------------

function isStr(something) {
  return typeof something === 'string';
}
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

// consumes a plain object: {
//   toDoList - array,
//   overwrite - boolean
// }
function offerAListOfCSVsToPickFrom(stateObj) {
  // this means, it was called without any arguments.
  // that's fine
  var allCSVsHere = globby.sync('./*.csv');
  if (allCSVsHere.length === 0) {
    // log(chalk.red(`\ncsv-sort-cli: Alas, computer couldn't find any CSV files
    // in this folder and bailed on us!`))
    return Promise.reject(new Error('\ncsv-sort-cli: Alas, computer couldn\'t find any CSV files in this folder and bailed on us!'));
  }
  ui.log.write(chalk.grey('To quit, press CTRL+C'));
  var questions = [{
    type: 'list',
    name: 'file',
    message: 'Which CSV would you like to check?',
    choices: allCSVsHere
  }];
  if (stateObj === undefined || !hasOwnProperty(stateObj, 'overwrite') || hasOwnProperty(stateObj, 'overwrite') && stateObj.overwrite === false || typeof stateObj.overwrite !== 'boolean') {
    questions.push({
      type: 'list',
      name: 'overwrite',
      message: 'Do you want to overwrite this file with a sorted result?',
      choices: [{ name: 'yes', value: true }, { name: 'no', value: false }]
    });
  }
  ui.log.write(chalk.yellow('Please pick a file:'));
  return inquirer.prompt(questions).then(function (answer) {
    return {
      toDoList: [path.basename(answer.file)],
      overwrite: answer.overwrite || false
    };
  });
}

// Step #0. take care of -v and -h flags that are left out in meow.
// -----------------------------------------------------------------------------

if (cli.flags.v) {
  log(cli.pkg.version);
  process.exit(0);
} else if (cli.flags.h) {
  log(cli.help);
  process.exit(0);
}

// Step #1. gather the to-do list of files.
// -----------------------------------------------------------------------------

if (cli.input.length > 0) {
  state.toDoList = cli.input;
}

// if --overwrite/-o flag is used, the following argument will be put as flag's
// value, not in "cli.input[]":
// we anticipate the can be multiple, potentially-false flags mixed with valid file names
if (Object.keys(cli.flags).length !== 0) {
  // each non-boolean cli.flags value must be added to the `toDoList`
  Object.keys(cli.flags).forEach(function (key) {
    if (typeof cli.flags[key] !== 'boolean') {
      if (!isArr(cli.flags[key])) {
        state.toDoList.push(cli.flags[key]);
      } else {
        state.toDoList = state.toDoList.concat(cli.flags[key].filter(function (val) {
          return isStr(val);
        }));
      }
    }
  });
  state.toDoList = uniq(state.toDoList);
}

if (Object.keys(cli.flags) !== 0 && hasOwnProperty(cli.flags, 'overwrite')) {
  // variables that can be misinterpreted as falsey, yet the flag still be in
  // for example, in "csvsort -o false simples.csv simples2.csv",
  // the cli.flags.overwrite === false (WTF?)
  state.overwrite = true; // we normalise the flag since its value in CLI can precede
}

// Step #2. create a promise variable and assign it to one of the promises,
// depending on was the acceptable file passed via args or queries afterwards.
// -----------------------------------------------------------------------------
var thePromise = void 0;
if (state.toDoList.length === 0 && Object.keys(cli.flags).length === 0) {
  // ---------------------------------  1  -------------------------------------
  // if no arguments were given, offer a list:
  thePromise = offerAListOfCSVsToPickFrom(state);
} else if (state.toDoList.map(function (onePath) {
  return path.resolve(onePath);
}).filter(fs.existsSync).length > 0) {
  // ---------------------------------  2  -------------------------------------
  // basically achieving: (!fs.existsSync)
  var erroneous = pullAll(state.toDoList.map(function (onePath) {
    return path.resolve(onePath);
  }), state.toDoList.map(function (onePath) {
    return path.resolve(onePath);
  }).filter(fs.existsSync)).map(function (singlePath) {
    return path.basename(singlePath);
  }); // then filtering file names-only

  // write the list of unrecognised file names into the console:
  if (erroneous.length > 0) {
    log(chalk.red('\ncsv-sort-cli: Alas, the following file' + (erroneous.length > 1 ? 's don\'t' : ' doesn\'t') + ' exist: "' + erroneous.join('", "') + '"'));
  }

  // remove non-existing paths from toDoList:
  state.toDoList = state.toDoList.map(function (onePath) {
    return path.resolve(onePath);
  }).filter(fs.existsSync);

  // create the final promise variable we're going to use later:
  thePromise = Promise.resolve(state);
} else {
  // ---------------------------------  3  -------------------------------------
  var butStateWasRecognisedMsg = '';
  if (state.overwrite) {
    butStateWasRecognisedMsg = 'But it recognised your "-o" flag.';
  }
  log(chalk.yellow('\ncsv-sort-cli: Computer didn\'t recognise any CSV files in your input!\n' + butStateWasRecognisedMsg));

  // if there were no valid path in the arguments, query the files from the
  // existing CSV's in the current folder:
  thePromise = offerAListOfCSVsToPickFrom(state);
}

// Step #3.
// -----------------------------------------------------------------------------

thePromise.then(function (receivedState) {
  receivedState.toDoList.map(function (requestedCSVsPath) {
    // read the source
    fs.readFile(requestedCSVsPath, 'utf8', function (csvError, csvData) {
      if (csvData) {
        try {
          var cleaned = csvSort(csvData);
          if (receivedState.overwrite) {
            // overwrite
            fs.writeFile(path.basename(requestedCSVsPath), cleaned.res.join('\n'), 'utf8', function (err) {
              if (err) throw err;
              log(chalk.green('csv-sort-cli: Yay! The ' + path.basename(requestedCSVsPath) + ' has been fixed and overwritten! Check it out.'));
              process.exit(0);
            });
          } else {
            (function () {
              // create a new file with appended hyphen+integer before extension
              var proposedNewFileName = void 0;
              for (var i = 1; i < 1001; i++) {
                proposedNewFileName = path.basename(requestedCSVsPath, path.extname(requestedCSVsPath)) + '-' + i + path.extname(requestedCSVsPath);
                if (!fs.existsSync(path.resolve(proposedNewFileName))) {
                  fs.writeFile(proposedNewFileName, cleaned.res.join('\n'), 'utf8', function (err) {
                    if (err) throw err;
                    log(chalk.green('csv-sort-cli: Yay! A new file, ' + proposedNewFileName + ' has been created! Check it out.'));
                    process.exit(0);
                  });
                  break;
                }
              }
              path.basename(requestedCSVsPath, path.extname(requestedCSVsPath));
            })();
          }
        } catch (e) {
          return Promise.reject(new Error('\ncsv-sort-cli: Alas, computer encountered an error:\n' + e));
        }
      }
      if (csvError) {
        return Promise.reject(new Error('\ncsv-sort-cli: Alas, computer couldn\'t fetch the file "' + path.basename(requestedCSVsPath) + '" you requested and bailed on us!'));
      }
    });
  });
}).catch(function (err) {
  log(chalk.red(err));
  process.exit(1);
});
