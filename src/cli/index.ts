#!/usr/bin/env node

import { program, Command } from 'commander';
import commands from './commands';

process.on('unhandledRejection', (error: Error) => {
  console.error(error);
});

try {
  program
    .name('cwsc')
    .version('0.1.0')
    .description('Official CWScript compiler by Terran One');

  commands.forEach((cmd: Command) => {
    program.addCommand(cmd);
  });

  program.parse(process.argv);
} catch (error) {
  console.error(error);
}
