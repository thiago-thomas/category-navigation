import { BrandsNode } from '@/types';
import { navigateToBrands } from '@/utils/navigation';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface BrandRowProps {
  brands: BrandsNode;
}

export function BrandRow({ brands }: BrandRowProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.row} onPress={navigateToBrands}>
        <Image source={{ uri: brands.image }} style={styles.image} />
        <Text style={styles.name}>{brands.name}</Text>
        <Text style={styles.chevron}>›</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginLeft: 16,
  },
  chevron: {
    fontSize: 24,
    color: '#007AFF',
    fontWeight: '300',
  },
});
