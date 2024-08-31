"use strict";

// Selecting elements
// Task 1
const add = document.querySelector(".add");
const dlt = document.querySelector(".delete");
const start = document.querySelector(".start");
const out = document.querySelector(".output");
const wrong = document.querySelector(".wrong");
const container = document.querySelector(".outputOl");

// Task 2
const left = document.querySelector(".left");
const up = document.querySelector(".top");
const right = document.querySelector(".right");
const down = document.querySelector(".bottom");
const limit = document.querySelector(".limit");
const congrats = document.querySelector(".congrats");
const refresh = document.querySelector(".refresh");

const grid = document.querySelector(".grid");
let robot = document.querySelector(".robot");
let random = document.querySelector(".random");

const boardWidth = 480;
const boardHeight = 300;
const robotWidth = 30;

const distance = 30;
let finish = false;

// robot position
// const robotStart = [180, 120];
let currentPosition = [180, 120];

// random position
// Math.floor(Math.random() * 480) + 1 ==> random number [1, 480]
// sa zicem ca-mi da 110 -> il impart la 30 --> 3.6, ii dau trunc si il fac 4, dupa?
// daca il inmultesc din nou cu 30 o sa devina 4 * 30 = 120, e cel mai aproape de 110

let x =
  Math.trunc(Math.round(Math.random() * (boardWidth - 30)) / distance) * 30; // random number between 0 and 480 din 30 in 30
let y =
  Math.trunc(Math.round(Math.random() * (boardHeight - 30)) / distance) * 30; // random number between 0 and 300 din 30 in 30
const randomStart = [x, y];
let randomPosition = randomStart;

let arr = [];

function formatOutput(obj) {
  return `Comanda "${obj.text}" in ${obj.sec} secunde.`;
}

function renderOutput(array) {
  if (arr.length > 0) {
    container.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
      const obj = array[i];

      const li = document.createElement("li");

      li.textContent = formatOutput(obj);

      container.appendChild(li);
    }
  } else {
    out.innerHTML = "";
  }
}

// Add Function
const press = (text) => {
  wrong.textContent = "";

  const sec = Number(document.querySelector(".sec").value);

  if (sec !== 0) {
    arr.push({ sec, text });
    renderOutput(arr);

    console.log(arr);

    document.querySelector(".sec").value = "";
    // document.querySelector(".text").value = "";
  } else {
    console.log("Nu ai pus durata sau comanda!!");
    wrong.textContent = "Nu ai pus durata sau comanda!! 😡";
  }
};

// Remove Function
const remove = () => {
  if (arr.length === 0) {
    out.innerHTML = "";
    arr = [];
  }
  console.log("Am sters primul element ->", arr);
  arr.shift();

  renderOutput(arr);
};

// wait 'n' seconds
const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};
const find = (text) => {
  switch (text) {
    case "stanga": {
      moveRobot({ key: "ArrowLeft" });
      break;
    }
    case "sus": {
      moveRobot({ key: "ArrowUp" });
      break;
    }
    case "dreapta": {
      moveRobot({ key: "ArrowRight" });
      break;
    }
    case "jos": {
      moveRobot({ key: "ArrowDown" });
      break;
    }
  }
};

const auto = async function main() {
  while (arr.length > 0) {
    // console.log("arr.sec ", arr[0].sec);
    // console.log("arr.text: ", arr[0].text);
    const sec = arr[0].sec;
    const name = arr[0].text;

    await wait(sec);
    find(name);

    console.log(`Ai mers "${name}" in ${sec} sec.`);

    arr.shift();
    if (arr.length >= 0) {
      renderOutput(arr);
    } else {
      out.innerHTML = "";
    }
  }
};

// Task 2
// Starting position
const drawUser = () => {
  robot.style.left = currentPosition[0] + "px";
  robot.style.top = currentPosition[1] + "px";
};
drawUser();

const message = (text) => {
  console.log("Interzis!! ✋⛔ Ai atins limita...!!");
  limit.textContent = `Interzis!! ✋⛔ Ai atins limita din ${text}!`;
};

const drawRandom = () => {
  random.style.left = randomPosition[0] + "px";
  random.style.top = randomPosition[1] + "px";
};

drawRandom();

const gameOver = () => {
  if (
    currentPosition[0] === randomPosition[0] &&
    currentPosition[1] === randomPosition[1] + distance
  ) {
    congrats.textContent = "Felicitari!! 🎉🎉 Ai ajuns la destinatie 🏜 ";
    refresh.style.display = "block";
    finish = true;
  }
};

gameOver();

const moveRobot = (e) => {
  if (!finish) {
    wrong.textContent = "";
    congrats.textContent = "";
    switch (e.key) {
      case "ArrowLeft":
        if (currentPosition[0] > 0) {
          currentPosition[0] -= distance;
          drawUser();
          limit.textContent = "";
        } else {
          message("stanga");
        }
        break;
      case "ArrowRight":
        if (currentPosition[0] < boardWidth - robotWidth) {
          currentPosition[0] += distance;
          drawUser();
          limit.textContent = "";
        } else {
          message("dreapta");
        }
        break;
      case "ArrowUp":
        if (currentPosition[1] > 0) {
          currentPosition[1] -= distance;
          drawUser();
          limit.textContent = "";
        } else {
          message("sus");
        }
        break;
      case "ArrowDown":
        // if( 240 < 510 - 30)
        // ...
        // 480 < 510 - 30
        if (currentPosition[1] < boardHeight - robotWidth) {
          currentPosition[1] += distance;
          drawUser();
          limit.textContent = "";
        } else {
          message("jos");
        }
        break;
    }

    gameOver();
  }
};

// Start Program Function
const go = () => {
  add.addEventListener("click", press);
  dlt.addEventListener("click", remove);
  start.addEventListener("click", auto);
  window.addEventListener("keydown", moveRobot);

  left.addEventListener("click", () => {
    press("stanga");
  });
  up.addEventListener("click", () => {
    press("sus");
  });
  right.addEventListener("click", () => {
    press("dreapta");
  });
  down.addEventListener("click", () => {
    press("jos");
  });
};

go();
