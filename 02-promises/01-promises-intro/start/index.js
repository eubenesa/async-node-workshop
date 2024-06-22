import { promisify } from "util";

// Delay with a Callback

let delay = (seconds, callback) => {
  if (seconds > 3) {
    callback(new Error(`${seconds} seconds is too long`));
  } else {
    setTimeout(
      () => callback(null, `the ${seconds} second delay is over`),
      seconds * 1000
    );
  }
};

// delay(1, () => {
//   console.log("the delay has ended");
// });

// // Delay with a Promise
// let promiseDelay = (seconds) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, seconds * 1000);
//   });

// promiseDelay(2).then(() => console.log("the long delay has ended"));

let promiseDelay = promisify(delay);
promiseDelay(2).then(console.log).catch(console.error);

// delay(6, (error, message) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(message);
//   }
// });
