function sumPrimes(num) {
  // Function to check if a number is prime
  function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n > 1;
  }

  // Sum all prime numbers up to num
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumPrimes(10)); // Output: 17
