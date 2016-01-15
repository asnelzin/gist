# gist [![Build Status](https://travis-ci.org/asnelzin/gist.svg?branch=master)](https://travis-ci.org/asnelzin/gist)

> My transcendent module


## Install

```
$ npm install --save gist
```


## Usage

```js
const gist = require('gist');

gist('unicorns');
//=> 'unicorns & rainbows'
```


## API

### gist(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global gist
```

```
$ gist --help

  Usage
    gist [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ gist
    unicorns & rainbows
    $ gist ponies
    ponies & rainbows
```


## License

MIT © [Alexander Nelzin](http://asnelzin.ru)
