export enum PaletteColor {
  grey100 = "#1E1E1E",
  grey200 = "#282627",
  grey300 = "#3E4244",

  white = "#ffffff",
  white100 = "#e6e6e6",

  yellow100 = "#FDD365",
  red100 = "#F15156",
}

export enum ThemeDark {
  primaryTitleColor = PaletteColor.yellow100,
  secondaryTitleColor = PaletteColor.red100,

  appBackground = PaletteColor.grey100,
  controlBackground = PaletteColor.grey300,
  panelBackground = PaletteColor.grey200,

  foregroundColor = PaletteColor.white100,
}

export type Theme = "dark";

export type ThemeColor = PaletteColor | ThemeDark;
