import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { colors } from '@/theme';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Stack screenOptions={screenOptions} />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const screenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: colors.background },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
