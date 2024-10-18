// Function to generate a new random multiplication question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 11; // Random number between 11 and 20
    const num2 = Math.floor(Math.random() * 10) + 1;  // Random number between 1 and 10
    const questionElement = document.getElementById("question");
    const answerInput = document.getElementById("answer");

    // Set the new question and store the correct answer in the 'data-answer' attribute
    questionElement.textContent = `What is ${num1} * ${num2}?`;
    questionElement.dataset.answer = num1 * num2;

    // Reset the input box color to white
    answerInput.style.backgroundColor = 'white';
    answerInput.value = ''; // Clear previous answer
}

// Function to check the answer and update the background color accordingly
function checkAnswer() {
    const answerInput = document.getElementById("answer");
    const userAnswer = parseInt(answerInput.value);
    const correctAnswer = parseInt(document.getElementById("question").dataset.answer);

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        answerInput.style.backgroundColor = 'rgba(144, 238, 144, 0.7)';  // Light green
        setTimeout(generateQuestion, 1000); // Generate a new question after 1 second
    } else {
        answerInput.style.backgroundColor = 'rgba(255, 99, 71, 0.7)';  // Tomato red
    }
}

// Generate the first question when the page loads
window.onload = generateQuestion;
