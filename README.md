# vibe-is-positive 🤖➕

> Check if a number (or bigint) is positive, negative, or zero... using OpenAI.  
Because why use math when you can use AI? 😎

---

## Install

```bash
npm install vibe-is-positive
```

---

## Setup

Make sure you have an [OpenAI API key](https://platform.openai.com/).  
Set it in your environment:

```bash
export OPENAI_API_KEY=your_api_key_here
```

On Windows (PowerShell):

```powershell
$env:OPENAI_API_KEY="your_api_key_here"
```

---

## Usage

### ESM
```js
import { isPositive, isNegative, isZero } from "vibe-is-positive";

console.log(await isPositive(10));    // true
console.log(await isNegative(-5));    // true
console.log(await isZero(0));         // true

// works with bigint too
console.log(await isPositive(123n));  // true
console.log(await isNegative(-99n));  // true
console.log(await isZero(0n));        // true
```

### CJS
```js
const { isPositive, isNegative, isZero } = require("vibe-is-positive");

(async () => {
  console.log(await isPositive(42));   // true
  console.log(await isNegative(-7));   // true
  console.log(await isZero(0));        // true

  console.log(await isPositive(42n));  // true
})();
```

---

## API

### `isPositive(num: number | bigint): Promise<boolean>`
Returns `true` if `num > 0`.

### `isNegative(num: number | bigint): Promise<boolean>`
Returns `true` if `num < 0`.

### `isZero(num: number | bigint): Promise<boolean>`
Returns `true` if `num === 0`.

---

## Notes

- Requires `OPENAI_API_KEY` in your environment.  
- Uses `gpt-4o-mini` under the hood.  
- Supports both **number** and **bigint**.  
- Yes, this package actually calls AI just to check a number. 🤡

---

## License

MIT © MewTheDev
