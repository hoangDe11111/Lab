function spreadOut(){
    let fragment = ['to','code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
  }
  
  let decrip = document.getElementById('decrip');
  console.log(spreadOut());
  
  let description = spreadOut();
  let list = `  
    <h1 class="m-5 text-danger">${description.join(' ')}</h1>
  `;
  
  decrip.innerHTML = list;

