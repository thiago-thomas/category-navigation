import { HighlightCard } from '@/types';
import { navigateToRoute } from '@/utils/navigation';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface HighlightGridProps {
  highlights: HighlightCard[];
}

export function HighlightGrid({ highlights }: HighlightGridProps) {
  // Only show grid if exactly 4 cards
  if (highlights.length !== 4) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {highlights.map((card) => (
          <Pressable
            key={card.id}
            style={styles.card}
            onPress={() => navigateToRoute(card.route)}
          >
            <Image source={{ uri: card.image }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{card.title}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
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
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
