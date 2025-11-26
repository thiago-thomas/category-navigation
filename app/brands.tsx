import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function BrandListPlaceholderScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Brands' }} />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.emoji}>🏷️</Text>
        <Text style={styles.title}>Brand List Placeholder</Text>
        <Text style={styles.description}>
          In a real app, this would display a list of all available brands.
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
  description: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    lineHeight: 20,
  },
});
