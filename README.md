# 🎨 color-utils

[![NPM version](https://img.shields.io/npm/v/color-utils?color=blue)](https://www.npmjs.com/package/color-utils)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)](https://github.com/mahanunu/Color-utils/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**color-utils** est une librairie JavaScript/TypeScript simple et légère pour manipuler facilement les couleurs au format HEX et RGB.

---

## 📦 Installation

```bash
npm install color-utils
```

> Ou en local pour test :  
> `npm install ./chemin/vers/color-utils`

---

## 🚀 Utilisation

```ts
import {
  hexToRgb,
  rgbToHex,
  invertColor,
  darken,
  lighten,
} from 'color-utils';

console.log(hexToRgb('#ffcc00'));        // [255, 204, 0]
console.log(rgbToHex(255, 204, 0));      // '#ffcc00'
console.log(invertColor('#000000'));     // '#ffffff'
console.log(darken('#ffcc00', 30));      // '#e6b300'
console.log(lighten('#ffcc00', 30));     // '#ffff1e'
```

---

## 🧩 API

### `hexToRgb(hex: string): [number, number, number]`
> Convertit un code hexadécimal en tableau RGB

---

### `rgbToHex(r: number, g: number, b: number): string`
> Convertit des valeurs RGB en hexadécimal

---

### `invertColor(hex: string): string`
> Retourne la couleur opposée (inversée)

---

### `darken(hex: string, amount: number): string`
> Assombrit une couleur en diminuant ses canaux RGB

---

### `lighten(hex: string, amount: number): string`
> Éclaircit une couleur en augmentant ses canaux RGB

---

## 🧪 Tests

```bash
npm run test
```

> Testé avec [Vitest](https://vitest.dev/)

---

## 🧼 Lint & Format

```bash
npm run lint     # Vérifie les erreurs avec ESLint
npm run format   # Reformate automatiquement le code avec Prettier
```

---

## 📝 Licence

Distribué sous licence MIT © 2025 Mahalia Pires  
Voir le fichier [LICENSE](LICENSE)

---

## 🔗 Liens utiles

- 📁 [Code source sur GitHub](https://github.com/mahanunu/Color-utils)
- 📦 [color-utils sur NPM](https://www.npmjs.com/package/color-utils)
