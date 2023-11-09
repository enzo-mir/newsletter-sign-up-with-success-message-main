const submitButton = document.querySelector("#form button");
const inputValue = document.querySelector("#form label input");
const container = document.getElementById("container");

submitButton.addEventListener("click", (e) => {
  const email = inputValue.value;

  if (inputValue.checkValidity()) {
    container.classList.add("submition");
    let buttonBack = document.createElement("button");
    buttonBack.textContent = "Dismiss message";
    buttonBack.addEventListener("click", () => {
      location.reload();
    });
    container.innerHTML = `
        <span></span>
        <div>
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been send to <strong>${email}.</strong> Please open it and click the button inside to confirm your subscription.</p>
        </div>
        `;
    container.appendChild(buttonBack);
  }
});
