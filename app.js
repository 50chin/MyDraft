const cardsNode = document.querySelector(".participants__cards");
const positionNode = document.querySelector("#participants__number");
const leftBtnNode = document.querySelector(".participants__btn-left");
const rightBtnNode = document.querySelector(".participants__btn-right");
const stageCardsMob = document.querySelector(".stage__cards-mob");
const stageBtnRight = document.querySelector(".stage__btn-right");
const stageBtnLeft = document.querySelector(".stage__btn-left");
const stagePositionNode = document.querySelector(".stage__position");

let count = 3;
let position = 0;
let num = 0;

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

// Функция для рендера пагинации
function showIndicator() {
  const indicator = document.createElement("div");
  indicator.className = "stage__indicator";
  return indicator;
}

const renderIndicator = (indicator) => {
  for (let i = 0; i < 5; i++) {
    const list = showIndicator(indicator);
    stagePositionNode.append(list);
  }
  const indicatorNode = document.querySelectorAll(".stage__indicator");
  indicatorNode.forEach((node, i) => {
    if (i === num) {
      node.style.backgroundColor = "rgb(49, 49, 49)";
    } else {
      node.style.backgroundColor = "rgb(217, 217, 217)";
    }
  });
};

renderIndicator();

// Функция для показа предыдущего слайда
function showPrev() {
  if (num === 0) {
    stageBtnLeft.disabled = true;
    stageBtnLeft.className = "stage__btn-disabled";
    updateSlider();
  } else if (num === 355) {
    num -= 355;
    stageBtnLeft.disabled = true;
    stageBtnLeft.className = "stage__btn-disabled";
    updateSlider();
  } else {
    stageBtnRight.disabled = false;
    stageBtnRight.className = "stage__btn-right";
    num -= 355;
    updateSlider();
  }
}

showPrev();

// Функция для показа следующего слайда
function showNext() {
  if (num > 1064) {
    stageBtnRight.disabled = true;
    stageBtnRight.className = "stage__btn-disabled";
    num += 355;
    updateSlider();
  } else {
    stageBtnLeft.disabled = false;
    stageBtnLeft.className = "stage__btn-left";
    num += 355;
    updateSlider();
  }
}

// Функция для обновления отображения слайдера
function updateSlider() {
  stageCardsMob.style.transform = `translateX(-${num}px)`;
  const indicatorNode = document.querySelectorAll(".indicator");
  indicatorNode.forEach((node, i) => {
    if (i === num) {
      node.style.backgroundColor = "green";
    } else {
      node.style.backgroundColor = "";
    }
  });
}

stageBtnRight.addEventListener("click", showNext);
stageBtnLeft.addEventListener("click", showPrev);
