let compareMinMax = (num1, num2, num3) => {
   
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);

    let maxId = document.getElementById('max');
    let minId = document.getElementById('min');
    maxId.innerHTML = `Giá trị lớn nhất là: ${max}`;
    minId.innerHTML = `Giá trị nhỏ nhất là: ${min}`;
    console.log(`Giá trị lớn nhất là: ${max}`);
    console.log(`Giá trị nhỏ nhất là: ${min}`);
  }
  
  
  let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
  let num2 = parseFloat(prompt("Nhập số thứ hai:"));
  let num3 = parseFloat(prompt("Nhập số thứ ba:"));

  compareMinMax(num1, num2, num3);