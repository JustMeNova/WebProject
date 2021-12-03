function themeSwitch()
{
  let theme = document.querySelector('#style');
  if(theme.getAttribute('href') == 'styleCalc.css')
    {
      theme.setAttribute('href', 'styleCalcLight.css');
      document.querySelector("#switch").style.color = "White";
    }
  else
  {
    theme.setAttribute('href', 'styleCalc.css');
    document.querySelector("#switch").style.color = "Black";
  }
}

const toggle = document.querySelector("#switch");
toggle.addEventListener("click", themeSwitch);