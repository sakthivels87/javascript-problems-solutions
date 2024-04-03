export function isPalindrome(str) {
  if (!str || typeof str !== 'string') return null;

  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reverseStr = cleanStr.split('').reverse().join('');
  return cleanStr === reverseStr;
}

export function isValidParanthesis(str) {
  if (typeof str === 'number') return false;

  const opening = '{[(';
  const closing = '}])';
  const stack = [];

  for (let c of str) {
    if (opening.includes(c)) {
      stack.push(c);
    } else if (closing.includes(c)) {
      if (stack.length === 0) return false;
      const top = stack.pop();
      if (
        (top === '{' && c !== '}') ||
        (top === '[' && c !== ']') ||
        (top === '(' && c !== ')')
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

export function isBalanced(str) {
  const stack = [];
  const opening = { '{': '}', '[': ']', '(': ')' };
  const closing = { '}': true, ']': true, ')': true };

  for (let c of str) {
    if (opening[c]) {
      stack.push(c);
    } else if (closing[c]) {
      const expected = opening[stack.pop()];
      if (!expected || expected !== c) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
