function solution(n) {
  let answer = 0;
  for (let i = 2; i <= n; i += 1) {
    if ((i !== 2 && i % 2 === 0) || (i !== 3 && i % 3 === 0)) continue;
    else if (isPrime(i)) answer += 1
  }

  function isPrime(num) {
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i += 1) {
      if (num % i === 0) return false
    }
    return true
  }

  return answer;
}
//효율성 검사 통과 안됨