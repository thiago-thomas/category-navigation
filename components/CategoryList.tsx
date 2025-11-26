import { CategoryNode } from '@/types';
import { isLeafCategory } from '@/utils/categoryHelpers';
import { navigateToCategoryLevel, navigateToRoute } from '@/utils/navigation';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CategoryItem } from './CategoryItem';

interface CategoryListProps {
  categories: CategoryNode[];
}

export function CategoryList({ categories }: CategoryListProps) {
  const handleCategoryPress = (category: CategoryNode) => {
    if (isLeafCategory(category)) {
      navigateToRoute(category.route);
    } else {
      navigateToCategoryLevel(category.id, category.name);
    }
  };

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          onPress={() => handleCategoryPress(category)}
          showChevron={!isLeafCategory(category)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
