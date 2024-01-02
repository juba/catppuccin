import { labels, variants } from "@catppuccin/palette";

import type { Uri } from "vscode";

// vscode schemas
export type * from "@catppuccin/vsc-typegen/types/textmate-colors";
export type * from "@catppuccin/vsc-typegen/types/workbench-colors";
export type * from "@catppuccin/vsc-typegen/types/token-styling";

// extensions
export type * from "@catppuccin/vsc-typegen/types/errorlens";
export type * from "@catppuccin/vsc-typegen/types/github-pull-request";
export type * from "@catppuccin/vsc-typegen/types/gitlens";

export type CatppuccinFlavor = keyof typeof variants;
export type CatppuccinAccent =
  | "rosewater"
  | "flamingo"
  | "pink"
  | "mauve"
  | "red"
  | "maroon"
  | "peach"
  | "yellow"
  | "green"
  | "teal"
  | "sky"
  | "sapphire"
  | "blue"
  | "lavender";
export type CatppuccinWorkbenchMode = "default" | "flat" | "minimal";
export type CatppuccinBracketMode =
  | "rainbow"
  | "dimmed"
  | "monochromatic"
  | "neovim";

export type CatppuccinPalette = {
  name: CatppuccinFlavor;
} & {
  [k in keyof typeof labels]: string;
};

export type ColorOverrides = {
  all?: Partial<CatppuccinPalette>;
  latte?: Partial<CatppuccinPalette>;
  frappe?: Partial<CatppuccinPalette>;
  macchiato?: Partial<CatppuccinPalette>;
  mocha?: Partial<CatppuccinPalette>;
};

export type CustomUIColors = {
  all?: Record<"all", string>;
  latte?: Record<"latte", string>;
  frappe?: Record<"frappe", string>;
  macchiato?: Record<"macchiato", string>;
  mocha?: Record<"mocha", string>;
};

export type ThemeOptions = {
  accent: CatppuccinAccent;
  italicComments: boolean;
  italicKeywords: boolean;
  boldKeywords: boolean;
  colorOverrides: ColorOverrides;
  workbenchMode: CatppuccinWorkbenchMode;
  bracketMode: CatppuccinBracketMode;
  extraBordersEnabled: boolean;
  customUIColors: CustomUIColors;
};

export type ThemePaths = {
  latte: Uri;
  frappe: Uri;
  macchiato: Uri;
  mocha: Uri;
};

export type ThemeContext = {
  palette: CatppuccinPalette;
  options: ThemeOptions;
  isLatte: boolean;
};