<p align="center">
  <img width="240" src="https://gridonic.github.io/assets/images/logos/gridonic.svg"><br>
  Consistent console logging for our CLI apps.
</p>

<br>

## Installation

Very simple. Just run `$ npm install @gridonic/log`.

<br>

## How to use?

Examples say more than a thousand words.

```js
const { info, error, success, warning } = require('@gridonic/log');

try {
    info('Starting my app…');
    
    if (specialCondition() === true) {
        warning('Please pay attention to this.');
    }
    
    // Make sure success message has enough blank space before it
    success('Everything done.', 0, 3);
} catch(myBadError) {
    error(myBadError);
}
```

You may also use the **second** (`newlineAfter`)  and **third** (`newlineBefore`) parameter for adding newlines.

#  
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>
