const scienceEasyQuestions = [
  {
    question: "🧪 Which gas do plants mainly absorb during photosynthesis?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon dioxide",
    explanation: "Plants absorb carbon dioxide from the atmosphere and use it to make food during photosynthesis."
  },

  {
    question: "🌍 Which force keeps us attached to the Earth?",
    options: ["Magnetic force", "Friction", "Gravity", "Electric force"],
    answer: "Gravity",
    explanation: "Earth's gravitational force pulls objects toward its center."
  },

  {
    question: "🩸 Which organ pumps blood throughout the human body?",
    options: ["Lungs", "Brain", "Heart", "Kidneys"],
    answer: "Heart",
    explanation: "The heart contracts rhythmically to pump blood through the circulatory system."
  },

  {
    question: "💧 At what temperature does pure water freeze at normal atmospheric pressure?",
    options: ["0°C", "10°C", "32°C", "100°C"],
    answer: "0°C",
    explanation: "Pure water freezes at 0°C under normal atmospheric pressure."
  },

  {
    question: "🔬 Which part of a plant absorbs most water from the soil?",
    options: ["Stem", "Leaves", "Root hairs", "Flowers"],
    answer: "Root hairs",
    explanation: "Root hairs greatly increase the surface area available for absorbing water and minerals."
  },

  {
    question: "⚡ Which material is generally a good conductor of electricity?",
    options: ["Rubber", "Glass", "Copper", "Plastic"],
    answer: "Copper",
    explanation: "Copper contains freely moving electrons, making it an excellent conductor of electricity."
  },

  {
    question: "🌙 Why does the Moon appear to shine?",
    options: [
      "It produces its own light",
      "It reflects sunlight",
      "It reflects Earth's light only",
      "It contains glowing gases"
    ],
    answer: "It reflects sunlight",
    explanation: "The Moon does not produce its own visible light. It reflects light from the Sun."
  },

  {
    question: "🫁 Which gas do humans mainly take in when breathing?",
    options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Helium"],
    answer: "Oxygen",
    explanation: "Humans inhale oxygen, which cells use during cellular respiration to release energy from food."
  }
];
const scienceMediumQuestions = [
  {
    question: "⚡ A bulb has a resistance of 6 Ω and a current of 2 A flows through it. What is its voltage?",
    options: ["3 V", "8 V", "12 V", "18 V"],
    answer: "12 V",
    explanation: "Using Ohm's law V = IR. V = 2 × 6 = 12 V."
  },

  {
    question: "🧬 Which molecule carries most of the genetic information in living organisms?",
    options: ["ATP", "DNA", "Glucose", "Protein"],
    answer: "DNA",
    explanation: "DNA stores the genetic instructions used for growth, development and reproduction."
  },

  {
    question: "🌡️ Why does a metal spoon feel colder than a wooden spoon in the same room?",
    options: [
      "Metal has a lower temperature",
      "Wood produces heat",
      "Metal conducts heat away from your hand faster",
      "Wood absorbs cold"
    ],
    answer: "Metal conducts heat away from your hand faster",
    explanation: "Both objects are at approximately the same temperature, but metal is a much better thermal conductor."
  },

  {
    question: "🪐 Which planet has the shortest year in our Solar System?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury",
    explanation: "Mercury takes only about 88 Earth days to complete one orbit around the Sun."
  },

  {
    question: "🧪 A solution has a pH of 2. Which statement is correct?",
    options: [
      "It is strongly acidic",
      "It is neutral",
      "It is weakly basic",
      "It is strongly basic"
    ],
    answer: "It is strongly acidic",
    explanation: "A pH below 7 indicates acidity, and pH 2 represents a strongly acidic solution."
  },

  {
    question: "🫀 Which chamber of the human heart pumps oxygen-rich blood to the rest of the body?",
    options: [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle"
    ],
    answer: "Left ventricle",
    explanation: "The left ventricle pumps oxygenated blood into the aorta, which distributes it throughout the body."
  },

  {
    question: "🌱 A plant kept in darkness for several days develops pale leaves. What is the main reason?",
    options: [
      "It cannot absorb water",
      "It cannot produce enough chlorophyll",
      "Its roots stop growing",
      "It absorbs too much oxygen"
    ],
    answer: "It cannot produce enough chlorophyll",
    explanation: "Light is important for chlorophyll formation. Without sufficient light, leaves may become pale or yellow."
  },

  {
    question: "🔭 A light-year is a unit used to measure what?",
    options: ["Time", "Mass", "Distance", "Brightness"],
    answer: "Distance",
    explanation: "A light-year is the distance light travels through space in one year."
  }
];
const scienceHardQuestions = [
  {
    question: "🚀 An astronaut weighs much less on the Moon than on Earth. What changes?",
    options: [
      "The astronaut's mass decreases",
      "The astronaut's mass increases",
      "The astronaut's mass stays the same but weight decreases",
      "Both mass and weight become zero"
    ],
    answer: "The astronaut's mass stays the same but weight decreases",
    explanation: "Mass is the amount of matter and remains constant. Weight depends on gravitational acceleration, which is much weaker on the Moon."
  },

  {
    question: "⚡ Two identical resistors are connected in parallel. Compared with one resistor alone, what happens to the total resistance?",
    options: [
      "It doubles",
      "It becomes half",
      "It stays the same",
      "It becomes four times larger"
    ],
    answer: "It becomes half",
    explanation: "For two identical resistors R in parallel, the equivalent resistance is R/2."
  },

  {
    question: "🧬 A mutation occurs in a skin cell but not in a reproductive cell. Which is most likely?",
    options: [
      "It will always be inherited by children",
      "It cannot affect the individual",
      "It is generally not passed to offspring",
      "It will change every cell in the body"
    ],
    answer: "It is generally not passed to offspring",
    explanation: "Mutations in somatic cells such as skin cells are generally not inherited because they are not present in reproductive cells."
  },

  {
    question: "🌡️ A sealed container of gas is heated while its volume remains constant. What happens to the pressure?",
    options: [
      "It decreases",
      "It increases",
      "It becomes zero",
      "It remains exactly the same"
    ],
    answer: "It increases",
    explanation: "At constant volume, increasing the temperature increases the average kinetic energy and collision frequency of gas particles, raising the pressure."
  },

  {
    question: "🌊 Why does ice float on liquid water?",
    options: [
      "Ice has greater density than water",
      "Ice has lower density than liquid water",
      "Ice contains trapped oxygen",
      "Water pushes ice upward because it is colder"
    ],
    answer: "Ice has lower density than liquid water",
    explanation: "Hydrogen bonding creates a more open structure in solid ice, making it less dense than liquid water."
  },

  {
    question: "🧪 A reaction speeds up when a catalyst is added. What does the catalyst mainly do?",
    options: [
      "Increase the temperature permanently",
      "Increase the amount of reactants",
      "Lower the activation energy",
      "Change the final products"
    ],
    answer: "Lower the activation energy",
    explanation: "A catalyst provides an alternative reaction pathway with lower activation energy and is not permanently consumed."
  },

  {
    question: "🌍 If Earth's rotation suddenly stopped, which effect would occur first?",
    options: [
      "Earth would stop orbiting the Sun",
      "Objects at the equator would experience a major change in their motion",
      "The Moon would disappear",
      "Gravity would completely vanish"
    ],
    answer: "Objects at the equator would experience a major change in their motion",
    explanation: "Objects on Earth already have rotational velocity. A sudden stop would cause a dramatic change in their motion, especially near the equator."
  },

  {
    question: "🧠 A person touches a hot object and immediately pulls their hand away before consciously thinking about it. Which system is mainly responsible for this rapid response?",
    options: [
      "Digestive system",
      "Spinal reflex pathway",
      "Endocrine system only",
      "Skeletal system alone"
    ],
    answer: "Spinal reflex pathway",
    explanation: "A reflex arc can process the immediate response through the spinal cord before the brain consciously interprets the sensation."
  }
];
const difficulty = localStorage.getItem("difficulty");
let currentQuestionSet;
if(difficulty === "easy"){
    currentQuestionSet = scienceEasyQuestions;
}
else if (difficulty === "medium"){

currentQuestionSet = scienceMediumQuestions;

}
else if(difficulty=== "hard"){
    currentQuestionSet = scienceHardQuestions;
}


