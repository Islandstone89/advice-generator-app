
let adviceHeading = document.querySelector(".advice__heading");
let adviceText = document.querySelector(".js-advice__text");
let getAdviceBtn = document.querySelector(".js-get-advice-btn");
let apiUrl = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    adviceHeading.innerHTML = `Advice #${data.slip.id}`;
    adviceText.innerHTML= `&#8220${data.slip.advice}&#8221`;
}

getAdviceBtn.addEventListener("click", getAdvice);