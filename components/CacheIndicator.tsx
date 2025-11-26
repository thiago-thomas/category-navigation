import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function CacheIndicator() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📦 Using cached data</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3CD',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFE69C',
  },
  text: {
    fontSize: 14,
    color: '#856404',
    textAlign: 'center',
  },
});
