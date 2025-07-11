export function hexToRgb(hex) {
    const cleanHex = hex.replace('#', '');
    const bigint = parseInt(cleanHex, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}
export function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
}
export function invertColor(hex) {
    const [r, g, b] = hexToRgb(hex);
    return rgbToHex(255 - r, 255 - g, 255 - b);
}
export function darken(hex, amount) {
    const [r, g, b] = hexToRgb(hex);
    return rgbToHex(Math.max(0, r - amount), Math.max(0, g - amount), Math.max(0, b - amount));
}
export function lighten(hex, amount) {
    const [r, g, b] = hexToRgb(hex);
    return rgbToHex(Math.min(255, r + amount), Math.min(255, g + amount), Math.min(255, b + amount));
}
