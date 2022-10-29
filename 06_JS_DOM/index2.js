// innerHTML, innerText, textContent

// 띄어쓰기 적용 X
let div1 = document.getElementById("div1");
div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;";
div1.innerHTML = "여기는 <b>첫번째</b> 태그입니다. &hearts;     !!";

// 띄어쓰기 적용 O
console.log(div1.innerText);
div1.textContent = "여기는 <b>첫번째</b> 태그입니다. &hearts;     !!";
console.log(div1.textContent);

// 한번 선언 해야됨
let mint = document.querySelector(".mint span");
mint.innerHTML = "맛없다...";

// setAtrribute -> 속성접근 변경
console.log(document.getElementById("beach").id);
document.getElementById("beach").setAttribute("alt", "바다");
console.log(document.getElementById("beach"));

let a = document.querySelector("#naver");
a.textContent = "google";
a.setAttribute("href", "https://www.google.com");

console.log(a.getAttribute("href"));

let list = document.querySelectorAll("#friends li");
for (let li of list) {
  //   console.log(li);
  //   li.style.backgroundColor = "blue";
  //   li.style.color = "white";
  //   li.style.fontSizee = "1.3rem";
  li.classList.add("add");
}

let h1 = document.querySelector("h1");
console.log(h1);
h1.classList.add("add-h1");

// 노드찾기, 부모 형제 자식 요소에 접근
let friends = document.getElementById("friends");
let tigger = document.getElementById("tigger");

// 자식 노드에 접근 .children
console.log(friends.children[0]);

// 부모 노드에 접근
console.log(tigger.parentNode);

// 현재 노드
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);

// 노드생성, 추가, 삭제
// 1. 생성 createElement
let container = document.querySelector(".container");
let p = document.createElement("p");
console.log(p);
p.innerText = "추가된 p 태그";
p.style.fontWeight = 700;
p.style.backgroundColor = "red";
container.append(p);

let p2 = document.createElement("p");
p2.innerText = "p2";
p2.classList.add("p-2");
container.appendChild(p2);

// after, before
let h3 = document.createElement("h3");
h3.textContent = "새로 추가된 제목 h3";
h1.before(h3);

let h2 = document.createElement("h2");
h2.textContent = "새로 추가된 제목 h1";
h1.after(h2);

// 요소 삭제 remove
let firstli = document.querySelector("li");
let ul = firstli.parentElement;

ul.removeChild(firstli);
firstli.remove();
