import { CategoryItem } from '@/components/CategoryItem';
import { ErrorView } from '@/components/ErrorView';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { useCategoryTree } from '@/hooks/useCategoryTree';
import { findCategoryById, isLeafCategory } from '@/utils/categoryHelpers';
import { navigateToCategoryLevel, navigateToRoute } from '@/utils/navigation';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CategoryLevelScreen() {
  const { id, name } = useLocalSearchParams<{ id: string; name: string }>();
  
  const {
    data: categoryData,
    isLoading,
    error,
    refetch,
  } = useCategoryTree();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Loading...' }} />
        <SkeletonLoader variant="category" count={6} />
      </View>
    );
  }

  if (error || !categoryData) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Error' }} />
        <ErrorView onRetry={refetch} />
      </View>
    );
  }

  const category = findCategoryById(categoryData.categories, id);

  if (!category) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Not Found' }} />
        <ErrorView message="Category not found" onRetry={refetch} />
      </View>
    );
  }

  const handleCategoryPress = (childCategory: typeof category) => {
    if (isLeafCategory(childCategory)) {
      navigateToRoute(childCategory.route);
    } else {
      navigateToCategoryLevel(childCategory.id, childCategory.name);
    }
  };

  const handleViewAll = () => {
    navigateToRoute(category.route);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: name || category.name }} />
      
      <ScrollView style={styles.scrollView}>
        <Pressable style={styles.viewAllButton} onPress={handleViewAll}>
          <Text style={styles.viewAllText}>View all in {category.name}</Text>
          <Text style={styles.chevron}>›</Text>
        </Pressable>

        <View style={styles.categoriesContainer}>
          {category.children?.map((child) => (
            <CategoryItem
              key={child.id}
              category={child}
              onPress={() => handleCategoryPress(child)}
              showChevron={!isLeafCategory(child)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollView: {
    flex: 1,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#007AFF',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  chevron: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
});
