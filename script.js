const body = document.querySelector("body");
const container = document.querySelector(".container");
const connectButton = document.querySelector(".btn");
const backButton = document.createElement("button");

backButton.classList.add("btn");
backButton.innerText = "Назад";

function makeModal() {
  const div = document.createElement("div");
  div.style.cssText = `position: absolute;
    display: none;
    width: 50%;
    height: 20%;
    background-color: rgb(212, 212, 212);
    border-radius: 15px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: sans-serif;
    font-size: 20px;`;

  const p = document.createElement("p");
  p.innerText = "В будущем сможете связаться со мной!";

  div.append(p);
  div.append(backButton);
  body.append(div);

  return div;
}

const modal = makeModal();

connectButton.addEventListener("click", (event) => {
  event.preventDefault();

  container.style.display = "none";
  modal.style.display = "flex";
});

backButton.addEventListener("click", () => {
  container.style.display = "block";
  modal.style.display = "none";
});
