import { keys } from '../constans/Config';
import axios from 'axios';

class UserApi {
  async login(args) {
    try {
      const { data } = await axios.post(`${keys.LOCALHOST}/user/signin`, {
        ...args,
      });
      console.log('from API', data);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async signUp(args) {
    try {
      const { data } = await axios.post(`${keys.LOCALHOST}/user/signup`, { ...args });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    try {
      const { data } = await axios.post(`${keys.LOCALHOST}/user/signout`);
      return data;
    } catch (error) {
      throw error;
    }
  }
  async profileUpdate(args) {
    try {
      const { data } = await axios.post(`${keys.LOCALHOST}/user`, { ...args });
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export const User = new UserApi();
