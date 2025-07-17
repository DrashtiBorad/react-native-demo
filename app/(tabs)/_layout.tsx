import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

const TabWithIcon = ({ focused, color, size, icon, label }: any) => {
  if (focused) {
    return (
      <ImageBackground className="flex flex-row justify-center items-center gap-3 py-2 min-w-[100px] bg-blue-200 rounded-full p-1 pt-3 h-[40px]">
        <Image
          source={icon}
          style={{ width: size, height: size, tintColor: color }}
          resizeMode="contain"
        />
        <Text className="text-xs">{label}</Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="flex flex-col min-w-[100px] pt-1 items-center">
        <Image
          source={icon}
          style={{ width: size, height: size, tintColor: color }}
          resizeMode="contain"
        />
        <Text className="text-xs">{label}</Text>
      </View>
    );
  }
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <TabWithIcon
              focused={focused}
              color={color}
              size={size}
              icon={require("../../assets/images/home.png")}
              label="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <TabWithIcon
              focused={focused}
              color={color}
              size={size}
              icon={require("../../assets/images/search.png")}
              label="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="quiz"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <TabWithIcon
              focused={focused}
              color={color}
              size={size}
              icon={require("../../assets/images/quiz.png")}
              label="Quiz"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <TabWithIcon
              focused={focused}
              color={color}
              size={size}
              icon={require("../../assets/images/profile.png")}
              label="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
