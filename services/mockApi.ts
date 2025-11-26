import { CategoryTreeResponse, HighlightContentResponse } from '@/types';
import { mockBrands, mockCategories, mockHighlights } from './mockData';

export const API_CONFIG = {
  simulateError: false,
  delay: 500,
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getHighlightContent(): Promise<HighlightContentResponse> {
  await delay(API_CONFIG.delay);

  if (API_CONFIG.simulateError) {
    throw new Error('Failed to fetch highlight content');
  }

  return {
    highlights: mockHighlights,
  };
}

export async function getCategoryTree(): Promise<CategoryTreeResponse> {
  await delay(API_CONFIG.delay);

  if (API_CONFIG.simulateError) {
    throw new Error('Failed to fetch category tree');
  }

  return {
    categories: mockCategories,
    brands: mockBrands,
  };
}
