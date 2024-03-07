const cardsNode = document.querySelector(".participants__cards");
const positionNode = document.querySelector("#participants__number");
const leftBtnNode = document.querySelector(".participants__btn-left");
const rightBtnNode = document.querySelector(".participants__btn-right ");

let count = 3;
let position = 0;

positionNode.innerHTML = count;

function prevSlide() {
  if (count <= 3) {
    leftBtnNode.className = "participants__btn-disabled";
    leftBtnNode.disabled = true;
  } else {
    count -= 3;
    position -= 50;
    positionNode.innerHTML = count;
    cardsNode.style.transform = `translateX(${position}%`;
    leftBtnNode.className = "participants__btn-disabled";
    leftBtnNode.disabled = true;
    rightBtnNode.className = "participants__btn-right";
    rightBtnNode.disabled = false;
  }
}

function nextSlide() {
  count += 3;
  position += 50;
  cardsNode.style.transform = `translateX(-${position}%`;
  rightBtnNode.className = "participants__btn-disabled";
  rightBtnNode.disabled = true;
  positionNode.innerHTML = count;
  leftBtnNode.disabled = false;
  leftBtnNode.className = "participants__btn-left";
}

leftBtnNode.addEventListener("click", () => prevSlide());

rightBtnNode.addEventListener("click", () => nextSlide());

prevSlide();
