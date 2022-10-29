const btn1 = document.querySelector(".btn-black");
const btn2 = document.querySelector(".btn-red");
const btn3 = document.querySelector(".btn-green");
const btn4 = document.querySelector(".btn-blue");
console.log(btn1, btn2, btn3, btn4);

btn1.addEventListener("click", function () {
  alert("버튼 1을 선택하셨네요!");
});

btn1.addEventListener("mouseover", function () {
  this.style.backgroundcolor = "aqua";
});

const container = document.getElementById("container");
btn2.addEventListener("click", () => {
  let div = document.createElement("div");
  div.style.backgroundcolor = "green";
  div.innertext = "hi";
  container.append(div);
});

btn3.addEventListener("click", changeColor);

function changeColor() {
  let divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundcolor = "skyblue";
  }
  divs[divs.length - 1].style.backgroundcolor = "yellow";
}

btn4.addEventListener("click", changeBtnColor);

function changeBtnColor() {
  this.classList.toggle("btn-yellow");
}

// scroll

console.log(window);
window.addEventListener("scroll", (event) => {
  //   console.log(event);
  //   console.log(event.target);
  console.log(scrollY);
  if (scrollY > 200) {
    document.querySelector(".scroll").style.opacity = "1";
  }
});

const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function (e) {
  console.log(e);
});

input.addEventListener("keydown", function (e) {
  //   console.log(e);
  //   console.log(e.code);
  //   console.log(e.key);

  if (e.code === "ArrowUp") {
    console.log("up!!!");
  } else if (e.code === "ArrowRight") {
    console.log("right!!!");
  } else if (e.code === "ArrowLeft") {
    console.log("left!!!!");
  } else if (e.code === "ArrowDown") {
    console.log("down!!!!");
  } else if (e.code === "Enter") {
    console.log("Enter!!!!");
  } else {
    console.log("others");
  }
});

const todoForm = document.querySelector("#todo-form");
const todos = document.querySelector(".todos");
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit");
  const todoInput = document.querySelector("input[name=todo");
  console.log(todoInput.value);

  const todo = todoInput.value;
  const newTodo = document.createElement("li");
  newTodo.append(todo);
  todos.append(newTodo);

  todoInput.value = "";
});

const chgInput = document.getElementById("change-input");

chgInput.addEventListener("change", function () {
  console.log("change!!!r");
  const div = document.querySelector(".intro");
  //   console.log(div);
  div.textContent = this.value;
});
