import { Stack } from 'expo-router'
import { Header } from 'react-native/Libraries/NewAppScreen'

export default function RootLayout () {
  return (
    <Stack screenOptions={{headerShown: true}}>
      <Stack.Screen name="index" options={{ title: 'Página Inicial'}}/>
    </Stack>
  )
}