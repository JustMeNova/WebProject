function themeSwitch()
{
  let theme = document.querySelector('#style');
  if(theme.getAttribute('href') == 'styleQuiz.css')
    {
      theme.setAttribute('href', 'styleQuizLight.css');
      document.querySelector("#switch").style.color = "White";
    }
  else
  {
    theme.setAttribute('href', 'styleQuiz.css');
    document.querySelector("#switch").style.color = "Black";
  }
}

const toggle = document.querySelector("#switch");
toggle.addEventListener("click", themeSwitch);