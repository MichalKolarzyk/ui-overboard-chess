import * as SecureStore from 'expo-secure-store';

export const useSecureStore = () => {
  const set = async (key : string, value: any) => {
    await SecureStore.setItemAsync(key, value);
  }

  const get = async (key: string) => {
    return await SecureStore.getItemAsync(key);
  }

  return {
    get,
    set,
  }
};
