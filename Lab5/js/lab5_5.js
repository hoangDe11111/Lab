const axios = require('axios');

class APICaller {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint) {
    const url = `${this.baseUrl}/${endpoint}`;

    try {
      // Sử dụng Axios
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

class Comment extends APICaller {
  constructor(baseUrl) {
    super(baseUrl);
  }

  async getAll() {
    try {
      const comments = await this.get('comments');
      console.log('Danh sách bình luận:', comments);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách bình luận:', error);
    }
  }

  async getOne(commentId) {
    try {
      const comment = await this.get(`comments/${commentId}`);
      console.log('Bình luận:', comment);
    } catch (error) {
      console.error('Lỗi khi lấy bình luận:', error);
    }
  }
}

class Post extends APICaller {
  constructor(baseUrl) {
    super(baseUrl);
  }

  async getAll() {
    try {
      const posts = await this.get('posts');
      console.log('Danh sách bài viết:', posts);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách bài viết:', error);
    }
  }

  async getOne(postId) {
    try {
      const post = await this.get(`posts/${postId}`);
      console.log('Bài viết:', post);
    } catch (error) {
      console.error('Lỗi khi lấy bài viết:', error);
    }
  }
}

const baseUrl = 'https://jsonplaceholder.typicode.com';
const commentAPI = new Comment(baseUrl);
const postAPI = new Post(baseUrl);

commentAPI.getAll(); 
commentAPI.getOne(1); 

postAPI.getAll(); 
postAPI.getOne(1); 