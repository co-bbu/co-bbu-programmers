function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer += 1
      }
    }
  }

  function isPrime(sum) {
    for (let i = 2; i <= parseInt(Math.sqrt(sum)); i += 1) {
      if (sum % i === 0) return false
    }
    return true
  }

  return answer;
}