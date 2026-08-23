
console.log("JS connected");
const xpDisplay = document.querySelector(".xp-count");
const savedXP = localStorage.getItem("royalArchiveXP");
if (savedXP !== null) {
    xpDisplay.textContent = savedXP;

}
const bestScoreDisplay = document.querySelector(".best-score");
const savedBestScore = localStorage.getItem("royalArchiveBestScore");

if (savedBestScore !== null) {
    bestScoreDisplay.textContent = savedBestScore;
}
let selectedDifficulty="";
let selectedCategory = "";
const categoryCard = document.querySelectorAll(".category-card");
const preview =  document.querySelector(".chronicle-preview");
const description = document.getElementById("category-description");
const heading = document.getElementById("difficulty-heading");
const difficulty = document.querySelector(".difficulty");
const startSection = document.querySelector(".start-section");
const difficultybtn = document.querySelectorAll(".difficulty-btn");
const previewIcon = document.getElementById("category-icon");
const startBtn = document.getElementById("start-btn");
console.log(categoryCard.length);

const categoryInfo=  {
    history:{
        icon:"🏛️",
        heading:" History",
        description:"Walk through the chronicles of great empires, legendary rulers, and defining moments that shaped our world."},
        puzzle:{
            icon:"🧠",
            heading:" Puzzle",
        description:"Where logic meets precision. Solve problems, uncover patterns, and master the language of numbers."},
        
            science:{
                icon:"⚗️",
                heading:" Science",
                description:"Explore the wonders of nature, uncover scientific discoveries, and understand the universe around you."},
                literature:{
                    icon:"🪶",
                    heading:" Literature",
                    description:"Journey through timeless stories, remarkable authors, and the beauty of language and imagination."},
                
                    
                    gk:{
                        icon:"💡",
                        heading:" General Knowledge",
                        description:"A collection of fascinating facts, world events, inventions, and knowledge from every field."},

                       spirituality:{
                        icon:"🕊️",
                        heading:" Spirituality",
                        description:"Reflect upon wisdom, philosophy, inner peace, and the timeless teachings that guide humanity."
                       },
                    }; 
                       
categoryCard.forEach((card)=>{
    card.addEventListener("click",()=> {
        categoryCard.forEach((item) =>{

            item.classList.remove("active");
        });
        card.classList.add("active");
        

         selectedCategory = card.dataset.category;
        const categoryData = categoryInfo[selectedCategory];
        if(!categoryData)return;
       
        console.log(selectedCategory);
        console.log(categoryData);

 previewIcon.textContent = categoryData.icon;
    
    heading.textContent = categoryData.heading;
    description.textContent = categoryData.description;
   preview.classList.remove("hidden") ; 
   difficultybtn.forEach((btn) => {
    btn.classList.remove("active");
});

selectedDifficulty = "";
startSection.classList.add("hidden");
   console.log(card);
   console.log(card.dataset.category);        
});  
});

selectedDifficulty = "";
startSection.classList.add("hidden");
difficultybtn.forEach((button) => {
button.addEventListener("click",() =>{
difficultybtn.forEach((btn)=>{
    btn.classList.remove("active");
});
button.classList.add("active");
selectedDifficulty = button.dataset.level;
startSection.classList.remove("hidden");
});
});
startBtn.addEventListener("click"  ,()=>{


    if (selectedCategory === "" || selectedDifficulty === "") {
        alert("Please select a category and difficulty first.");
        return;
    }
    localStorage.setItem("category",selectedCategory);
    localStorage.setItem("difficulty",selectedDifficulty);
if (selectedCategory === "spirituality") {
    window.location.href = "spi.html";
} else {
    window.location.href = selectedCategory + ".html";
}
});



