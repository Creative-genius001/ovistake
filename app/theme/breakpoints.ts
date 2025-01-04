// styles/breakpoints.ts
export const breakpoints = {
  mobile: '640px',
  tablet: '960px',
  desktop: '1024px',
};

export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
};
