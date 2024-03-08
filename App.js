import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavTab from './App/Navigations/NavTab';
import { Clerk, ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import UserAuthentication from './App/Screens/SignInScreen/UserAuthentication';
import * as SecureStore from "expo-secure-store";

const Stack = createStackNavigator()

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value
  ) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}>

      <SignedIn>
        <NavigationContainer>
          <NavTab />
        </NavigationContainer>
      </SignedIn>

      <SignedOut>
        <UserAuthentication />
      </SignedOut>
    </ClerkProvider>
  );
}




