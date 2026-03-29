function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function findLargest(numbers) {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
}

function isPalindrome(str) {
  const text = str.toLowerCase();
  const reversed = text.split('').reverse().join('');
  return text === reversed;
}

function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};
