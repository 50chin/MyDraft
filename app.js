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
let postionCard = 0;
let positionIndicator = 0;

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
  for (let i = 0; i < 5 - 1; i++) {
    const list = showIndicator(indicator);
    stagePositionNode.append(list);
  }
  const indicatorNode = document.querySelectorAll(".stage__indicator");
  indicatorNode.forEach((node, i) => {
    if (i === positionIndicator) {
      node.style.backgroundColor = "rgb(49, 49, 49)";
    }
  });
};

renderIndicator();

// Функция для показа предыдущего слайда
function showPrev() {
  if (postionCard === 0) {
    stageBtnLeft.disabled = true;
    stageBtnLeft.className = "stage__btn-disabled";
    updateSlider();
  } else if (postionCard === 355) {
    postionCard -= 355;
    positionIndicator -= 1;
    stageBtnLeft.disabled = true;
    stageBtnLeft.className = "stage__btn-disabled";
    updateSlider();
  } else {
    stageBtnRight.disabled = false;
    stageBtnRight.className = "stage__btn-right";
    positionIndicator -= 1;
    postionCard -= 355;
    updateSlider();
  }
}

showPrev();

// Функция для показа следующего слайда
function showNext() {
  if (postionCard > 1064) {
    stageBtnRight.disabled = true;
    stageBtnRight.className = "stage__btn-disabled";
    postionCard += 355;
    positionIndicator += 1;
    updateSlider();
  } else {
    stageBtnLeft.disabled = false;
    stageBtnLeft.className = "stage__btn-left";
    positionIndicator += 1;
    postionCard += 355;
    updateSlider();
  }
}

// Функция для обновления отображения слайдера
function updateSlider() {
  stageCardsMob.style.transform = `translateX(-${postionCard}px)`;
  const indicatorNode = document.querySelectorAll(".stage__indicator");
  indicatorNode.forEach((node, i) => {
    if (i === positionIndicator) {
      node.style.backgroundColor = "rgb(49, 49, 49)";
    } else {
      node.style.backgroundColor = "";
    }
  });
}

stageBtnRight.addEventListener("click", showNext);
stageBtnLeft.addEventListener("click", showPrev);

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
// ФУНКЦИИ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ
const positionMobileNode = document.querySelector("#participants__number-mob");
const leftBtnMobileNode = document.querySelector(".participants__btn-Mobleft");
const rightBtnMobileNode = document.querySelector(
  ".participants__btn-Mobright"
);

let countMobile = 1;
let positionMobile = 0;
positionMobileNode.innerHTML = countMobile;

function prevMobileSlide() {
  if (countMobile === 1) {
    leftBtnMobileNode.className = "participants__btn-disabled";
    leftBtnMobileNode.disabled = true;
  } else if (positionMobile === 380) {
    positionMobile -= 380;
    countMobile -= 1;
    positionMobileNode.innerHTML = countMobile;
    leftBtnMobileNode.disabled = true;
    leftBtnMobileNode.className = "participants__btn-disabled";
    cardsNode.style.transform = `translateX(-${positionMobile}px`;
  } else {
    countMobile -= 1;
    positionMobile -= 380;
    positionMobileNode.innerHTML = countMobile;
    rightBtnMobileNode.className = "participants__btn-Mobright";
    rightBtnMobileNode.disabled = false;
    cardsNode.style.transform = `translateX(-${positionMobile}px`;
  }
}

function nextMobileSlide() {
  if (positionMobile > 1519) {
    countMobile += 1;
    positionMobile += 380;
    positionMobileNode.innerHTML = countMobile;
    cardsNode.style.transform = `translateX(-${positionMobile}px`;
    rightBtnMobileNode.className = "participants__btn-disabled";
    rightBtnMobileNode.disabled = true;
  } else {
    countMobile += 1;
    positionMobile += 380;
    cardsNode.style.transform = `translateX(-${positionMobile}px`;
    positionMobileNode.innerHTML = countMobile;
    leftBtnMobileNode.className = "participants__btn-Mobleft";
    leftBtnMobileNode.disabled = false;
  }
}

leftBtnMobileNode.addEventListener("click", prevMobileSlide);

rightBtnMobileNode.addEventListener("click", nextMobileSlide);

prevMobileSlide();
