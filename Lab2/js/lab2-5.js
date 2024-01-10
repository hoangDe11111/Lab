fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
  .then(response => response.json())
  .then(data => {
    const dataBody = document.getElementById('dataUser');
    const tableRows = data.map(({ id, avatar, name, createdAt }) => {
      return `
        <tr>
          <td>${id}</td>
          <td><img src="${avatar}" alt="" class="rounded"></td>
          <td>${name}</td>
          <td>${createdAt}</td>
        </tr>
      `;
    });
    dataBody.innerHTML = [...tableRows].join('');
  })
  .catch(error => {
    console.error(error);
  });