function calculateScaleScore() {

  let totalScore = 0;

  // Get all the checkbox buttons on the page
  const checkBoxButtons = document.querySelectorAll('input[type="checkbox"]:checked');

  // Iterate over each checked checkbox button
  checkBoxButtons.forEach(checkBoxButton => {
    // Add the value of each selected checkbox button to the total score
    totalScore += parseInt(checkBoxButton.value, 10);
  });

  // Display the total score
  document.getElementById('result').textContent = totalScore;
  document.getElementById('interpText').style="display:block;";

  if (totalScore <= 150){
    document.getElementById('interpScore').textContent = "The subject is described as at low risk of illness with a low susceptibility to stress induced health breakdown in the following 24 months after assessment."
  }
  else if(totalScore > 150 && totalScore <= 299){
    document.getElementById('interpScore').textContent = "The subject is described as at moderate risk with 50% chances of adverse health outcome."
  }
  else{
    document.getElementById('interpScore').textContent = "The subject is described as at high risk of illness with 80% chances of major health breakdown."
  }
}

// Reset form

function reset() {
  document.getElementById('result').textContent = " ";
  document.getElementById('interpText').style.display="none";
  document.getElementById("adult-form").reset();
  document.getElementById("nonAdult-form").reset();
}

document.getElementById('reset').addEventListener('click',reset);
document.getElementById('calculateScore').addEventListener('click', calculateScaleScore); 