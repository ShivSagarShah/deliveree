import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}

      <CategoryCard
        imgurl="https://links.papareact.com/gn7"
        title="Testing 1"
      />
      <CategoryCard
        imgurl="https://links.papareact.com/gn7"
        title="Testing 2"
      />
      <CategoryCard
        imgurl="https://links.papareact.com/gn7"
        title="Testing 3"
      />
      <CategoryCard
        imgurl="https://links.papareact.com/gn7"
        title="Testing 4"
      />
    </ScrollView>
  );
};

export default Categories;