const questions = document.querySelector(".question");
const optionButtons = document.querySelectorAll(".option");
const explain = document.querySelector(".explain");
const nextBtn = document.querySelector(".next-btn");
const progress = document.querySelector(".progress");
const answerToast = document.querySelector(".answer-toast");

const savedXP = localStorage.getItem("royalArchiveXP");

let answeredQuestions = false;

let xp = Number(savedXP) || 0;
let bestScore = 0;

let currentQuestion = 0;


function LoadQuestion(){

    questions.textContent =
        currentQuestionSet[currentQuestion].question;

    for (let i = 0; i < optionButtons.length; i++) {

        optionButtons[i].textContent =
        currentQuestionSet[currentQuestion].options[i];

        optionButtons[i].disabled = false;
    }

    progress.textContent =
        `${currentQuestion + 1}/${currentQuestionSet.length}`;

    answeredQuestions = false;
}


LoadQuestion();


optionButtons.forEach((button,index)=>{

    button.addEventListener("click",()=>{

        if(answeredQuestions) return;

        answeredQuestions = true;

if (
    optionButtons[index].textContent.trim() ===
    currentQuestionSet[currentQuestion].answer.trim()
) {

            console.log("standing ovation for you, smart human");

            xp += 10;
            bestScore += 10;

            localStorage.setItem("royalArchiveXP", xp);

            answerToast.textContent =
                "A splendid triumph, scholar. Your wisdom shines brightly. 👑✨";

            answerToast.classList.remove("hidden");

            optionButtons.forEach(button => {
                button.disabled = true;
            });

        } else {

            console.log("try again smart human");

            answerToast.textContent =
                "A curious misstep, scholar. Let this lesson sharpen your judgment.";

            answerToast.classList.remove("hidden");

            optionButtons.forEach(button => {
                button.disabled = true;
            });
        }


        explain.textContent =
            currentQuestionSet[currentQuestion].explanation;

    });

});


nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < currentQuestionSet.length){

        LoadQuestion();

        explain.textContent = "";

        answerToast.classList.add("hidden");

    } else {

        localStorage.setItem(
            "royalArchiveBestScore",
            bestScore
        );

    }

});
