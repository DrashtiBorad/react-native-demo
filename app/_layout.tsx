import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="userDetail/[id]"
        options={{
          title: "User Detail",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
