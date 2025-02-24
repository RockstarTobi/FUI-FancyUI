import Color from 'color';
import { ColorTypes, HSLAColor, HSLColor, RGBAColor, RGBColor } from '../FancyColorOutput.model';
import { colorFormats } from '@/utils/variables/colorFormat';

//this function transforms a color to the desired format of the color output switch
const colorTransformator = (color: Color, opacity: number, formatIdx: number): ColorTypes => {
  const colorObject = Color(color);
  const currentColorFormat = colorFormats[formatIdx];

  switch (currentColorFormat) {
    case 'rgb': {
      const rgbColor = colorObject.rgb().object();
      return {
        type: 'rgb' as const,
        color: { r: Math.round(rgbColor.r), g: Math.round(rgbColor.g), b: Math.round(rgbColor.b) } as RGBColor,
      };
    }
    case 'rgba': {
      const rgbaColor = colorObject.rgb().object();
      return {
        type: 'rgba' as const,
        color: {
          r: Math.round(rgbaColor.r),
          g: Math.round(rgbaColor.g),
          b: Math.round(rgbaColor.b),
          a: opacity,
        } as RGBAColor,
      };
    }
    case 'hsl': {
      const hslColor = colorObject.hsl().object();
      return {
        type: 'hsl' as const,
        color: { h: Math.round(hslColor.h), s: Math.round(hslColor.s), l: Math.round(hslColor.l) } as HSLColor,
      };
    }
    case 'hsla': {
      const hslaColor = colorObject.hsl().object();
      return {
        type: 'hsla' as const,
        color: {
          h: Math.round(hslaColor.h),
          s: Math.round(hslaColor.s),
          l: Math.round(hslaColor.l),
          a: opacity,
        } as HSLAColor,
      };
    }
    case 'hex':
      return { type: 'hex' as const, color: colorObject.hex() };
    case 'hexa': {
      const createHEXAColor = colorObject.alpha(opacity);
      return { type: 'hexa' as const, color: createHEXAColor.hexa() };
    }
    default:
      throw new Error(`Unknown color format`);
  }
};

export default colorTransformator;
