import { useState } from 'react';
import { Platform, Pressable, SafeAreaView, StatusBar as RNStatusBar, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

type Screen = 'home' | 'about';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.switchButton}
        onPress={() => setScreen(screen === 'home' ? 'about' : 'home')}
      >
        <Text style={styles.switchButtonText}>
          {screen === 'home' ? 'О приложении' : 'На главную'}
        </Text>
      </Pressable>
      {screen === 'home' ? <HomeScreen /> : <AboutScreen />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f8',
    // SafeAreaView не даёт отступа на Android, только на iOS
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
  switchButton: {
    alignSelf: 'flex-end',
    margin: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#2f6bff',
  },
  switchButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
});
