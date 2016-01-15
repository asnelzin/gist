#!/usr/bin/env node
'use strict';
var meow = require('meow');
var gist = require('./');

var cli = meow([
	'Usage',
	'  $ gist [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ gist',
	'  unicorns & rainbows',
	'  $ gist ponies',
	'  ponies & rainbows'
]);

console.log(gist(cli.input[0] || 'unicorns'));
