import { Pressable, StyleSheet, Text } from "react-native";

export function CategoryItem() {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.name}>Categoria 01</Text>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 16,
  },
  chevron: {
    fontSize: 24,
    color: '#CCCCCC',
    fontWeight: '300',
  },
});
