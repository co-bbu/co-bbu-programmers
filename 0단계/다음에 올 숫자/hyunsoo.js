function solution(common) {
  var answer = 0;
  if(common[1] - common[0] === common[2] - common[1]){
      answer = (common[1] - common[0]) + common[common.length-1]
  } else {
      answer = (common[1] / common[0]) * common[common.length-1]
  }
  return answer;
}