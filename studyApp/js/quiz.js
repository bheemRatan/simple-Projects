const Questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Markup Language",
      "Hyperlink and Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<script>", "<css>", "<style>", "<link>"],
    answer: "<style>",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: ["font-color", "text-color", "color", "text-style"],
    answer: "color",
  },
  {
    question: "Which HTML tag is used to add a JavaScript file?",
    options: ["<link>", "<js>", "<script>", "<javascript>"],
    answer: "<script>",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
    answer: "Netscape",
  },
  {
    question: "Which symbol is used for comments in CSS?",
    options: ["// comment", "# comment", "/* comment */", "<!-- comment -->"],
    answer: "/* comment */",
  },
  {
    question: "Which method is used to select an element in JavaScript?",
    options: [
      "getElementById()",
      "selectElement()",
      "queryElement()",
      "chooseElement()",
    ],
    answer: "getElementById()",
  },
  {
    question:
      "Which position value places an element relative to its first positioned (not static) ancestor?",
    options: ["static", "absolute", "relative", "fixed"],
    answer: "absolute",
  },
  {
    question: "What is the default display value of a <div> element?",
    options: ["inline", "block", "inline-block", "flex"],
    answer: "block",
  },
];

const nextBtn = document.getElementById("next");
const QueElement = document.getElementById("question");
const options_container = document.getElementById("options_container");
const question_num = document.getElementById("question_num");
const total = document.getElementById("total");
const resetBtn = document.getElementById("reset_btn");
const timeUp = document.getElementById("time");
const isCorrect = document.getElementById("isCorrect");
total.innerHTML = Questions.length;
if (nextBtn.disabled === true) {
  nextBtn.style.backgroundColor = "white";
} else {
  nextBtn.style.backgroundColor = "05686c";
}

let currIndex = 0;

function generateRadioGroup(data) {
  const wraper = document.createElement("div");
  data.options.forEach((text, index) => {
    const optionId = `option${index + 1}`;

    // create input
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = optionId;
    radio.name = "choice";
    radio.value = text;

    // create lable
    const label = document.createElement("label");
    label.htmlFor = optionId;
    label.textContent = text;

    wraper.appendChild(radio);
    wraper.appendChild(label);
  });
  return wraper;
}
function showQuestions(data) {
  question_num.innerHTML = currIndex + 1;
  QueElement.innerHTML = data.question;
  let radio_group = generateRadioGroup(data);
  options_container.innerHTML = "";
  options_container.appendChild(radio_group);
}
let user = {
  correctAns: 0,
  wrongAns: 0,
  score: null,
};
// check the ans is correct or not
function checkAns(data, givenAns) {
  if (data.answer == givenAns) {
    isCorrect.innerText = "Correct Answer";
    isCorrect.style.color = "green";
    user.correctAns++;
  } else {
    user.wrongAns++;
    isCorrect.innerText = "Wrong Answer";
    isCorrect.style.color = "red";
  }
  user.score = user.correctAns * 5;
}

//taggle 30 sec
let time = 30;
var setIntervalId;

function checkTimeUp() {
  setIntervalId = setInterval(() => {
    time--;
    timeUp.innerHTML = time;
    if (time == 0) {
      isCorrect.innerHTML= '';
      user.wrongAns++;
      time = 30;
      currIndex++;
            if (currIndex >= Questions.length - 1) {
              localStorage.setItem("user", JSON.stringify(user));
              window.location.href = "result.html";
            }
      showQuestions(Questions[currIndex]);
      clearInterval(setIntervalId);
      checkTimeUp();
    }
  }, 1000);
}
checkTimeUp();

// next button click function
function NextBtnReact() {
  const selected = document.querySelector('input[name="choice"]:checked');
  if (currIndex === Questions.length - 1) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "result.html";
  } else if (selected) {
    isCorrect.innerHTML='';
    if (setIntervalId) clearInterval(setIntervalId);
    checkAns(Questions[currIndex], selected.value);
    currIndex++;
    setTimeout(()=>{
      isCorrect.innerHTML='';
      showQuestions(Questions[currIndex]);
      time = 30;
      checkTimeUp();
    },1500)
  }
}

resetBtn.addEventListener("click", () => {
  window.location.href = "index.html";
  localStorage.removeItem('user');
});

nextBtn.addEventListener("click", NextBtnReact, false);

showQuestions(Questions[currIndex]);
