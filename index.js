const factorial = (n) => {
  if (n === 1) {
    return 1;
  }

  const iter = (i, n) => {
    if (n % i === 0) {
      return i;
    }
    return iter(i + 1, n);
  };
  return iter(2, n);
};

console.log(factorial(17));
