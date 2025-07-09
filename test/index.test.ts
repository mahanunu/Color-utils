import { describe, it, expect } from 'vitest';
import { hexToRgb, rgbToHex, invertColor } from '../src/index';

describe('hexToRgb', () => {
  it('convertit #FFFFFF en [255, 255, 255]', () => {
    expect(hexToRgb('#FFFFFF')).toEqual([255, 255, 255]);
  });
});

describe('rgbToHex', () => {
  it('convertit [255, 255, 255] en #ffffff', () => {
    expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
  });
});

describe('invertColor', () => {
  it('inverse #FFFFFF en #000000', () => {
    expect(invertColor('#FFFFFF')).toBe('#000000');
  });
});
