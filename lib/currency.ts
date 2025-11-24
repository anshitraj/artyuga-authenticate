/**
 * Currency conversion utilities
 * ETH to INR conversion (approximate rate: 1 ETH ≈ 300,000 INR)
 */

const ETH_TO_INR_RATE = 300000; // Approximate conversion rate

/**
 * Converts ETH price string to INR
 * @param ethPrice - Price string like "0.025 ETH"
 * @returns Formatted INR price string like "₹7,500"
 */
export function convertEthToInr(ethPrice: string): string {
  // Extract numeric value from "0.025 ETH" format
  const ethMatch = ethPrice.match(/(\d+\.?\d*)/);
  if (!ethMatch) {
    return ethPrice; // Return original if no match
  }
  
  const ethValue = parseFloat(ethMatch[1]);
  const inrValue = ethValue * ETH_TO_INR_RATE;
  
  // Format with Indian number system (lakhs, crores)
  return formatINR(inrValue);
}

/**
 * Formats INR value with proper formatting
 * @param value - Numeric INR value
 * @returns Formatted string like "₹7,500" or "₹1.5 Lakh"
 */
function formatINR(value: number): string {
  if (value >= 10000000) {
    // Crores
    const crores = value / 10000000;
    return `₹${crores.toFixed(2)} Cr`;
  } else if (value >= 100000) {
    // Lakhs
    const lakhs = value / 100000;
    return `₹${lakhs.toFixed(2)} Lakh`;
  } else {
    // Regular formatting with commas
    return `₹${Math.round(value).toLocaleString('en-IN')}`;
  }
}

/**
 * Extracts numeric ETH value from price string
 * @param ethPrice - Price string like "0.025 ETH"
 * @returns Numeric ETH value
 */
export function extractEthValue(ethPrice: string): number {
  const ethMatch = ethPrice.match(/(\d+\.?\d*)/);
  return ethMatch ? parseFloat(ethMatch[1]) : 0;
}

