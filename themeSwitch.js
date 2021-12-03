function themeSwitch()
{
  let theme = document.querySelector('#style');
  if(theme.getAttribute('href') == 'darkStyle.css')
    {
      theme.setAttribute('href', 'lightStyle.css');
      document.querySelector("#switch").style.color = "White";
    }
  else
  {
    theme.setAttribute('href', 'darkStyle.css');
     document.querySelector("#switch").style.color = "Black";
  }
}

const toggle = document.querySelector("#switch");
toggle.addEventListener("click", themeSwitch);