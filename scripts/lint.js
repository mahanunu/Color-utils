#!/usr/bin/env node
import eslint from 'eslint';

const cli = new eslint.ESLint({});
const results = await cli.lintFiles(['src/**/*.ts', 'test/**/*.ts']);
const formatter = await cli.loadFormatter('stylish');
const resultText = formatter.format(results);

console.log(resultText);

const hasError = results.some((r) => r.errorCount > 0);
if (hasError) process.exit(1);
