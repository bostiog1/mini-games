"use strict";

// Selecting elements
const add = document.querySelector(".add");
const dlt = document.querySelector(".delete");
const start = document.querySelector(".start");
const out = document.querySelector(".output");
const wrong = document.querySelector(".wrong");

let arr = [];

// Add Function
const press = () => {
  wrong.textContent = "";

  const sec = Number(document.querySelector(".sec").value);
  const text = document.querySelector(".text").value;

  if (sec !== 0 && text !== "") {
    arr.push({ sec, text });

    out.textContent += `\nTask : ${text}, in ${sec} secunde.\n`;

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
  console.log("Am sters primul element ->", arr);
  arr.shift();
  if (arr.length > 0) {
    out.textContent = `\nTask : ${text}, in ${sec} secunde.\n`;
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
const afis = async (sec, name) => {
  await wait(sec);
  console.log(`Felicitari!!🎉🎉 Ai scos "${name}" in ${sec} sec.`);

  if (arr.length > 0) {
    // arr.splice(0, 1);
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
    }
  };
  abc();
};

// Start Program Function
const go = () => {
  add.addEventListener("click", press);
  dlt.addEventListener("click", remove);
  start.addEventListener("click", auto);
};

go();
