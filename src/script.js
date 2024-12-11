
let adviceNumber = document.querySelector(".js-advice__number");
let adviceText = document.querySelector(".js-advice__text");
let getAdviceBtn = document.querySelector(".js-get-advice-btn");
let apiUrl = "https://api.adviceslip.com/advice";

async function getAdvice() {
    const response = await fetch(apiUrl);
    const data = await response.json();
      
    adviceNumber.textContent = `#${data.slip.id}`;
    adviceText.textContent = `"${data.slip.advice}"`;
}

getAdviceBtn.addEventListener("click", getAdvice);