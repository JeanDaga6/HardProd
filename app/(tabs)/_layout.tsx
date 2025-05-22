import { Stack, Tabs } from "expo-router";
import React from "react";
import { FontAwesome} from "@expo/vector-icons";

export default function Layout() {
  return(
    <Tabs>
      <Tabs.Screen name="index" options={{
        headerShown: false,
        title: 'Início',
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name="home" size={size} color={color} />;
        }
        }} />
      <Tabs.Screen name="sobre" options={{
        headerShown: false,
        title: 'Sobre',
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name="user" size={size} color={color} />;
        }
        }} />
    </Tabs>
  );
}
