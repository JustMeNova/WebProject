const button = document.querySelector("button");
button.addEventListener("click", function(event){
  console.log(document.forms[0].elements.question1.value);
  console.log(document.getElementById("answer-c"));
  let correct = 0;
  let Ans1;
  let Ans2;
  let Ans3;
  if (document.forms[0].elements.question1.value == document.getElementById("answer-c").value) {
    document.getElementById("QQ1").style.color = "Green";
    Ans1 = "Correct!";
    correct++;
    
}
else {
  Ans1 = "Inorrect!";
  document.getElementById("QQ1").style.color = "Red";
}
  console.log(document.forms[0].elements.question2.value);
  console.log(document.getElementById("answer-c2"));
  if (document.forms[0].elements.question2.value == document.getElementById("answer-c2").value) {
    document.getElementById("QQ2").style.color = "Green";
    Ans2 = "Correct!";
    correct++;
}
else {
  Ans2 = "Incorrect!";
  document.getElementById("QQ2").style.color = "Red";
}
  console.log(document.forms[0].elements.question3.value);
  console.log(document.getElementById("answer-c3"));
  if (document.forms[0].elements.question3.value == document.getElementById("answer-c3").value) {
    document.getElementById("QQ3").style.color = "Green";
    Ans3 = "Correct!";
    correct++;
}
else {
   Ans3 = "Incorrect!";
  document.getElementById("QQ3").style.color = "Red";
}
  
    alert("Q1: " + Ans1 + "\n Q2: " + Ans2 + "\n Q3: " + Ans3 + "\n You got " + correct + "/3 questions right")
});

