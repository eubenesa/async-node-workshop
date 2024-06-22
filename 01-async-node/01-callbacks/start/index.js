// single thread
// event loop
// respond to events in order
// callback functions
// asynchronous
// shared global

function* singTo({ name, adjective, verb, chorus }) {
  yield console.log(`la la la ${name}`);
  yield console.log(`${name}, you're so ${adjective}`);
  yield console.log(`Can we ${verb} together forever`);
  chorus(name); // asynchronous
  chorus(name);
  yield { done: true };
}

const florence = singTo({
  name: "Florence",
  adjective: "beautiful",
  verb: "do paperwork",
  chorus(name) {
    console.log(`sha na na, ${name}, you're a person I know`);
  },
});

// florence.next();
// florence.next();
// florence.next();
// florence.next(); // rest of function

const theSinging = setInterval(() => {
  const { done = false } = florence.next();
  if (done) {
    clearInterval(theSinging);
    console.log("the singing has ended");
  }
}, 2000);
