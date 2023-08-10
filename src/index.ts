#!/usr/bin/env node
import {program} from 'commander';
import * as clipboardy from 'clipboardy';
import * as chalk from 'chalk';
import {createPassword, savePassword} from './utils';

const log = console.log;

program.version('1.0.0').description('Simple Password Generator');

program
  .option('-l, --length <number>', 'Desired password length', '8')
  .option('-s, --save', 'Save generated password to file')
  .option('-nn, --no-numbers', 'Remove numbers from generated password')
  .option('-ns, --no-symbols', 'Remove symbols from generated password');

const {length, save, numbers, symbols} = program.opts();

log(program.opts());

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
  savePassword(generatedPassword);
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied to clipboard'));
