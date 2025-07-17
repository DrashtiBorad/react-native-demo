import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default function Index() {
  const route = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch(process.env.EXPO_PUBLIC_API_URL || "")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
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

      <ScrollView className="flex-1 px-4">
        {users.map((user) => (
          <View key={user.id} className="mb-2 ">
            <TouchableOpacity
              className="p-4 border rounded-lg border-blue-400"
              key={user.id}
              onPress={() => router.push(`/userDetail/${user.id}`)}>
              <Text>{user.name}</Text>
              {/* {/* <Text>Username: {user.username}</Text> */}
              {/* <Text>Email: {user.email}</Text> */}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
