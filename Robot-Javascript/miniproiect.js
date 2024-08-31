/*
const add = document.querySelector(".add");
const dlt = document.querySelector(".delete");
const out = document.querySelector(".output");
// console.log(sec.textContent);
let arr = [];

add.addEventListener("click", function () {
  const sec = Number(document.querySelector(".sec").value);
  const text = document.querySelector(".text").value;
  console.log(`Ai adaugat '${text}', asteapta ${sec} secunde.`);

  // Add values in the array
  arr.push({ sec, text });
  // console.log(arr);

  out.innerHTML = JSON.stringify(arr);
  // console.log("out = ", out);

  // delete input value after button submit
  document.querySelector(".sec").value = "";
  document.querySelector(".text").value = "";

  // if (sec === 0 || text === null) {
  //   console.log("Nu ai adaugat secunde sau text...");
  // }
  /*
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  // async await the input values
  const wait = (sec) => {
    return new Promise((resolve) => {
      setTimeout(resolve, sec * 1000);
    });
  };

  const afis = async (sec, name) => {
    // elimina primul element din arr
    arr.splice(0, 1);
    // console.log(arr);
    await wait(sec, name);
    console.log(`Felicitari!!🎉🎉 Ai adaugat "${name}" in ${sec} sec.`);
  };

  const abc = async function main() {
    for (let [i, val] of arr) {
      out.innerHTML = arr;
      await afis(i, val);
    }
  };

  abc();
});

dlt.addEventListener("click", function () {
  console.log("ai sters ceva?");
  console.log(arr);
  arr.shift();
  if (arr.length > 0) {
    out.innerHTML = JSON.stringify(arr);
  } else {
    out.innerHTML = "";
  }
});
*/

const add = document.querySelector(".add");
const dlt = document.querySelector(".delete");
const out = document.querySelector(".output");
// console.log(sec.textContent);
let arr = [];

add.addEventListener("click", function () {
  const sec = Number(document.querySelector(".sec").value);
  const text = document.querySelector(".text").value;
  console.log(`Ai adaugat '${text}', asteapta ${sec} secunde.`);

  // Add values in the array
  arr.push({ sec, text });

  // output the values in the gray box
  out.innerHTML = JSON.stringify(arr);

  // delete input value after submitting the button
  document.querySelector(".sec").value = "";
  document.querySelector(".text").value = "";

 
});
const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
}; 


const afis = async (sec, name) => {
  // elimina primul element din arr
  console.log(sec, name);
  await wait(sec);
  console.log(`Felicitari!!🎉🎉 Ai adaugat "${name}" in ${sec} sec.`);
  arr.splice(0, 1);

  if (arr.length > 0) {
    out.innerHTML = JSON.stringify(arr);
  } else {
    out.innerHTML = "";
  }
};

const abc = async function main() {
  for (let item of arr) {
    console.log("arr: ", arr);

    await afis(item.sec, item.text);
  }
};

// abc();

dlt.addEventListener("click", function () {
  console.log("Am sters primul element ->", arr);
  // console.log(arr);
  arr.shift();
  if (arr.length > 0) {
    out.innerHTML = JSON.stringify(arr);
  } else {
    out.innerHTML = "";
  }
});

// const abc = async function main() {
//   for (const [i, val] of Object.entries(arr)) {
//     // out.innerHTML = arr;
//     console.log("arr(i)", arr[i]);

//     await afis(i, val);
//   }
// };
