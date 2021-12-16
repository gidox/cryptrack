export const customTheme = {
  colors: {
    primary: "#F21CC8",
    secondary: "#0CF2B4",
    background: "white",
    callout: "pink",
    accent: "green",
    muted: "gray",
    warning: "yellow",
    error: "red",
    gray: "#888",
  },
  space: {
    $none: 0,
    $0: 0,
    $1: 4,
    $2: 8,
    $3: 16,
    $4: 32,
    $5: 64,
    $6: 128,
    $7: 256,
    $8: 512,
  },
  types: {
    onlyAllowThemeValues: {
      // let's only restrict colors!
      // colors: 'always',
    },
    // strictVariants: true,
  },
  shadows: {
    md: {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.8,
      shadowRadius: 14,
      elevation: 25,
      shadowColor: "background",
    },
  },
  text: {
    primary: {
      fontSize: 40,
    },
    secondary: {
      fontSize: 60,
    },
  },
  sizes: {
    container: 700,
  },
  textShadows: {
    onImage: {
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      textShadowColor: "gray",
    },
  },
  linearGradients: {
    strong: ["primary", "secondary"],
    bluetopink: ["#3721DA", "#DF31C2"],
    light: ["red", "green"],
  },
  layout: {
    wide: {},
    narrow: {},
  },
  // space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // space: {
  //   $0: 0,
  //   $1: 4,
  //   $2: 8,
  //   $3: 16,
  //   $4: 32,
  //   $5: 64,
  //   $6: 128,
  //   $7: 256,
  //   $8: 512,
  // },
  // fontWeights: {
  //   black: "500",
  // },
  // types: {
  //   onlyAllowThemeValues: {
  //     // space: 'always',
  //     // colors: 'always',
  //   },
  //   reactNativeTypesOnly: false,
  // },
};
