"use strict";
/*
// const promise = new Promise((resolve, reject) => {
//   setTimeout(
//     function (a, b) {
//       if (a > b) {
//         resolve({ message: "Dormi putin..." });
//       } else {
//         reject(new Error(`Something went wrong...`));
//       }
//     },
//     2000,
//     3,
//     2
//   );
// });

// async function handlePromise() {
//   try {
//     const response = await promise;
//     console.log(response.message);
//   } catch (err) {
//     console.error(`Eroare: ${err.message}`);
//   }
// }
// handlePromise();

/*
// Try and catch

function example(number) {
  try {
    if (number !== 100) {
      throw new Error("Ceva nu e in regula");
    } else {
      console.log("Este egal cu 100");
    }
  } catch (err) {
    console.error(err);
  }
}

example(100);
example(200);

// promisiuni cu fetch

const myPromise = new Promise((resolve, reject) => {
  fetch(`https://rickandmortyapi.com/api`)
    .then((res) => {
      console.log(`Promisiune cu 'resolve/reject'`);
      if (!res.ok) {
        throw new Error(`Problem with ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("Data de la 'resolve/reject' : ", data);
    });
});

// myPromise();

const characters = function () {
  fetch(`https://rickandmortyapi.com/api`)
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`Problem with ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(`Promisiune cu '.then + throw'`);
      console.log("Data de la '.then + throw'", data);
    })
    .catch((err) => {
      console.error(err);
    });
};
characters();
*/
/*
async function char() {
  try {
    // const response = await fetch(`https://rickandmortyapi.com/api`);
    // vezi diferenta dintre data cu 'await' si data fara 'await' (daca nu pun await imi ramane promise-ul in pending)
    // const data = response.json();
    // const data = await response.json();
    // console.log("Data de la 'async/await' ", data);
    const char = await fetch(
      `https://rickandmortyapi.com/api/character?page=1`
    );
    console.log("char : ", char);
    if (!char.ok) {
    }
    const dataChar = await char.json();
    console.log("dataChar este : ", dataChar);

    console.log("dataChar.results[0] este : ", dataChar.results[0]);
    let { character } = dataChar.results[0];
    // console.log(character);

    // character = {
    //   id: character.id,
    //   name: character.name,
    //   species: character.species,
    //   gender: character.gender,
    //   origin: character.origin,
    //   location: character.location,
    // };

    // console.log(character);
  } catch (err) {
    console.error(`We have a problem: ${err}`);
  }
}
char("info");
*/
// Callback Hell

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log("1 second passed");
//     return wait(2);
//   })
//   .then(() => {
//     console.log("2 second passed");
//     return wait(3);
//   })
//   .then(() => {
//     console.log("3 second passed");
//     return wait(4);
//   })
//   .then(() => console.log("4 second passed"));

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 seconds passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// setInterval
// let a = 1;
// setInterval(() => {
//   console.log(`au trecut ${a} secunde`);
//   a++;
// }, 1000);

// setTimeout(() => {
//   console.log("ceva");
// }, 5000);

// x();

// myPromise.then(console.log);
// myPromise.then((val) => console.log(val));

// async function exemple() {
//   let x;
//   const myPromise = new Promise((resolve, reject) => {
//     x = () =>
//       setTimeout(() => {
//         console.log("au trecut 2 secunde");
//         return resolve("1");
//       }, 2000);
//   });
//   console.log("1");
//   setTimeout(() => {
//     console.log("First timeout");
//     x();
//     // x();
//     // x();
//   }, 1000);
//   console.log("2");
//   await myPromise;
//   console.log("OK");
// }
// exemple();

// un array in care inregistrez evenimente,
// ex: eventul asta vreau sa se faca dupa 2 secunde
// cand apas pe start sa se execute secvential unul dupa altul

/*
async function event() {
  let arr = [];
  let start;
  const myPromise = new Promise((resolve, reject) => {
    start = (sec, name) => {
      setTimeout(() => {
        arr.push(name);
        console.log(
          `Felicitari!! Ai adaugat in ${sec} secunde evenimentul '${name}' 🎉`
        );
        return resolve("1");
      }, sec * 1000);
    };
  });

  let x;
  console.log("Asteapta 2 secunde...");
  x = (sec, name) =>
    setTimeout(() => {
      // console.log("ceva");
      start(sec, name);
      // start(1, name);
      // start(1, name);
    }, 1000);

  x(2, "nunta");
  // x(2, "botez");
  await myPromise;
  // console.log("OK");
  // console.log(arr);

  console.log(`Evenimentele programate recent sunt: ${arr}.`);
}
event();

*/
// setTimeout(() => {
//   setTimeout(() => {
//     console.log("asteptam 2 secunde pentru fiecare event?");
//   }, 2000);
//   console.log("asteptam 2 secunde pentru fiecare event?");
//   console.log("asteptam 2 secunde pentru fiecare event?");
// }, 2000);

// let x = [1, 2, 3, 4, 5];

// let y = (sec) => {
//   setTimeout(() => {
//     x.forEach((val) => {
//       setTimeout(() => {
//         console.log(val);
//       }, sec * 1000);
//     });
//   }, sec * 1000);
// };

