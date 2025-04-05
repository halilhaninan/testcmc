/**
 * Format large numbers to a readable format with abbreviations (K, M, B, T)
 */
export const formatNumber = (num: number): string => {
  if (num === undefined || num === null) return "N/A";

  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + 'T';
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + 'K';
  } else {
    return num.toFixed(2);
  }
};

/**
 * Format a number as a currency with $ prefix
 */
export const formatCurrency = (num: number): string => {
  if (num === undefined || num === null) return "N/A";

  if (num >= 1e12) {
    return '$' + (num / 1e12).toFixed(2) + 'T';
  } else if (num >= 1e9) {
    return '$' + (num / 1e9).toFixed(2) + 'B';
  } else if (num >= 1e6) {
    return '$' + (num / 1e6).toFixed(2) + 'M';
  } else if (num >= 1e3) {
    return '$' + (num / 1e3).toFixed(2) + 'K';
  } else {
    return '$' + num.toFixed(2);
  }
};

/**
 * Format a number as a currency with $ prefix and maximum decimals
 */
export const formatCurrencyWithDecimals = (num: number, decimals = 2): string => {
  if (num === undefined || num === null) return "N/A";

  // For small numbers (stablecoins), show more decimals
  if (num < 1 && num > 0) {
    return '$' + num.toFixed(Math.min(6, decimals));
  }

  // For normal numbers
  return '$' + num.toFixed(decimals);
};

/**
 * Format a percentage with % suffix and color
 */
export const formatPercent = (num: number): string => {
  if (num === undefined || num === null) return "N/A";
  return (num > 0 ? '+' : '') + num.toFixed(2) + '%';
};

/**
 * Format supply numbers
 */
export const formatSupply = (num: number, symbol: string): string => {
  if (num === undefined || num === null) return "N/A";

  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + 'T ' + symbol;
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B ' + symbol;
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M ' + symbol;
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + 'K ' + symbol;
  } else {
    return num.toFixed(2) + ' ' + symbol;
  }
};

/**
 * Get CSS class for positive or negative percentage
 */
export const getPercentClass = (percent: number): string => {
  if (percent > 0) {
    return 'text-green-500';
  } else if (percent < 0) {
    return 'text-red-500';
  } else {
    return 'text-gray-500';
  }
};
