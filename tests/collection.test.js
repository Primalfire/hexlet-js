import getFunction from "../functions.js";

const get = getFunction();

// BEGIN (write your solution here)
if (get({ hello: "world" }, "hello") !== "world") {
  throw new Error("Функция работает неверно!");
}

if (get({ hello: "world" }, "hello", "kitty") !== "world") {
  throw new Error("Функция работает неверно!");
}

if (get({}, "hello", "kitty") !== "kitty") {
  throw new Error("Функция работает неверно!");
}
