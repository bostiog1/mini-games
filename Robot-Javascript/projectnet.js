"use strict";

// Selecting elements
const add = document.querySelector(".add");
const dlt = document.querySelector(".delete");
const start = document.querySelector(".start");
const out = document.querySelector(".output");
const wrong = document.querySelector(".wrong");

let arr = [];

// Add Function
function formatOutput(obj) {
  return `Ai adaugat '${obj.text}', asteapta ${obj.sec} secunde.`;
}

function renderOutput(array) {
  const container = document.querySelector(".output--1");
  container.innerHTML = "";

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    console.log(obj);

    const output = document.createElement("p");
    console.log(output);

    output.textContent = formatOutput(obj);

    container.appendChild(output);
  }
}

const press = () => {
  wrong.textContent = "";

  const sec = Number(document.querySelector(".sec").value);
  const text = document.querySelector(".text").value;

  if (sec !== 0 && text !== "") {
    arr.push({ sec, text });
    // renderOutput(arr);
    console.log(arr);

    document.querySelector(".sec").value = "";
    document.querySelector(".text").value = "";
  } else {
    // In cazul in care nu s-a adaugat durata/task
    console.log("Nu ai pus durata sau task!!");
    wrong.textContent = "Nu ai pus durata sau task!! 😡";
  }
};

renderOutput(arr);

// Remove Function
const remove = () => {
  console.log("Am sters primul element ->", arr);
  arr.shift();
  if (arr.length > 0) {
    // renderOutput(arr);
  } else {
    out.innerHTML = "";
  }
};

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

const afis = async (sec, name) => {
  // elimina primul element din arr
  // console.log(sec, name);
  await wait(sec);
  console.log(`Felicitari!!🎉🎉 Ai scos "${name}" in ${sec} sec.`);

  if (arr.length > 0) {
    arr.splice(0, 1);
    out.innerHTML = JSON.stringify(arr);
  } else {
    out.innerHTML = "";
  }
};



const auto = () => {
  const abc = async function main() {
    for (let item of arr) {
      console.log("item.sec: ", item.sec);
      console.log("item.text: ", item.text);

      await afis(item.sec, item.text);
      // renderOutput(arr);
    }
  };

  abc();
};

// Start Function
const go = () => {
  add.addEventListener("click", press);
  dlt.addEventListener("click", remove);
  start.addEventListener("click", auto);
};

go();
