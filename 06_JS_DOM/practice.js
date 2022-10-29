let box = document.querySelector(".box");

// box.addEventListener("click", function () {
//   this.style.backgroundColor = "orange";
// });

function handleClick() {
  if (box.style.backgroundColor === "orange") {
    box.style.backgroundColor = "skyblue";
  } else {
    box.style.backgroundColor = "orange";
  }
}

box.addEventListener("click", handleClick);

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const input = document.querySelector(".text");
const span = document.querySelector("span");

button1.addEventListener("click", function () {
  input.value = "";
  input.setAttribute("placeholder", "아이디를 입력해주세요");
  span.innerText = "아이디를 입력해주세요";
});

button2.addEventListener("click", () => {
  span.innerHTML = input.value;
  input.value = "";
});
