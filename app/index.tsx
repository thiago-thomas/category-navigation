import { BrandRow } from "@/components/BrandRow";
import { CategoryList } from "@/components/CategoryList";
import { HighlightGrid } from "@/components/HighlightGrid";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HighlightGrid/>
        <CategoryList />
        <BrandRow />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollView: {
    flex: 1,
  },
});
