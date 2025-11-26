import { CategoryNode } from '@/types';
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

interface CategoryItemProps {
  category: CategoryNode;
  onPress: () => void;
  showChevron?: boolean;
}

export function CategoryItem({ category, onPress, showChevron = true }: CategoryItemProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: category.image }} style={styles.image} />
      <Text style={styles.name}>{category.name}</Text>
      {showChevron && <Text style={styles.chevron}>›</Text>}
    </Pressable>
  );
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
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
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
