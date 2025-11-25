import { StyleSheet, View } from "react-native";
import { CategoryItem } from "./CategoryItem";

export function CategoryList() {
  return (
    <View style={styles.container}>
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
      <CategoryItem />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
})