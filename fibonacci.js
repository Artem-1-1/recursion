function fibonacci(n) {
  const array = [0, 1];
  if (n <= 0) return 'Enter number greater than 0.';
  if (n === 1) return [0];
  if (n === 2) return array;
  for (let i = 2; i < n; i++) {
    array.push(array[array.length-2] + array[array.length-1]);
  }
  return array
}

console.log(fibonacci(5));

function fibonacciRecursive(n, sequence = [0, 1]) {
  if (sequence.length >= n) {
    return sequence.slice(0 , n)
  }
  const newNum = sequence.at(-1) + sequence.at(-2);
  sequence.push(newNum);
  return fibonacciRecursive(n, sequence);
}

console.log(fibonacciRecursive(8));