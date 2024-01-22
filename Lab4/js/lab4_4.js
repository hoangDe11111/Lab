let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1!"), 2000);
  });
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2!"), 1000);
  });
  
  async function handlePromises() {
    try {
      let value1 = await promise;
      console.log(value1);
      let value2 = await promise2;
      console.log(value2);
    } catch (error) {
      console.error(error);
    }
  }
  
  handlePromises();