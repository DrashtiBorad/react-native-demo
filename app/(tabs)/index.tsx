import { useRouter } from "expo-router";
import { Image, Text, TextInput, View } from "react-native";

export default function Index() {
  const route = useRouter();

  return (
    <View className="flex-1 bg-white">
      <View className="w-full px-5 pt-4 my-8">
        <View className="flex flex-row items-center border border-gray-300 rounded-full py-2 px-4 bg-white w-full">
          <Image
            source={require("../../assets/images/search.png")}
            style={{ width: 22, height: 22, tintColor: "#888" }}
            resizeMode="contain"
          />
          <TextInput
            className="flex-1 ml-2 text-base"
            placeholder="Search here..."
            placeholderTextColor="#888"
            onFocus={() => route.push("/search")}
          />
        </View>
      </View>

      <View className="flex-1 items-center justify-center p-7 bg-gray-100">
        <View className="flex flex-col items-center justify-center bg-white p-10 border border-blue-300 rounded-2xl shadow-2xl py-10">
          <Text className="text-2xl text-blue-600 mt-2">
            Welcome to Homepage !!
          </Text>
          <Text className="text-sm mt-2">
            Please Wait we are working on integrating new
          </Text>
        </View>
      </View>
    </View>
  );
}
