# Text-utils

[![Build](https://img.shields.io/github/workflow/status/Satont/text-utils/Build%20Project/master)](https://github.com/Satont/text-utils/actions?query=workflow%3A%22Build+Project%22)
[![Tests](https://img.shields.io/github/workflow/status/Satont/text-utils/Test%20Project/master?label=tests)](https://github.com/Satont/text-utils/actions?query=workflow%3A%22Test+Project%22)
[![Codecov](https://codecov.io/gh/Satont/text-utils/branch/master/graph/badge.svg?token=ABFL6BTPXK)](https://codecov.io/gh/Satont/text-utils/)

Text helpers: detect links, detect caps, and more tools.

[Documentation](https://satont.github.io/text-utils/)

## Installation

```shell
npm i text-utils
```

## Usage

Import via ES6:

```typescript
import { caps } from 'text-utils'

console.log(caps.isCapsed('HELLO WORLD'))
```

Or CommonJS:
```js
const { caps } = require('text-utils')

console.log(caps.isCapsed('HELLO WORLD'))
```


