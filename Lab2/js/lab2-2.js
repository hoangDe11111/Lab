  
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo (list) {
const [a, b, ...arr] = list;
return arr;
}
const arr = removeFirstTwo(source);

let number = document.getElementById('number');

let list = `  
<p class="label">Kết quả 1: <p class="text-primary font-weight-bold">${arr}</p></p> 
<p class="label">Kết quả 2:<p class="text-primary font-weight-bold">${source}</p></p> 
`
number.innerHTML = list;

console.log(arr) ;
console.log(source) ;
