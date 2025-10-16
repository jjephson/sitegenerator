// WCAG AA Contrast Checker Utility

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

/**
 * Calculate relative luminance
 */
export function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1, color2) {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  
  if (!rgb1 || !rgb2) return 1
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b)
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b)
  
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  
  return (brightest + 0.05) / (darkest + 0.05)
}

/**
 * Check if contrast meets WCAG AA standards
 * @param {string} textColor - Hex color for text
 * @param {string} bgColor - Hex color for background
 * @param {string} size - 'normal' or 'large' (18pt+ or 14pt+ bold)
 * @returns {object} - { passes, ratio, level }
 */
export function checkContrast(textColor, bgColor, size = 'normal') {
  const ratio = getContrastRatio(textColor, bgColor)
  
  // WCAG AA requirements
  const normalTextMin = 4.5
  const largeTextMin = 3.0
  
  // WCAG AAA requirements
  const normalTextAAA = 7.0
  const largeTextAAA = 4.5
  
  const minRatio = size === 'large' ? largeTextMin : normalTextMin
  const aaaRatio = size === 'large' ? largeTextAAA : normalTextAAA
  
  let level = 'Fail'
  if (ratio >= aaaRatio) {
    level = 'AAA'
  } else if (ratio >= minRatio) {
    level = 'AA'
  }
  
  return {
    passes: ratio >= minRatio,
    ratio: ratio.toFixed(2),
    level,
    minRequired: minRatio
  }
}

/**
 * Get a readable text color (black or white) for any background
 */
export function getReadableTextColor(bgColor) {
  const blackContrast = getContrastRatio('#000000', bgColor)
  const whiteContrast = getContrastRatio('#ffffff', bgColor)
  
  return whiteContrast > blackContrast ? '#ffffff' : '#000000'
}

/**
 * Suggest alternative colors if contrast fails
 */
export function suggestColors(textColor, bgColor) {
  const contrast = checkContrast(textColor, bgColor)
  
  if (contrast.passes) {
    return null
  }
  
  return {
    suggestedText: getReadableTextColor(bgColor),
    message: `Current contrast ratio is ${contrast.ratio}:1. WCAG AA requires at least ${contrast.minRequired}:1`
  }
}

