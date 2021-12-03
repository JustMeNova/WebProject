function calculateMonthlyCarPayments(interest, time, totalCost) {
  console.log(interest, time, totalCost);
  let payment =
    (totalCost * (interest / 12) * Math.pow(1 + interest / 12, time)) /
    (Math.pow(1 + interest / 12, time) - 1);
  return payment;
}

const button = document.querySelector("#submitbtt");
button.addEventListener("click", function(e) 
{
  e.preventDefault();

  let interest = document.getElementById("interest").valueAsNumber;
  interest = interest / 100;
  let time = document.getElementById("time").valueAsNumber;
  let totalCost = document.getElementById("totalCost").valueAsNumber;

  if (interest < 0 || time < 5 || totalCost < 10000) {
    alert(
      "Interst should be at least 10%, the Years to pay off the car should at least be 5 and the total cost should be at least $10,000 "
    );
  } else {
    alert(
      "Your monthly cost will be $" +
        calculateMonthlyCarPayments(interest, time, totalCost).toPrecision(6)
    );
  }
});
