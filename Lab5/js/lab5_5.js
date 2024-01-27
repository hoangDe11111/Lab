class APICaller {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    let url = `${this.baseUrl}/${endpoint}`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
class Name extends APICaller {
  constructor(baseUrl) {
    super(baseUrl);
  }

  async getAll() {
    try {
      let records = await this.get('');
      let names = records.map(record => record.name);
      console.log('Danh sách tên:', names);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách tên:', error);
    }
  }

  async getOne(recordId) {
    try {
      let records = await this.get('');
      let record = records.find(item => item.id === recordId.toString());
      if (record) {
        console.log('Tên:', record.name);
      } else {
        console.log('Không tìm thấy bản ghi với ID:', recordId);
      }
    } catch (error) {
      console.error('Lỗi khi lấy tên:', error);
    }
  }
}
let baseUrl = 'https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students';
let nameAPI = new Name(baseUrl);

nameAPI.getAll();
nameAPI.getOne(5);