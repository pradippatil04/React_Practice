
import axios from 'axios';
import Users from './users';

jest.mock('axios');

describe('users model',()=>{

it('should fetch users',()=>{
    const users = [{name : 'patil'}];
    const resp = { data : users };

    axios.get.mockResolvedValue(resp);

    return Users.all().then(data => expect(data).toEqual(users))
})

})