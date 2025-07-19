import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#00FFCC',   // vibrant purple for active
        tabBarInactiveTintColor: '#22223B', // dark muted for inactive
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) =><FontAwesome5 name="home" size={24} color={color} />, headerShown: false }} />
      <Tabs.Screen name="html" options={{ title: 'HTML', tabBarIcon: ({ color }) =><FontAwesome5 name="html5" size={24} color={color} />, headerShown: false }} />
      <Tabs.Screen name="css" options={{ title: 'CSS', tabBarIcon: ({ color }) =><FontAwesome5 name="css3" size={24} color={color} />, headerShown: false }} />
      <Tabs.Screen name="js" options={{ title: 'JS', tabBarIcon: ({ color }) =><FontAwesome5 name="js" size={24} color={color} />, headerShown: false }} />
    </Tabs>
  );
}
