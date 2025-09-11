document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tab-section").forEach((section) => {
    const form = section.querySelector(".stress-form");
    const resultDisplay = section.querySelector(".result");
    const interpText = section.querySelector(".interp-text");
    const interpScore = section.querySelector(".interp-score");

    function calculateScaleScore() {
      let totalScore = [...form.querySelectorAll('input[type="checkbox"]:checked')]
        .reduce((sum, checkbox) => sum + parseInt(checkbox.value, 10), 0);

      resultDisplay.textContent = `Holmes & Rahe Stress Score = ${totalScore}`;
      interpText.style.display = "block";
      interpScore.textContent = 
        totalScore <= 150 ? "low risk of illness." :
        totalScore <= 299 ? "moderate risk with 50% chances of adverse health outcome." :
        "high risk of illness with 80% chances of major health breakdown.";
    }

    function resetForm() {
      form.reset();
      resultDisplay.textContent = "";
      interpText.style.display = "none";
    }

    section.querySelector(".calculate-score").addEventListener("click", calculateScaleScore);
    section.querySelector(".reset-form").addEventListener("click", resetForm);
  });
});