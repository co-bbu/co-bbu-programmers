function solution(name, yearning, photo) {
  var answer = [];

  for (let i = 0; i < photo.length; i++) {
    let score = 0;

    for (let j = 0; j < photo[i].length; j++) {
      if (yearning[name.indexOf(photo[i][j])]) score += (yearning[name.indexOf(photo[i][j])])
    }

    answer.push(score)
  }

  return answer;
}