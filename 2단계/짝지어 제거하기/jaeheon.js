function solution(s) {
  let stack = [];

  for (let x of s) {
    if (stack.length !== 0 && stack[stack.length - 1] === x) stack.pop();
    else stack.push(x);
  }

  return stack.length ? 0 : 1;
}
