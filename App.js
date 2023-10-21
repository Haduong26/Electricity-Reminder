import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLayout from './AppLayout';
import * as Notifications from 'expo-notifications';

export default function App() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  const triggerNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'My Notification Title',
        body: 'Hello, this is a local notification!',
      },
      trigger: null, // Immediately display the notification
    });
  };
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
        <AppLayout />
        <Button title="Show Notification" onPress={triggerNotification} />

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
