[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![NPM package](https://img.shields.io/npm/v/vue-wireframe)](https://www.npmjs.com/package/vue-wireframe)
[![NPM Dependencies](https://img.shields.io/david/MikeyJL/vue-wireframe)](https://www.npmjs.com/package/vue-wireframe)
[![Last commit](https://img.shields.io/github/last-commit/MikeyJL/vue-wireframe)](https://github.com/MikeyJL/vue-wireframe)

# vue-wireframe

A vue component that helps you plan UI layouts and lets your change the CSS easily.

## Installation

```
npm install vue-wireframe
```

## Usage

```javascript
import Vue from 'vue'

import Wireframe from 'vue-wireframe'

Vue.use(Wireframe)
```

Using the component:

```vue
<div>
  <wireframe />
</div>
```

Or pass in child html elements

```vue
<wireframe>
  <h1>Hello world!</h1>
  <p>This will appear inside the wireframe</p>
</wireframe>
```

## License

[![Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## Author

[![Mikey Lau](https://res.cloudinary.com/dqzwrwyzn/image/upload/v1631438979/team/mikey_phbixs.png)](https://github.com/MikeyJL)
