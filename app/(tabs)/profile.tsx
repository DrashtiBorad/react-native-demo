import { useRouter } from "expo-router";
import React from "react";
import { Button, Image, Text, View } from "react-native";

const Profile = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <View className="items-center justify-center bg-white p-10 border border-blue-300 rounded-2xl shadow-2xl">
        <Text className="text-2xl text-blue-600 mt-2">
          Welcome to My profile!
        </Text>

        <View className="py-4 flex items-center justify-center">
          <Image
            source={require("../../assets/images/profilePhoto.png")}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <Text className="text-lg">Name : Drashti </Text>
          <Text className="text-lg">Email : d******@gmail.com</Text>
        </View>

        <Button
          title="Go TO Home Page"
          onPress={() => {
            router.push("/");
          }}
        />
      </View>
    </View>
  );
};

export default Profile;
