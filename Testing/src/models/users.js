import axios from 'axios';

class Users {
  static all() {
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(resp => resp.data);
  }
}

export default Users;