import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useBearerToken } from './apis/base/useBearerToken';
import { useOverboardChessApi } from './apis/OverboardChessApis/useOverboardChessApi';

export default function App() {
  const bearerToken = useBearerToken();
  const overboardChessApi = useOverboardChessApi();

  return (
    <View style={styles.container}>
      <Text>Token: {bearerToken.get()}</Text>
      <Button  title='Login' onPress={async () => await overboardChessApi.login({username: "string", password: "string"})}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 3,
  }
});
