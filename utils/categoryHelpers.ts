import { CategoryNode } from '@/types';

export function findCategoryById(
  categories: CategoryNode[],
  id: string
): CategoryNode | null {
  for (const category of categories) {
    if (category.id === id) {
      return category;
    }
    if (category.children) {
      const found = findCategoryById(category.children, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

export function isLeafCategory(category: CategoryNode): boolean {
  return !category.children || category.children.length === 0;
}

export function filterCategories(
  categories: CategoryNode[],
  searchTerm: string
): CategoryNode[] {
  if (!searchTerm.trim()) {
    return categories;
  }

  const term = searchTerm.toLowerCase();
  return categories.filter((category) =>
    category.name.toLowerCase().includes(term)
  );
}
