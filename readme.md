# length-sort [![Build Status](http://img.shields.io/travis/kevva/length-sort/master.svg?style=flat)](http://travis-ci.org/kevva/length-sort)

> Sort an array of strings by length

## Install

```sh
$ npm install --save length-sort
```

## Usage

```js
var lengthSort = require('length-sort');

['ab', 'a', 'abc'].sort(lengthSort.asc);
//=> ['a', 'ab', 'abc']

['ab', 'a', 'abc'].sort(lengthSort.desc);
//=> ['abc', 'ab', 'a']
```

## API

### .asc

Ascending sort.

### .desc

Descending sort.

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
