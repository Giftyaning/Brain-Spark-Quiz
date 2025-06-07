//Calling the Elements
const welcomePage = document.getElementById("welcomePage");
const onboardingPage = document.getElementById("onboardingPage")
const nameInput = document.getElementById("userNameInput")


//Function to call the WelcomePage
function displayWelcomePage(nameInput) {
    if (nameInput.value.trim().length === 0) {
        console.log("Please enter your name")
    } else {
        welcomePage.style.display = "block";
        onboardingPage.style.display = "none";
    }
}