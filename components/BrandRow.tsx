import { Pressable, StyleSheet, Text, View } from "react-native"

export function BrandRow() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.row}>
        <Text style={styles.name}>Brands</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 32,
    borderWidth: 2,
    borderColor: '#007aff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007aff',
  },
  chevron: {
    fontSize: 24,
    color: '#CCCCCC',
    fontWeight: '300',
  },
})