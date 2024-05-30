export function formatNumberToK(num) {
  if (num >= 1000) {
      // Convert the number to thousands and format as a string with 'K'
      return (num / 1000).toFixed(0) + 'K';
  } else {
      // If the number is less than 1000, return it as a string
      return num.toString();
  }
}
