import { getHighlightContent } from '@/services/mockApi';
import { useQuery } from '@tanstack/react-query';

/**
 * React Query hook for fetching highlight content
 * Implements stale-while-revalidate behavior
 */
export function useHighlightContent() {
  return useQuery({
    queryKey: ['highlightContent'],
    queryFn: getHighlightContent,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    retry: 2,
    retryDelay: 1000,
  });
}
