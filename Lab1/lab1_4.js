fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
.then(response => {
    response.json().then(data => {    
        console.log(data);    
        let dataBody = document.getElementById('dataUser');
        data.forEach(item => {
          const listUser =
           `
           <tr>
           <td>${item.id}</td>
           <td><img src="${item.avatar}" alt="" class="rounded"></td>
           <td>${item.name}</td>
           <td>${item.createdAt}</td>
       </tr>
           `;
           dataBody.innerHTML += listUser;
        });
    });
})
.catch(error => {
    console.error(error);
});
fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
.then(response => {
    response.json().then(data => {      
        console.log(data);  
        let dataBody = document.getElementById('dataNation'); 
        let id = 1 ;
        data.data.forEach(item => {
          const listNation =
           `
           <tr>
           <td>${id}</td>
           <td>${item.Nation}</td>
           <td>${item.Year}</td>
           <td>${item.Population}</td>
       </tr>
           `;
           dataBody.innerHTML += listNation;
           id++;
        });
    });
})
.catch(error => {
    console.error(error);
});