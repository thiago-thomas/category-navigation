import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProductListPlaceholderScreen() {
  const { screen, id } = useLocalSearchParams<{ screen: string; id: string }>();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Products' }} />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.emoji}>📦</Text>
        <Text style={styles.title}>Product List Placeholder</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Screen Type:</Text>
          <Text style={styles.value}>{screen || 'N/A'}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Category ID:</Text>
          <Text style={styles.value}>{id || 'N/A'}</Text>
        </View>
        <Text style={styles.description}>
          In a real app, this would display a list of products for the selected category.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 24,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    color: '#007AFF',
  },
  description: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 20,
  },
});
