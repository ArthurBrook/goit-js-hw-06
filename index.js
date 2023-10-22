// Завдання 1
const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});

// Завдання 2
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);

// Завдання 3
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

const imagesMarkup = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

galleryList.insertAdjacentHTML("beforeend", imagesMarkup);

// Завдання 4
const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let value = 0;

decrementButton.addEventListener("click", () => {
  value -= 1;
  counterValue.textContent = value;
});

incrementButton.addEventListener("click", () => {
  value += 1;
  counterValue.textContent = value;
});

// Завдання 5
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = nameInput.value.trim() || "Anonymous";
});

// Завдання 6
const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const enteredText = validationInput.value;
  const requiredLength = Number(validationInput.getAttribute("data-length"));

  if (enteredText.length === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});

// Завдання 7
const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = fontSizeControl.value + "px";
});

// Завдання 8
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = this.querySelector('input[name="email"]').value;
  const password = this.querySelector('input[name="password"]').value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Будь ласка, заповніть всі поля");
  } else {
    const formData = {
      email,
      password,
    };

    console.log(formData);
    this.reset();
  }
});

// Завдання 9
const widget = document.querySelector(".widget");
const colorSpan = widget.querySelector(".color");
const changeColorButton = widget.querySelector(".change-color");

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Завдання 10
const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const baseSize = 30;
  boxesDiv.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const size = baseSize + i * 10;
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexBlockColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
