let count = 0;

function getData() {
  console.log(`function called  ${count++}`);
}

function myDebounce(callback, delay) {
  let interval;
  return function () {
    if (interval) clearInterval(interval);

    interval = setInterval(() => {
      callback();
    }, delay);
  };
}

const betterFunction = myDebounce(getData, 2000);
