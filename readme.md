# length-sort [![Build Status](https://travis-ci.org/kevva/length-sort.svg?branch=master)](https://travis-ci.org/kevva/length-sort)

> Sort an array of strings by length


## Install

```
$ npm install length-sort
```


## Usage

```js
const lengthSort = require('length-sort');

['ab', 'a', 1234, 'abc'].sort(lengthSort.asc);
//=> ['a', 'ab', 'abc', 1234]

['ab', 'a', 1234, 'abc'].sort(lengthSort.desc);
//=> [1234, 'abc', 'ab', 'a']
```


## API

### lengthSort.asc

Ascending sort.

### lengthSort.desc

Descending sort.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
