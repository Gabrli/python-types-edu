import {
  stringElements,
  setsElements,
  intElements,
  floatElements,
  tupleElements,
  listElements,
  booleanElements,
  codeElements,
  conversionElements,
  docsElements,
} from "./obj/elements.js";
import {
  answersElements1,
  answersElements2,
  tasksElements,
} from "./obj/tasks.js";
const codeWindow = document.querySelector(".code_window");
const btnParts = document.querySelector(".btn_parts_toggle");

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

const valueValidation = (value) => {
  if (value === "def int()") {
    importedElements = intElements;
  } else if (value === "def float()") {
    importedElements = floatElements;
  } else if (value === "def string()") {
    importedElements = stringElements;
  } else if (value === "def boolean()") {
    importedElements = booleanElements;
  } else if (value === "def list()") {
    importedElements = listElements;
  } else if (value === "def tuple()") {
    importedElements = tupleElements;
  } else if (value === "def sets()") {
    importedElements = setsElements;
  } else if (value === "def docs()") {
    importedElements = docsElements;
  } else if (value === "def back()") {
    importedElements = codeElements;
  } else if (value === "def conversion()") {
    importedElements = conversionElements;
  } else if (value === "show answer1") {
    importedElements = answersElements1;
  } else if (value === "show answer2") {
    importedElements = answersElements2;
  } else return;

  codeWindow.innerHTML = "";
  loadBuilder();
};

const updateValue = (e, input) => {
  input += e.target.value;
};

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

  lineInput.addEventListener("input", (e) => updateValue(e, lineInput.value));
  lineInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      valueValidation(lineInput.value);
    }
  });

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
