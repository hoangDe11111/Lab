const axios = require('axios');
const { readFile } = require('fs').promises;

async function fetchData() {
  try {
    const data = await readFile('js/data.json', { encoding: 'utf8' });

    console.log('Data loaded from disk', data);

    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Data downloaded from url', res.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();