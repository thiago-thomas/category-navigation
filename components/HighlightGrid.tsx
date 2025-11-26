import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export function HighlightGrid() {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <Pressable style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/seed/newarrivals/400/300' }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.title}>Card 1</Text>
          </View>
        </Pressable>
        <Pressable style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/seed/newarrivals/400/300' }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.title}>Card 2</Text>
          </View>
        </Pressable>
        <Pressable style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/seed/newarrivals/400/300' }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.title}>Card 3</Text>
          </View>
        </Pressable>
        <Pressable style={styles.card}>
          <Image source={{ uri: 'https://picsum.photos/seed/newarrivals/400/300' }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.title}>Card 4</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '48%',
    aspectRatio: 1.2,
    borderRadius: 12,
    backgroundColor: '#cccccc',
    zIndex: 0.5
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
})