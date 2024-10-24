// JavaScript to toggle the answer display
function toggleAnswer(index) {
  const answer = document.getElementById(`answer-${index}`);
  const isVisible = !answer.classList.contains("hidden");

  // Hide all answers first, except for the first one
  const allAnswers = document.querySelectorAll("[id^=answer-]");
  allAnswers.forEach((ans, i) => {
    if (i === 0 && index === 0 && isVisible) return; // Keep the first answer visible on load
    ans.classList.add("hidden");
  });

  // Toggle visibility of clicked answer
  if (!isVisible) {
    answer.classList.remove("hidden");
  }
}
