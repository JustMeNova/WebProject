function themeSwitch()
{
  let theme = document.querySelector('#style');
  if(theme.getAttribute('href') == 'styleTable.css')
    {
      theme.setAttribute('href', 'styleTableLight.css');
      document.querySelector("#switch").style.color = "White";
    }
  else
  {
    theme.setAttribute('href', 'styleTable.css');
    document.querySelector("#switch").style.color = "Black";
  }
}

const toggle = document.querySelector("#switch");
toggle.addEventListener("click", themeSwitch);