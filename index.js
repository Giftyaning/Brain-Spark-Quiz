//Calling the Elements
const welcomePage = document.getElementById("welcomePage");
const onboardingPage = document.getElementById("onboardingPage")
const nameInput = document.getElementById("userNameInput")
const errorMessage = document.getElementById("errorMessage")
const errorQuizOpt = document.getElementById("errorMessageOpt");
const displayUserName = document.getElementById("displayUserName")
const startQuiz = document.getElementById("startQuizButton")
const quizPage = document.getElementById("quizPage")



//Function to call the WelcomePage
function displayWelcomePage(nameInput) {
    if (nameInput.value.trim().length === 0) {
        errorMessage.innerHTML = "Please enter your name"
    } else {
        errorMessage.innerHTML = "";
        welcomePage.style.display = "block";
        onboardingPage.style.display = "none";
        displayUserName.innerHTML = nameInput.value.trim();
    }
}


//Variables for Option Selection
let selectedTopic = null;
let selectedLevel = null;

//For Loop for Topic Option
document.querySelectorAll('#topicOptions .option').forEach(option => {
    option.onclick = function() {
        selectedTopic = this.getAttribute('data-topic');

        document.querySelectorAll('#topicOptions .option').forEach(opt => opt.classList.remove('selected'))
        this.classList.add('selected')

        document.getElementById("levelSection").style.display = "block";
    }
})

document.querySelectorAll("#levelOptions .option").forEach((option) => {
  option.onclick = function () {
    selectedLevel = this.getAttribute("data-level");

    document.querySelectorAll("#levelOptions .option").forEach((opt) => opt.classList.remove("selected"));
    this.classList.add("selected");
  };
});


//Function to start Quiz
function startQuizDisplay(startQuiz) {
    if (!selectedTopic || !selectedLevel) {
        errorQuizOpt.innerHTML = "Please select a quiz Topic and Level";
        return;
    } else {
        errorQuizOpt.innerHTML = "";
        welcomePage.style.display = "none";
        quizPage.style.display = "block";
    }
}

`z`