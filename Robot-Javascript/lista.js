"use strict";

// Selecting elements
const add = document.querySelector(".add");
const dlt = document.querySelector(".delete");
const start = document.querySelector(".start");
const out = document.querySelector(".output");
const wrong = document.querySelector(".wrong");
const container = document.querySelector(".outputOl");

let arr = [];
let n = 0;

function formatOutput(obj) {
  return `Ai adaugat '${obj.text}', asteapta ${obj.sec} secunde.`;
}

function renderOutput(array) {
  container.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    // console.log(obj); -> sec:3, text: abc

    const li = document.createElement("li");

    li.textContent = formatOutput(obj);

    container.appendChild(li);
  }
}

// Add Function
const press = () => {
  wrong.textContent = "";

  const sec = Number(document.querySelector(".sec").value);
  const text = document.querySelector(".text").value;

  if (sec !== 0 && text !== "") {
    arr.push({ sec, text });
    renderOutput(arr);

    console.log(arr);

    document.querySelector(".sec").value = "";
    document.querySelector(".text").value = "";
  } else {
    console.log("Nu ai pus durata sau task!!");
    wrong.textContent = "Nu ai pus durata sau task!! 😡";
  }
};

// Remove Function
const remove = () => {
  if (arr.length === 0) {
    return;
  }
  console.log("Am sters primul element ->", arr);
  arr.shift();
  if (arr.length > 0) {
    renderOutput(arr);
  } else {
    out.innerHTML = "";
  }
};

// wait 'n' seconds
const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};
// output after 'n' seconds
// const afis = async (sec, name) => {};

const auto = async function main() {
  while (arr.length > 0) {
    console.log("arr.sec ", arr[0].sec);
    console.log("arr.text: ", arr[0].text);
    // await afis(arr[0].sec, arr[0].text);
    const sec = arr[0].sec;
    const name = arr[0].text;
    await wait(sec);
    console.log(`Felicitari!!🎉🎉 Ai scos "${name}" in ${sec} sec.`);

    arr.shift();
    if (arr.length >= 0) {
      renderOutput(arr);
    } else {
      out.innerHTML = "";
    }
  }
};

// Start Program Function
const go = () => {
  add.addEventListener("click", press);
  dlt.addEventListener("click", remove);
  start.addEventListener("click", auto);
};

go();

// const abc = async function main() {
//   for (let item of arr) {
//     n++;
//     console.log("item.sec: ", item.sec);
//     console.log("item.text: ", item.text);

//     await afis(item.sec, item.text);
//   }
//   arr = [];
//   n = 0;
// };
