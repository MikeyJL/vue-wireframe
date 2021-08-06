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

## Author

[![Mikey Lau](https://firebasestorage.googleapis.com/v0/b/mikey-lau.appspot.com/o/mikey-lau.png?alt=media&token=f978fe3f-bd95-4cdf-ae7e-7204c5ff2d54)](https://github.com/MikeyJL)