// y(4);

// Lasa-l in pace pe asta, e doar o bucatica
// const start = (sec, name) => {
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log(
//         `Felicitari!! Ai adaugat in ${sec} secunde evenimentul '${name}' 🎉`
//       );
//     }, sec * 1000);
//   });
// };

// Cea mai buna varianta de pana acum

// let arr = [];

// const start = (sec, name) => {
//   arr.push(name);
//   setTimeout(() => {
//     console.log(
//       `Felicitari!! Ai adaugat evenimentul '${name}' in ${sec} secunde 🎉`
//     );
//   }, sec * 1000);
// };

// start(5, "banchet");
// start(2, "nunta");
// start(3, "botez");

// console.log(arr);

// async function a() {
//   try {
//     start(5, "banchet");
//     start(2, "nunta");
//     start(3, "botez");
//   } finally {
//     console.log(arr);
// console.log(
//   `Evenimentele programate recent sunt: ${arr.forEach((val) =>
//     console.log(val)
//   )}`
// );
//   }
// }

// a();

// daca verific arr-ul inainte sa fac in console.log evenimentul, nu-mi apare
// dar daca verific dupa ce se afiseaza tot console.log-ul, imi apare arr-ul

// altceva

// prima parte

/*
// let start;
let arr = [];
let start = (sec, name) => {
  arr.push(name);
  console.log(
    `Felicitari!! Ai adaugat in ${sec} secunde evenimentul '${name}' 🎉`
  );
};

console.log("Program started");
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    start(2, "nunta");
    // start(2, "banchet");
    // start(2, "majorat");
    resolve();
  }, 2000);
});

console.log(myPromise);
console.log("Event in progress...");

myPromise
  .then(() => {
    // console.log(val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(start(2, "banchet"));
      }, 2000);
    });
  })
  .then(() => {
    setTimeout(() => {
      console.log(arr);
    }, 1000);
  });

/*
const logEvent = (event) => {
  console.log(event);
};

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

const event = (sec, name) => {
  return wait(sec).then(() => logEvent(name));
};

event(3, "nunta");
*/

/*
let arr = [];

const myPromise = (name) => {
  arr.push(name);
  return new Promise((resolve) => {
    resolve(name);
  });
};

// myPromise("nunta"); //.then((val) => console.log(val));
myPromise("nunta");
myPromise("botez");
myPromise("banchet");

Promise.all(arr).then((val) => {
  // console.log(val);
  for (let i of val) {
    // console.log(i);
    setTimeout(() => {
      // console.log(`Felicitari!! Ai adaugat evenimentul '${i}' 🎉`);
    }, 2000);
  }
});
*/
// alta incercare
// const promise1 = "event1";
// const promise2 = "event2";
// const promise3 = "event3";

// Promise.all([promise1, promise2, promise3]).then((val) => {
//   for (let i of val) {

//     setTimeout(() => {
//       // console.log("ceva");
//       console.log(i);
//     }, 2000);
//   }
// });

// const logEvent = (event) => {
//   console.log(event);
// };

// const wait = (sec) => {
//   return new Promise((resolve) => {
//     setTimeout(resolve, sec * 1000);
//   });
// };

// const event = (sec, name) => {
//   return wait(sec).then(() => {
//     logEvent(name);
//   });
// };

// const events = [
//   { sec: 2, name: 'Event 1' },
//   { sec: 2, name: 'Event 2' },
//   { sec: 2, name: 'Event 3' },
//   // ...
//   { sec: 2, name: 'Event 100' },
// ];

// async function executeEvents() {
//   for (const { sec, name } of events) {
//     await event(sec, name);
//   }
// }

// executeEvents();

/*
const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

const event = async (sec, name) => {
  console.log(
    `Felicitari!! Ai adaugat in ${sec} secunde evenimentul '${name}' 🎉`
  );
  await wait(sec);
};

async function execute(sec, name) {
  await event(sec, name);
  await wait(sec);
}

execute(2, "nunta");
execute(2, "party");
// execute(2, "botez");

*/

// const events = ["Event 1", "Event 2", "Event 3"];

// async function executeEvents() {
//   for (const eventName of events) {
//     await event(eventName);
//   }
// }

// executeEvents();

// "astepti n secunde si afisezi un event"
// "s-a afisat dupa n secunde"

// const fetch = async () => {
//   return "Hellow";
// };

// const result = fetch();
// console.log(result);

let arr = [
  [2, "ceva"],
  [3, "altceva"],
  [1, "ceva"],
  [2, "altceva"],
];

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

const afis = async (sec, name) => {
  await wait(sec, name);
  console.log(`in ${sec} sec, ${name}`);
};

const abc = async function main() {
  for (let [i, val] of arr) {
    await afis(i, val);
  }
};

abc();

/*
// IIFE
(async () => {
  await afis(2, "ceva");
  await afis(3, "altceva");
  await afis(1, "ceva");
  await afis(2, "altceva");
})();
// functie normala 
async function main() {
  await afis(2, "ceva");
  await afis(3, "altceva");
  await afis(1, "ceva");
  await afis(2, "altceva");
}
main();
//function expression
*/

// const sec = document.querySelector(".sec");
