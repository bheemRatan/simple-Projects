const correct = document.getElementById('correct')
const wrong = document.getElementById('wrong')
const score = document.getElementById('score')


 let data = JSON.parse(localStorage.getItem('user')) || [];

 correct.innerText = data?.correctAns
 wrong.innerText = data?.wrongAns
 score.innerText = data?.score