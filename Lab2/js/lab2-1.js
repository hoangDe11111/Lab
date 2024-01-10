
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  let listUl = document.getElementById("list");
  function makeList(arr) {
    arr.forEach(item => {
        const list = 
      `
      <li class="text-warning">${item}</li>
      `
        listUl.innerHTML += list;
      });
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);

