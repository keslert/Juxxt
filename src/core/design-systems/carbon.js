export default {
  spacing = {
    inset: [0,5,10,15,20,30,40,60,80]
  },
  typography: {
    lineHeight: {
      root: 1.5, 
      title: 1.25,
    },
    letterSpacing: text => { 
      if(text.isBold || text.isUppercase || text.isHeader) {
        return 0.5;
      }
      return 1;
    },
    // Custom letter-spacing is used only on a few special styles. The styles that it can be applied to are headers, bold weights and always to All Caps.
    sizes: {
      root: 16,
      _d: [11,12,14,16,18,20,23,26,29,32,36,41,46,52,58,66,74,83,94]
    },
    weights: [
      300, // Should only be used at sizes greater than or equal to 18px / 1.125rem
      400,
      700,
    ],
    fontSmoothing: text => {
      if(text.weight === 700) {
        return 'antialiased';
      }
      return 'inherit';
    }
  },
  color: {}
}