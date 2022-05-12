/* 1 Задача */
Array.prototype.myFilter = function (callback, context) {
  let arr = [];

  for (i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const arrData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = arrData.myFilter((num) => {
  return num > 4;
});

console.log(newArr);

/* 2 Задача */
function createDebounceFunction(fn, delay) {
  let timeout;
  return function () {
    const func = () => {
      fn.apply(this, arguments);
    };

    clearTimeout(timeout);

    timeout = setTimeout(func, delay);
  };
}

function hello() {
  alert('Hello!');
}

hello = createDebounceFunction(hello, 3000);

document.getElementById('btn').addEventListener('click', hello);
