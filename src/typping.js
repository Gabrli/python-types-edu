const mainTitle = document.querySelector(".main_title");
const textToDiplayInMain = "Python";
const textToDisplayInNext = "Peak";
let i = 0;
const speed = 70;
function typpingMain() {
  if (i < textToDiplayInMain.length) {
    mainTitle.textContent += textToDiplayInMain.charAt(i);
    i++;
    setTimeout(typpingMain, speed);
  } else if (i === textToDiplayInMain.length) {
    i = 0;
    typpingNext();
  }
}

function typpingNext() {
  const nextTextElement = document.createElement("span");
  mainTitle.append(nextTextElement);

  if (i < textToDisplayInNext.length) {
    nextTextElement.textContent += textToDisplayInNext.charAt(i);
    i++;
    setTimeout(typpingNext, speed);
  }
}
typpingMain();
