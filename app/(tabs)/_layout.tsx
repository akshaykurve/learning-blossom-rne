import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false }} />
      <Tabs.Screen name="html" options={{ title: 'HTML', headerShown: false }} />
      <Tabs.Screen name="css" options={{ title: 'CSS', headerShown: false }} />
      <Tabs.Screen name="js" options={{ title: 'JS', headerShown: false }} />
    </Tabs>
  );
}
