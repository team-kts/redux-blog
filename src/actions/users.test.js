import { FETCH_USERS, fetchUsers } from './users';
import { getUsers } from '../services/blogService';

jest.mock('../services/blogService');

describe('actions test', () => {
  it('fetches users', () => {
    const action = fetchUsers();

    expect(action).toEqual({ 
      type: FETCH_USERS,
      loadStart: 'LOAD_USERS_START',
      loadEnd: 'LOAD_USERS_END',
      payload:  getUsers()
    });
  });
});

