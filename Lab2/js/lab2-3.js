const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 =[...arr1];


[jan, feb, mar, apr,may] = arr2;

let number = document.getElementById('months');

let list = `  
    <tr>
        <td class="text-danger font-weight-bold">${jan}</td>
        <td class="text-danger font-weight-bold">${feb}</td>
        <td class="text-danger font-weight-bold">${mar}</td>
        <td class="text-danger font-weight-bold">${apr}</td>
        <td class="text-danger font-weight-bold">${may}</td>
    </tr>
    `
number.innerHTML = list;


console.log(arr2);