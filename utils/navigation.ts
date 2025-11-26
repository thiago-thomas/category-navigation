import { InternalRouteType, Route } from '@/types';
import { router } from 'expo-router';
import { Linking } from 'react-native';

export function navigateToRoute(route: Route) {
  if (route.src === 'EXTERNAL') {
    Linking.openURL(route.url);
  } else {
    navigateToInternalRoute(route.screen, route.params.id);
  }
}

export function navigateToInternalRoute(
  screen: InternalRouteType,
  id: string
) {
  router.push({
    pathname: '/products',
    params: { screen, id },
  });
  router.push({
    pathname: '/products',
    params: { screen, id },
  });
}

export function navigateToCategoryLevel(id: string, name: string) {
  router.push({
    pathname: '/category/[id]',
    params: { id, name },
  });
}

export function navigateToBrands() {
  router.push('/brands');
}
