import Users from '../realm/Users';
import UserSchema from '../realm/UserSchema'

export const user = {
  state: {
    email: '',
    username: '',
    password: ''
  },
  reducers: {
    setEmail(state, payload) {
      return { ...state, email: payload };
    },
    setUsername(state, payload) {
      return { ...state, username: payload };
    },
    setPassword(state, payload) {
      return { ...state, password: payload };
    },
  }
}

