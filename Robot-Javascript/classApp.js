"use strict";

// const speedBB8 = document
//   .querySelector(".speedBB8")
//   .addEventListener("click", function () {
//     BB8.run();
//   });

// const speedTerm = document
//   .querySelector(".speedT")
//   .addEventListener("click", function () {
//     Terminator.run();
//   });

//////////////////////////////
/////////////////////////////
// Constructor function
/*
const Robot = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Robot.prototype.miles = function () {
  console.log(`${this.name} can run ${this.speed * 0.6} mph.`);
};

console.log("Robot.prototype: ", Robot.prototype);

// 'this' = the current instance
const Movies = function (name, speed, movie, shape) {
  Robot.call(this, name, speed);
  this.movie = movie;
  this.shape = shape;
};

// Movies.prototype.miles = function () {
//   console.log(`Overwriting attempt`);
// };

// Movies.prototype => obiect care mosteneste Robot.prototype
Movies.prototype = Object.create(Robot.prototype);
console.log("Movies.prototype:", Movies.prototype);

// Introduction
Movies.prototype.introduction = function () {
  console.log(
    `Hello, stranger. I'm ${this.name}, I am from ${this.movie}, I can run ${this.speed} km/h and i have a shape of a ${this.shape}.`
  );
};

// Rolul lor
Movies.prototype.job = function () {
  this.movie === "Star Wars"
    ? console.log(`BB8 electrocutes people.`)
    : console.log("The Terminator kills people.");
};

// Crearea de roboti
const BB8 = new Movies("BB8", 20, "Star Wars", "Sphere");
const Terminator = new Movies(
  "Arnold Schwarzenegger",
  10,
  "The Terminator",
  "Human being"
);

console.log(Terminator);
console.log(BB8);

Terminator.introduction();
BB8.introduction();

Terminator.job();
BB8.job();

Terminator.miles();
BB8.miles();

*/

/*
///////////////////////////////////////
///////////////////////////////////////
// ES6 Classes

class Robot {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  run() {
    console.log(
      `Felicitari, ${this.name}!! Ai folosit o metoda din clasa parinte!🤵🤵`
    );
  }
}

class Movies extends Robot {
  constructor(name, speed, movie, shape) {
    super(name, speed);
    this.movie = movie;
    this.shape = shape;
  }

  run() {
    super.run();
    console.log(`Bravo, ${this.name}: Overwriting!!`);
  }

  // Introduction
  introduction() {
    console.log(
      `Hello! I'm ${this.name}, I am from ${this.movie}, I can run ${this.speed} km/h and i have a shape of a ${this.shape}.`
    );
  }

  // Rolul lor
  job() {
    this.movie === "Star Wars"
      ? console.log(`BB8 electrocutes people.`)
      : console.log("The Terminator kills people.");
  }
}

const BB8 = new Movies("BB8", 20, "Star Wars", "Sphere");
const Terminator = new Movies(
  "Arnold Schwarzenegger",
  10,
  "The Terminator",
  "Human being"
);
console.log(BB8);
console.log(Terminator);

BB8.introduction();
Terminator.introduction();

BB8.job();
Terminator.job();

BB8.run();

*/