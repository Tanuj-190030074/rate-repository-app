import AsyncStorage from '@react-native-community/async-storage';

const ACCESS_TOKEN = "accessToken";

class AuthStorage {

  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:${ACCESS_TOKEN}`,
    );

    return accessToken ? JSON.parse(accessToken) : '';
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:${ACCESS_TOKEN}`,
      JSON.stringify(accessToken),
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:${ACCESS_TOKEN}`);
  }
}

export default AuthStorage;