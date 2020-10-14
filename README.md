# Textalyze

![](https://img.shields.io/github/workflow/status/Satont/text-utils/Build%20Project/master) ![](https://img.shields.io/github/workflow/status/Satont/text-utils/Test%20Project/master?label=tests) [![codecov](https://codecov.io/gh/Satont/text-utils/branch/main/graph/badge.svg?token=ABFL6BTPXK)]()

Text helpers: detect links, detect caps, and more tools.

[Documentation](https://satont.github.io/text-utils/)

## Installation

Install package:

```shell
npm i text-utils
```

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


