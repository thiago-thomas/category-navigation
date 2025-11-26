import { BrandRow } from '@/components/BrandRow';
import { CacheIndicator } from '@/components/CacheIndicator';
import { CategoryList } from '@/components/CategoryList';
import { ErrorView } from '@/components/ErrorView';
import { HighlightGrid } from '@/components/HighlightGrid';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { useCategoryTree } from '@/hooks/useCategoryTree';
import { useHighlightContent } from '@/hooks/useHighlightContent';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function CategoryEntryScreen() {
  const {
    data: highlightData,
    isLoading: isLoadingHighlights,
    error: highlightError,
    refetch: refetchHighlights,
  } = useHighlightContent();

  const {
    data: categoryData,
    isLoading: isLoadingCategories,
    error: categoryError,
    refetch: refetchCategories,
  } = useCategoryTree();

  const isLoading = isLoadingHighlights || isLoadingCategories;
  const hasError = highlightError || categoryError;
  const hasData = highlightData || categoryData;

  const handleRetry = () => {
    refetchHighlights();
    refetchCategories();
  };

  if (hasError && !hasData) {
    return <ErrorView onRetry={handleRetry} />;
  }



  return (
    <View style={styles.container}>
      {hasError && hasData && <CacheIndicator />}

      <ScrollView style={styles.scrollView}>
        {isLoadingHighlights && !highlightData ? (
          <SkeletonLoader variant="highlight" />
        ) : (
          highlightData && <HighlightGrid highlights={highlightData.highlights} />
        )}

        {isLoadingCategories && !categoryData ? (
          <SkeletonLoader variant="category" count={5} />
        ) : (
          categoryData?.categories && (
            <CategoryList categories={categoryData.categories} />
          )
        )}

        {isLoadingCategories && !categoryData ? (
          <SkeletonLoader variant="brand" />
        ) : (
          categoryData && <BrandRow brands={categoryData.brands} />
        )}
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
});
