english-list.js
===============

[![NPM version](https://img.shields.io/npm/v/english-list.svg)](https://www.npmjs.com/package/english-list)
[![build status](https://img.shields.io/travis/kemitchell/english-list.js.svg)](http://travis-ci.org/kemitchell/english-list.js)

Make "X, Y, and Z"-style lists from arrays.

```javascript
var list = require('english-list');

list('and', ['John']);
// === 'John'

list('and', ['John', 'Paul']);
// === 'John and Paul'

list('and', ['John', 'Paul', 'George']);
// === 'John, Paul, and George'

list('and', ['John', 'Paul', 'George'], false);
// === 'John, Paul and George'

list('and', ['John', 'Paul', 'George'], true);
// === 'John, Paul, and George'

list('or', ['John', 'Paul', 'George']);
// === 'John, Paul, or George'

list('and', null);
// throws TypeError

list('and', []);
// throws Error
```
