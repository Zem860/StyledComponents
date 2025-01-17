const dimensions = {
    largeDesktop: 1919,
    desktop: 1439,
    laptop: 1279,
    tablet: 1023,
    mobile: 767,
    smallMobile: 479,
  };
  
  const breakpoints = {
    largeDesktop: `(max-width: ${dimensions.largeDesktop}px)`,
    desktop: `(max-width: ${dimensions.desktop}px)`,
    laptop: `(max-width: ${dimensions.laptop}px)`,
    tablet: `(max-width: ${dimensions.tablet}px)`,
    mobile: `(max-width: ${dimensions.mobile}px)`,
    smallMobile: `(max-width: ${dimensions.smallMobile}px)`,
  };
  
  export default breakpoints;
  