import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

interface SkeletonLoaderProps {
  variant: 'highlight' | 'category' | 'brand';
  count?: number;
}

export function SkeletonLoader({ variant, count = 1 }: SkeletonLoaderProps) {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, [opacity]);

  if (variant === 'highlight') {
    return (
      <View style={styles.highlightGrid}>
        {[...Array(4)].map((_, index) => (
          <Animated.View
            key={index}
            style={[styles.highlightCard, { opacity }]}
          />
        ))}
      </View>
    );
  }

  if (variant === 'category') {
    return (
      <View style={styles.categoryList}>
        {[...Array(count)].map((_, index) => (
          <Animated.View
            key={index}
            style={[styles.categoryItem, { opacity }]}
          />
        ))}
      </View>
    );
  }

  if (variant === 'brand') {
    return (
      <Animated.View style={[styles.brandRow, { opacity }]} />
    );
  }

  return null;
}

const styles = StyleSheet.create({
  highlightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 12,
  },
  highlightCard: {
    width: '48%',
    aspectRatio: 1.2,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
  },
  categoryList: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    height: 80,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    marginBottom: 12,
  },
  brandRow: {
    height: 80,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
