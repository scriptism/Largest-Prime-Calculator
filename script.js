document.getElementById("primeForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  const inputNum = parseInt(document.getElementById("input").value);
  const resultElement = document.getElementById("output");

  if (inputNum < 2) {
    resultElement.textContent = "Please enter a number ≥ 2";
    return;
  }

  const largestPrime = largestPrimeFactor(inputNum);
  resultElement.textContent = largestPrime;
});

function largestPrimeFactor(n) {
  let largestFactor = 1;

  // Remove all factors of 2
  while (n % 2 === 0) {
    largestFactor = 2;
    n /= 2;
  }

  // Check odd divisors up to sqrt(n)
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      largestFactor = i;
      n /= i;
    }
  }

  // If remaining n is a prime > 2
  if (n > 2) {
    largestFactor = n;
  }

  return largestFactor;
}
