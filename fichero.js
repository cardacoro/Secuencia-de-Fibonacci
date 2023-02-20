
function fibonacci(num) {
  let fibArr = [1, 1];
  for (let i = 2; i < num; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
  }
  return fibArr;
}
