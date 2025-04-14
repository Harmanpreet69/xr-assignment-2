// Determine file import prefix based on production or development enivronment

export const importPrefix = import.meta.env.PROD
  ? "https://harmanpreet69.github.io/xr-assignment-2"
  : "public";
