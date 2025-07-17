import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function UserDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View>
        <Text>User not found.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-white p-4">
      <View className="justify-center bg-white p-8 border border-blue-300 rounded-2xl shadow-2xl">
        <Text className="text-center font-bold text-2xl">User Details</Text>
        <Text>{user.name}</Text>
        {/* <Text>Username: {user.username}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>Website: {user.website}</Text>
        <Text>
          Address: {user.address.street}, {user.address.suite},
          {user.address.city}, {user.address.zipcode}
        </Text>
        <Text>Company: {user.company.name}</Text>
        <Text>CatchPhrase: {user.company.catchPhrase}</Text> */}
        <View className="flex items-center justify-center mt-4">
          <Pressable
            className="w-8/12 bg-blue-500 px-4 py-2 rounded-lg"
            onPress={() => router.push("/")}>
            <Text className="text-center text-white text-base">
              Back To UserList
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
