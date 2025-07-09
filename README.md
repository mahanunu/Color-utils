# color-utils 🎨

Utilitaires JS/TS pour manipuler les couleurs (hex et rgb).

## Installation

```bash
npm install color-utils
```

## Utilisation

```ts
import { hexToRgb, invertColor } from 'color-utils';

console.log(hexToRgb('#ffcc00')); // [255, 204, 0]
console.log(invertColor('#ffffff')); // #000000
```

## API

- `hexToRgb(hex)` : renvoie `[r, g, b]`
- `rgbToHex(r, g, b)` : renvoie une couleur hex
- `invertColor(hex)` : inverse la couleur
- `darken(hex, amount)` : assombrit
- `lighten(hex, amount)` : éclaircit
