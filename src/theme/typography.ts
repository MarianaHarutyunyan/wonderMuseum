/**
 * Font families. These names match the `@expo-google-fonts/*` export names —
 * register them with `useFonts` before the app renders, and load them here
 * rather than hardcoding a family string in a component.
 */
export const fontFamily = {
  headingBold: 'Baloo2_700Bold',
  headingSemiBold: 'Baloo2_600SemiBold',
  bodyRegular: 'Nunito_400Regular',
  bodyMedium: 'Nunito_600SemiBold',
  bodyBold: 'Nunito_700Bold',
} as const;

export type FontFamilyToken = keyof typeof fontFamily;

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  display: 40,

  caption: 13,
  small: 15,
  body: 18,
  subtitle: 24,
  title: 32,
  titleXl: 40,
} as const;

export type FontSizeToken = keyof typeof fontSize;

export const fontWeight = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
} as const;

export type FontWeightToken = keyof typeof fontWeight;

/** Named text presets matching the Wonder Museum type scale. */
export const textVariants = {
  titleXl: {
    fontSize: fontSize.titleXl,
    fontFamily: fontFamily.headingBold,
    fontWeight: fontWeight.extraBold,
    lineHeight: 48,
  },
  title: {
    fontSize: fontSize.title,
    fontFamily: fontFamily.headingBold,
    fontWeight: fontWeight.bold,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: fontSize.subtitle,
    fontFamily: fontFamily.headingSemiBold,
    fontWeight: fontWeight.semiBold,
    lineHeight: 32,
  },
  body: {
    fontSize: fontSize.body,
    fontFamily: fontFamily.bodyRegular,
    fontWeight: fontWeight.regular,
    lineHeight: 26,
  },
  small: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.bodyMedium,
    fontWeight: fontWeight.medium,
    lineHeight: 22,
  },
  caption: {
    fontSize: fontSize.caption,
    fontFamily: fontFamily.bodyRegular,
    fontWeight: fontWeight.regular,
    lineHeight: 18,
  },
} as const;

export type TextVariantToken = keyof typeof textVariants;
