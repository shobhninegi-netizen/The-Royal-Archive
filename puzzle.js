

const puzzleEasyQuestions = [
  {
    question: "🧩 What comes next? 1, 4, 9, 16, 25, ?",
    options: ["30", "36", "40", "49"],
    answer: "36",
    explanation: "These are perfect squares: 1², 2², 3², 4², 5². The next is 6² = 36."
  },

  {
    question: "🔢 A number is doubled and then 6 is added. The result is 20. What is the number?",
    options: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "Let the number be x. 2x + 6 = 20, so 2x = 14 and x = 7."
  },

  {
    question: "🐑 A farmer has 12 sheep. All but 5 run away. How many sheep remain?",
    options: ["5", "7", "12", "0"],
    answer: "5",
    explanation: "'All but 5' means 5 sheep remain."
  },

  {
  question: "🕰️ A clock takes 5 seconds to strike 6 times. How long will it take to strike 12 times?",
  options: ["10 seconds", "11 seconds", "12 seconds", "15 seconds"],
  answer: "11 seconds",
  explanation: "Six strikes create 5 intervals, so each interval takes 1 second. Twelve strikes create 11 intervals, so they take 11 seconds."
},

  {
    question: "🔐 If A = 1, B = 2, C = 3 and so on, what is the value of BAD?",
    options: ["6", "7", "8", "9"],
    answer: "7",
    explanation: "B = 2, A = 1, D = 4. So 2 + 1 + 4 = 7."
  },

  {
    question: "🚗 A car travels 60 km in 1 hour. How far will it travel in 2.5 hours at the same speed?",
    options: ["120 km", "140 km", "150 km", "180 km"],
    answer: "150 km",
    explanation: "60 × 2.5 = 150 km."
  },

  {
    question: "🧠 Which number does NOT belong? 8, 27, 64, 100, 125",
    options: ["27", "64", "100", "125"],
    answer: "100",
    explanation: "8, 27, 64 and 125 are cubes: 2³, 3³, 4³ and 5³. 100 is not a perfect cube."
  },

  {
    question: "🍎 You have 3 apples and take away 2. How many apples do you have?",
    options: ["1", "2", "3", "0"],
    answer: "2",
    explanation: "You took 2 apples, so you have those 2 apples."
  }
];
const puzzleMediumQuestions = [
  {
    question: "🧩 What comes next? 3, 6, 18, 72, 360, ?",
    options: ["1080", "1800", "2160", "2520"],
    answer: "2160",
    explanation: "Multiply by consecutive numbers: ×2, ×3, ×4, ×5. Therefore, 360 × 6 = 2160."
  },

  {
    question: "💡 There are 3 switches outside a room and 3 bulbs inside. You can enter the room only once. What can help you identify the switches?",
    options: [
      "Only the light",
      "The temperature of the bulbs",
      "The sound of the switches",
      "The position of the switches"
    ],
    answer: "The temperature of the bulbs",
    explanation: "Turn one switch on for a while, then off. Turn another on and enter. The lit bulb matches the second switch, the warm unlit bulb matches the first, and the cold unlit bulb matches the third."
  },

  {
    question: "🔢 A sequence follows this rule: 2, 3, 5, 9, 17, ?",
    options: ["25", "31", "33", "35"],
    answer: "33",
    explanation: "Each number is multiplied by 2 and then 1 is added: 2×2+1=5, 5×2−1 doesn't fit. Instead, differences are 1, 2, 4, 8, so the next difference is 16. 17 + 16 = 33."
  },

  {
    question: "🏃 You are in a race and overtake the person in 2nd place. What position are you now in?",
    options: ["1st", "2nd", "3rd", "You cannot know"],
    answer: "2nd",
    explanation: "You take the position of the person you overtook, so you are now 2nd."
  },

  {
    question: "⚖️ You have 8 identical-looking balls. One is heavier. What is the minimum number of balance-scale weighings needed to guarantee finding it?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "Divide them into groups of 3, 3 and 2. The first weighing identifies the group containing the heavier ball, and the second finds the exact ball."
  },

  {
    question: "🚪 Two doors exist: one leads to safety and one to danger. One guard always lies and the other always tells the truth. What should you ask one guard?",
    options: [
      "Which door is safe?",
      "Are you the truthful guard?",
      "Which door would the other guard say leads to safety?",
      "Do you like this door?"
    ],
    answer: "Which door would the other guard say leads to safety?",
    explanation: "Both guards will point you toward the dangerous door. Therefore, choose the opposite door."
  },

  {
    question: "🧠 What is the missing number? 4 → 20, 5 → 30, 6 → 42, 7 → ?",
    options: ["48", "54", "56", "63"],
    answer: "56",
    explanation: "Each number is multiplied by the next number: 4×5=20, 5×6=30, 6×7=42, so 7×8=56."
  },

  {
    question: "🌉 Four people need to cross a bridge at night. Their times are 1, 2, 7 and 10 minutes. Only two can cross at once and they need one torch. What is the minimum total time?",
    options: ["17 minutes", "19 minutes", "20 minutes", "21 minutes"],
    answer: "17 minutes",
    explanation: "1 & 2 cross (2), 1 returns (1), 7 & 10 cross (10), 2 returns (2), 1 & 2 cross (2). Total = 17 minutes."
  }
];
const puzzleHardQuestions = [
  {
    question: "🧩 What comes next? 1, 11, 21, 1211, 111221, ?",
    options: ["312211", "212211", "311221", "131122"],
    answer: "312211",
    explanation: "Each term describes the previous one. 111221 means three 1s, two 2s and one 1 → 312211."
  },

  {
    question: "💰 You have 9 coins. One is lighter than the others. Using a balance scale, what is the minimum number of weighings needed to guarantee finding it?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "Divide the coins into three groups of 3. One weighing identifies the group containing the lighter coin, and the second identifies the coin."
  },

  {
    question: "🕵️ A man looks at a photograph and says: 'Brothers and sisters I have none, but this man's father is my father's son.' Who is in the photograph?",
    options: [
      "His father",
      "His son",
      "His brother",
      "Himself"
    ],
    answer: "His son",
    explanation: "Since he has no siblings, 'my father's son' means himself. Therefore, the man's father is the speaker, so the photograph shows his son."
  },

  {
    question: "🔢 What number replaces the question mark? 2, 12, 36, 80, 150, ?",
    options: ["240", "252", "280", "300"],
    answer: "252",
    explanation: "The pattern is n² × (n+1): 1²×2=2, 2²×3=12, 3²×4=36, 4²×5=80, 5²×6=150. Therefore, 6²×7 = 252."
  },

  {
    question: "⏳ You have two ropes. Each takes exactly 60 minutes to burn, but they burn unevenly. How can you measure exactly 45 minutes?",
    options: [
      "Burn one rope from one end",
      "Burn both ropes from one end",
      "Burn one rope from both ends and the other from one end",
      "Cut one rope in half"
    ],
    answer: "Burn one rope from both ends and the other from one end",
    explanation: "The first rope burns out in 30 minutes. Then light the other end of the second rope. Its remaining 30-minute burn time takes 15 minutes. Total = 45 minutes."
  },

  {
    question: "🧠 A room has 100 lockers, all initially closed. Person 1 opens every locker. Person 2 changes every 2nd locker. Person 3 changes every 3rd locker, and so on until person 100. Which lockers remain open?",
    options: [
      "All even-numbered lockers",
      "All odd-numbered lockers",
      "Perfect-square-numbered lockers",
      "Only locker 100"
    ],
    answer: "Perfect-square-numbered lockers",
    explanation: "A locker is changed once for every divisor it has. Only perfect squares have an odd number of divisors, so only their lockers remain open."
  },

  {
    question: "⚡ You have 12 identical-looking balls. One is either heavier or lighter, but you don't know which. What is the minimum number of balance-scale weighings needed to identify the odd ball and determine whether it is heavier or lighter?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "With a carefully planned three-weighing strategy, a balance scale can distinguish all possible heavy/light cases among 12 balls."
  },

  {
    question: "🎩 Three people stand in a line. Each can see the hats of people in front but not their own. Hats are chosen from 3 black and 2 white hats. The person at the back says, 'I don't know my hat.' The middle person says, 'I don't know either.' The person at the front then says, 'I know my hat.' What color is the front person's hat?",
    options: ["Black", "White", "Cannot be determined", "Both are possible"],
    answer: "Black",
    explanation: "The back person's uncertainty rules out both visible hats being white. The middle person's uncertainty then gives enough information for the front person to deduce that their own hat must be black."
  }
];
const difficulty = localStorage.getItem("difficulty");

