import { codeElements } from "./obj/code.js";
import { answersElements1, answersElements2, tasksElements } from "./obj/tasks.js";
import { intElements } from "./obj/int.js";
import { stringElements } from "./obj/string.js";
import { floatElements } from "./obj/float.js";
import { booleanElements } from "./boolean.js";
import { listElements } from "./obj/list.js";
import { setsElements } from "./obj/set.js";
import { tupleElements } from "./obj/tuple.js";
import { docsElements } from "./obj/docs.js";
import { conversionElements } from "./obj/conversion.js";
const mainTitle = document.querySelector(".main_title");
const codeWindow = document.querySelector(".code_window");
const btnParts = document.querySelector(".btn_parts_toggle");


let i = 0;
const speed = 70;
const textToDiplayInMain = "Python";
const textToDisplayInNext = "Peak";
let part = "teory";
let importedElements = codeElements;

const switchScreens = () => {
  if (part === "teory") {
    btnParts.innerHTML = "tasks";
    part = "tasks";
    importedElements = tasksElements;
    codeWindow.innerHTML = "";
    loadBuilder();
  } else {
    btnParts.innerHTML = "teory";
    part = "teory";
    importedElements = codeElements;
    codeWindow.innerHTML = "";
    loadBuilder();
  }
};

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


const valueValidation = (value) => {
  if(value === "def int()"){
    importedElements = intElements
  } else if(value === "def float()"){
    importedElements = floatElements
  } else if(value === "def string()"){
    importedElements = stringElements
  } else if(value === "def boolean()"){
    importedElements = booleanElements
  } else if(value === "def list()"){
    importedElements = listElements
  } else if(value === "def tuple()"){
    importedElements = tupleElements

  } else if(value==="def sets()"){
    importedElements = setsElements
  } else if(value === "def docs()"){
    importedElements = docsElements
  } else if(value === "def back()"){
    importedElements = codeElements
  } else if(value === "def conversion()"){
    importedElements = conversionElements
  } else if(value === "show answer1"){
    importedElements = answersElements1
  } else if(value === "show answer2"){
    importedElements = answersElements2
  } else return 

  codeWindow.innerHTML = ''
  loadBuilder()
}

const updateValue = (e, input) => {
  console.log(e.target.value)
  input += e.target.value
  
}

const lineBuilder = () => {
  const newLine = document.createElement("div");
  const lineNumeration = document.createElement("p");
  const lineInput = document.createElement("input");
  lineNumeration.classList.add("line_numeration");

  newLine.classList.add("line");
  lineInput.classList.add("line_input");

  const lines = document.querySelectorAll(".line");

  newLine.id += String(lines.length);

  lineInput.value = importedElements[Number(newLine.id)];

  lineNumeration.textContent = lines.length + 1;

  lineInput.addEventListener('input',(e) =>  updateValue(e, lineInput.value))
  lineInput.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
      valueValidation(lineInput.value)
    }
  })

  codeWindow.append(newLine);
  newLine.append(lineInput);
  newLine.append(lineNumeration);
};

function loadBuilder() {
  for (let i = 0; i < importedElements.length; i++) {
    setTimeout(lineBuilder, 1000);
  }
}
loadBuilder();

btnParts.addEventListener("click", () => switchScreens());


typpingMain();
