const arr = [1, 2, 3, 4, 5, 6, 7];

const sumArr = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

let sum = document.getElementById('sum');

sum.innerHTML = sumArr(arr);

console.log(sumArr(arr)); 