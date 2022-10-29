console.log(document);
// document 의 속성 head
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.url);
console.log(document.domain);

// getElementId
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

// getElementByclass
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));

// getElementByTagName
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("input"));

// getElementName
console.log(document.getElementsByName("id"));

//
console.log(document.querySelector(".pink"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("[name='id']"));

//  querySelcetorAll
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("input"));
console.log(document.querySelectorAll("div")[2]);

let pinks = document.querySelectorAll(".pink");
console.log(pinks);
for (let pink of pinks) {
  console.log(pink);
}