let currentQuestionSet;

if (difficulty === "easy") {
    currentQuestionSet = puzzleEasyQuestions;
}
else if (difficulty === "medium") {
    currentQuestionSet = puzzleMediumQuestions;
}
else if (difficulty === "hard") {
    currentQuestionSet = puzzleHardQuestions;
}

const questions = document.querySelector(".question");
const optionButtons = document.querySelectorAll(".option");
const explain = document.querySelector(".explain");
const nextBtn = document.querySelector(".next-btn");
const progress = document.querySelector(".question-number");
const answerToast = document.querySelector(".answer-toast");

const savedXP = localStorage.getItem("royalArchiveXP");

let answeredQuestions = false;
let xp = Number(savedXP) || 0;
let bestScore = 0;
let currentQuestion = 0;


function loadQuestions() {

    questions.textContent =
        currentQuestionSet[currentQuestion].question;

    for (let i = 0; i < optionButtons.length; i++) {

        optionButtons[i].textContent =
            currentQuestionSet[currentQuestion].options[i];

        optionButtons[i].disabled = false;
    }

    progress.textContent =
        `${currentQuestion + 1}/${currentQuestionSet.length}`;

    explain.textContent = "";

    answerToast.classList.add("hidden");

    answeredQuestions = false;
}


loadQuestions();


optionButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        if (answeredQuestions) return;

        answeredQuestions = true;

        if (
            optionButtons[index].textContent ===
            currentQuestionSet[currentQuestion].answer
        ) {

            xp += 10;
            bestScore += 10;

            localStorage.setItem(
                "royalArchiveXP",
                xp
            );

            answerToast.textContent =
                "A splendid triumph, scholar. Your wisdom shines brightly. 👑✨";

        } else {

            answerToast.textContent =
                "A curious misstep, scholar. Let this lesson sharpen your judgment.";

        }

        answerToast.classList.remove("hidden");

        optionButtons.forEach(button => {
            button.disabled = true;
        });

        explain.textContent =
            currentQuestionSet[currentQuestion].explanation;

    });

});


nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion < currentQuestionSet.length) {

        loadQuestions();

    } else {

        localStorage.setItem(
            "royalArchiveBestScore",
            bestScore
        );

        nextBtn.textContent = "COMPLETED 👑";
        nextBtn.disabled = true;
    }

});
