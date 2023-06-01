import { buildLegacyTheme } from "sanity";

const props = {
  "--colecti-white": "rgb(243 243 240)",
  "--colecti-black": "rgb(243 243 240)",
  "--colecti-brand": "rgb(184 255 1)",
  "--colecti-red": "rgb(255 66 45)",
  "--colecti-yellow": "rgb(255 135 141)",
  "--colecti-green": "rgb(184 255 1)",
  "--colecti-blue": "rgb(13 117 253)",
  "--colecti-surface-1": "rgb(243 243 240)",
  "--colecti-surface-2": "rgb(26 26 26)",
  "--colecti-surface-3": "rgb(243 243 240)",
  "--colecti-focus": "rgb( 12 49 226)",
}

export const sanityTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--colecti-black'],
  '--white': props['--colecti-white'],


  '--gray': props["--colecti-surface-1"],
  '--gray-base': props["--colecti-surface-3"],

  '--component-bg': props['--colecti-surface-2'],
  '--component-text-color': props['--colecti-black'],

  /* Brand */
  '--brand-primary': props['--colecti-green'],

  // Default button
  '--default-button-color': props["--colecti-green"],
  '--default-button-primary-color': props['--colecti-green'],
  '--default-button-success-color': props['--colecti-blue'],
  '--default-button-warning-color': props['--colecti-yellow'],
  '--default-button-danger-color': props['--colecti-red'],

  /* State */
  '--state-info-color': props['--colecti-blue'],
  '--state-success-color': props['--colecti-green'],
  '--state-warning-color': props['--colecti-yellow'],
  '--state-danger-color': props['--colecti-red'],

  /* Navbar */
  '--main-navigation-color': props['--colecti-surface-2'],
  '--main-navigation-color--inverted': props['--colecti-white'],

  '--focus-color': props['--colecti-focus'],
})

